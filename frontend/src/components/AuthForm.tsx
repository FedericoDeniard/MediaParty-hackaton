import { Link } from 'react-router-dom'
import { useState, type ChangeEvent, type FormEvent } from 'react'
import AuthField from './AuthField.tsx'
import AuthCheckbox from './AuthCheckbox.tsx'
import { authModes, type AuthFieldSpec, type AuthMode } from '../data/auth.ts'

export default function AuthForm({ mode }: { mode: AuthMode }) {
  const copy = authModes[mode]
  const [values, setValues] = useState<Record<string, string>>({})

  // TODO(auth): el submit no hace nada todavía. Acá entra la llamada real
  // a Supabase Auth y el estado de carga de `.button--loading`.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
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
    <div className="auth__form-wrap">
      <h2 className="auth__form-title">{copy.formTitle}</h2>
      <p className="auth__form-note">
        {copy.formNote}{' '}
        <Link className="auth__link" to={copy.formLinkTo}>
          {copy.formLinkLabel}
        </Link>
      </p>

      <form className="auth__form" onSubmit={handleSubmit} noValidate>
        {copy.fields.map((field) => (
          <AuthField
            key={field.name}
            name={field.name}
            label={field.label}
            type={field.type}
            autoComplete={field.autoComplete}
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
          {copy.submit}
        </button>

        <p className="auth__legal">{copy.legal}</p>
      </form>
    </div>
  )
}
