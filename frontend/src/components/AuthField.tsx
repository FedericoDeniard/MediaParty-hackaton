import { useId, type InputHTMLAttributes } from 'react'
import { authRuleTests, type AuthRule } from '../data/auth.ts'

interface AuthFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'id'> {
  label: string
  name: string
  type?: 'text' | 'email' | 'password'
  hint?: string
  error?: string
  rules?: AuthRule[]
}

export default function AuthField({
  label,
  name,
  type = 'text',
  hint,
  error,
  rules,
  value,
  ...rest
}: AuthFieldProps) {
  const reactId = useId()
  const id = `field-${reactId.replace(/[^a-zA-Z0-9_-]/g, '')}`
  const hintId = `${id}-hint`
  const errorId = `${id}-error`
  const ruleId = `${id}-rule`

  const typed = typeof value === 'string' ? value : ''
  const pendingRule = rules?.find((rule) => !(authRuleTests[rule.id]?.(typed) ?? false))
  const showPending = typed.length > 0 && Boolean(pendingRule)
  const showComplete = typed.length > 0 && !pendingRule

  const describedBy = [
    hint ? hintId : null,
    error ? errorId : null,
    rules ? ruleId : null,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className="field">
      <label className="field__label" htmlFor={id}>
        {label}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        className="field__input"
        value={value}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy || undefined}
        {...rest}
      />

      {hint && !error && (
        <p className="field__hint" id={hintId}>
          {hint}
        </p>
      )}

      {error && (
        <p className="field__error" id={errorId} role="alert">
          <span className="field__error-label">Error</span>
          {error}
        </p>
      )}

      {rules && (
        <p
          className={`field__rule${showComplete ? ' field__rule--met' : ''}`}
          id={ruleId}
          aria-live="polite"
        >
          {showPending && (
            <>
              <span className="field__rule-mark" aria-hidden="true">
                —
              </span>
              {pendingRule?.message}
            </>
          )}
          {showComplete && (
            <>
              <span className="field__rule-mark" aria-hidden="true">
                ✓
              </span>
              Contraseña completa
            </>
          )}
        </p>
      )}
    </div>
  )
}
