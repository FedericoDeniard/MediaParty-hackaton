import type { ReactNode } from 'react'

interface AuthCheckboxProps {
  id: string
  children: ReactNode
}

export default function AuthCheckbox({ id, children }: AuthCheckboxProps) {
  return (
    <div className="check">
      <input className="check__input" type="checkbox" id={id} name="terms" />
      <label className="check__label" htmlFor={id}>
        {children}
      </label>
    </div>
  )
}
