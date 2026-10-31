import { Link } from 'react-router-dom'
import { useState, type ChangeEvent, type FormEvent } from 'react'
import type { AuthError } from '@supabase/supabase-js'
import AuthField from './AuthField.tsx'
import AuthCheckbox from './AuthCheckbox.tsx'
import {
  authErrorMessages,
  authMessages,
  authModes,
  authRuleTests,
  authTabs,
  type AuthFieldSpec,
  type AuthMode,
} from '../data/auth.ts'
import { supabase } from '../lib/supabase.ts'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(mode: AuthMode, values: Record<string, string>): Record<string, string> {
  const errors: Record<string, string> = {}

  for (const field of authModes[mode].fields) {
    const value = values[field.name] ?? ''

    if (!value.trim()) {
      errors[field.name] = authMessages.required
      continue
    }

    if (field.type === 'email' && !EMAIL_PATTERN.test(value.trim())) {
      errors[field.name] = authMessages.invalidEmail
      continue
    }

    if (field.rules) {
      const pending = field.rules.find((rule) => !(authRuleTests[rule.id]?.(value) ?? false))
      if (pending) {
        errors[field.name] = pending.message
        continue
      }
    }

    if (field.match && value !== (values[field.match] ?? '')) {
      errors[field.name] = field.matchError ?? authMessages.required
    }
  }

  return errors
}

function messageFor(error: AuthError): string {
  return (error.code && authErrorMessages[error.code]) || authMessages.genericError
}

export default function AuthForm({ mode }: { mode: AuthMode }) {
  const copy = authModes[mode]
  const [values, setValues] = useState<Record<string, string>>({})
  const [terms, setTerms] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [pending, setPending] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)
  const [notice, setNotice] = useState<string | null>(null)

  const fieldErrors = submitted ? validate(mode, values) : {}

  const handleChange =
    (name: string) => (event: ChangeEvent<HTMLInputElement>) => {
      setValues((prev) => ({ ...prev, [name]: event.target.value }))
      setFormError(null)
      setNotice(null)
    }

  const errorFor = (field: AuthFieldSpec) => {
    if (fieldErrors[field.name]) return fieldErrors[field.name]
    if (!field.match) return undefined
    const other = values[field.match] ?? ''
    const current = values[field.name] ?? ''
    if (!current || !other || current === other) return undefined
    return field.matchError
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (pending) return

    setSubmitted(true)
    setFormError(null)
    setNotice(null)

    const errors = validate(mode, values)
    const missingTerms = copy.terms && !terms

    if (Object.keys(errors).length > 0) return
    if (missingTerms) {
      setFormError(authMessages.termsRequired)
      return
    }

    setPending(true)

    const email = (values.email ?? '').trim()
    const password = values.password ?? ''

    try {
      if (mode === 'login') {
        const { error } = await supabase.auth.signInWithPassword({ email, password })

        if (error) {
          setFormError(messageFor(error))
          setPending(false)
        }
        return
      }

      const name = (values.name ?? '').trim()
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { name },
          emailRedirectTo: `${window.location.origin}/app/notas`,
        },
      })

      if (error) {
        setFormError(messageFor(error))
        setPending(false)
        return
      }

      if (!data.session) {
        setNotice(authMessages.confirmEmail)
        setPending(false)
      }
    } catch {
      setFormError(authMessages.genericError)
      setPending(false)
    }
  }

  return (
    <>
      <nav className="auth__tabs" aria-label="Acceso">
        {authTabs.map((tab) => (
          <Link
            key={tab.to}
            className={`auth__tab${tab.mode === mode ? ' auth__tab--active' : ''}`}
            to={tab.to}
            aria-current={tab.mode === mode ? 'page' : undefined}
          >
            {tab.label}
          </Link>
        ))}
      </nav>

      <form className="auth__form" onSubmit={handleSubmit} noValidate>
        {copy.fields.map((field) => (
          <AuthField
            key={field.name}
            name={field.name}
            label={field.label}
            type={field.type}
            autoComplete={field.autoComplete}
            placeholder={field.placeholder}
            rules={field.rules}
            value={values[field.name] ?? ''}
            onChange={handleChange(field.name)}
            error={errorFor(field)}
            required
          />
        ))}

        {copy.terms && (
          <AuthCheckbox
            id="terms"
            checked={terms}
            onChange={(event) => {
              setTerms(event.target.checked)
              setFormError(null)
              setNotice(null)
            }}
          >
            Acepto los <a className="auth__link" href="#terminos">términos</a> y la{' '}
            <a className="auth__link" href="#privacidad">política de privacidad</a>.
          </AuthCheckbox>
        )}

        {formError && (
          <p className="auth__notice" role="alert">
            <span className="auth__notice-label">Error</span>
            {formError}
          </p>
        )}

        {notice && (
          <p className="auth__notice" role="status">
            <span className="auth__notice-label">Listo</span>
            {notice}
          </p>
        )}

        <button
          className="button button--solid auth__submit"
          type="submit"
          disabled={pending}
          aria-busy={pending}
        >
          <span>{pending ? copy.pending : copy.submit}</span>
          <span className="auth__submit-arrow" aria-hidden="true">
            →
          </span>
        </button>

        <p className="auth__legal">{copy.legal}</p>
      </form>
    </>
  )
}
