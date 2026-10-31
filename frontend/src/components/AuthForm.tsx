import { Link, useNavigate } from 'react-router-dom'
import { useState, type ChangeEvent, type FormEvent } from 'react'
import AuthField from './AuthField.tsx'
import AuthCheckbox from './AuthCheckbox.tsx'
import { authModes, authTabs, type AuthFieldSpec, type AuthMode } from '../data/auth.ts'

export default function AuthForm({ mode }: { mode: AuthMode }) {
  const copy = authModes[mode]
  const navigate = useNavigate()
  const [values, setValues] = useState<Record<string, string>>({})

  // TODO(auth): el submit no llama a Supabase Auth todavía. Por ahora
  // entra directo a la mesa de trabajo; acá va la llamada real y el
  // estado de carga de `.button--loading`.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    navigate('/app/notas')
  }

  const handleChange =
    (name: string) => (event: ChangeEvent<HTMLInputElement>) => {
      setValues((prev) => ({ ...prev, [name]: event.target.value }))
    }

  const errorFor = (field: AuthFieldSpec) => {
    if (!field.match) return undefined
    const other = values[field.match] ?? ''
    const current = values[field.name] ?? ''
    if (!current || !other || current === other) return undefined
    return field.matchError
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
          />
        ))}

        {copy.terms && (
          <AuthCheckbox id="terms">
            Acepto los <a className="auth__link" href="#terminos">términos</a> y la{' '}
            <a className="auth__link" href="#privacidad">política de privacidad</a>.
          </AuthCheckbox>
        )}

        <button className="button button--solid auth__submit" type="submit">
          <span>{copy.submit}</span>
          <span className="auth__submit-arrow" aria-hidden="true">
            →
          </span>
        </button>

        <p className="auth__legal">{copy.legal}</p>
      </form>
    </>
  )
}
