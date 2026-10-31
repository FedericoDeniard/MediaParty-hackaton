import type { ChangeEvent, ReactNode } from 'react'

interface AuthCheckboxProps {
  id: string
  checked: boolean
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  children: ReactNode
}

export default function AuthCheckbox({ id, checked, onChange, children }: AuthCheckboxProps) {
  return (
    <div className="check">
      <input
        className="check__input"
        type="checkbox"
        id={id}
        name="terms"
        checked={checked}
        onChange={onChange}
        required
      />
      <label className="check__label" htmlFor={id}>
        {children}
      </label>
    </div>
  )
}
