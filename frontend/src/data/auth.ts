export type AuthMode = 'login' | 'register'

export type AuthFieldType = 'text' | 'email' | 'password'

export interface AuthRule {
  id: string
  message: string
}

/* Los requisitos se evalúan contra el valor que escribe el usuario.
   Cada regla trae un mensaje en segunda persona, como pide la voz
   del producto. */
export const authRuleTests: Record<string, (value: string) => boolean> = {
  length: (value) => value.length >= 8,
  uppercase: (value) => /[A-Z]/.test(value),
  number: (value) => /\d/.test(value),
}

export interface AuthFieldSpec {
  name: string
  label: string
  type: AuthFieldType
  autoComplete: string
  placeholder?: string
  rules?: AuthRule[]
  match?: string
  matchError?: string
}

export interface AuthModeSpec {
  fields: AuthFieldSpec[]
  terms: boolean
  submit: string
  pending: string
  legal: string
}

export const authModes: Record<AuthMode, AuthModeSpec> = {
  login: {
    fields: [
      {
        name: 'email',
        label: 'Email',
        type: 'email',
        autoComplete: 'email',
        placeholder: 'nombre@medio.com',
      },
      {
        name: 'password',
        label: 'Contraseña',
        type: 'password',
        autoComplete: 'current-password',
        placeholder: 'Mínimo 8 caracteres',
      },
    ],
    terms: false,
    submit: 'Ingresar',
    pending: 'Ingresando…',
    legal: 'Al entrar aceptás los términos y la política de privacidad.',
  },
  register: {
    fields: [
      {
        name: 'name',
        label: 'Nombre y apellido',
        type: 'text',
        autoComplete: 'name',
        placeholder: 'Ada Lovelace',
      },
      {
        name: 'email',
        label: 'Email',
        type: 'email',
        autoComplete: 'email',
        placeholder: 'nombre@medio.com',
      },
      {
        name: 'password',
        label: 'Contraseña',
        type: 'password',
        autoComplete: 'new-password',
        placeholder: 'Mínimo 8 caracteres',
        rules: [
          { id: 'length', message: 'Se requieren 8 caracteres' },
          { id: 'uppercase', message: 'Se requiere una mayúscula' },
          { id: 'number', message: 'Se requiere un número' },
        ],
      },
      {
        name: 'passwordConfirm',
        label: 'Repetí la contraseña',
        type: 'password',
        autoComplete: 'new-password',
        match: 'password',
        matchError: 'Las contraseñas no coinciden',
      },
    ],
    terms: true,
    submit: 'Crear cuenta',
    pending: 'Creando cuenta…',
    legal: 'Tu cuenta queda activa apenas la creás.',
  },
}

export const authMessages = {
  required: 'Completá este campo.',
  invalidEmail: 'Ingresá un email válido.',
  termsRequired: 'Aceptá los términos y la política de privacidad para crear la cuenta.',
  confirmEmail: 'Te mandamos un mail para confirmar la cuenta. Revisá tu bandeja.',
  genericError: 'No pudimos completar la operación. Probá de nuevo.',
}

export const authErrorMessages: Record<string, string> = {
  invalid_credentials: 'Email o contraseña incorrectos.',
  email_not_confirmed: 'Confirmá tu mail antes de ingresar.',
  user_already_exists: 'Ya existe una cuenta con ese email.',
  weak_password: 'La contraseña no cumple los requisitos mínimos.',
  email_address_invalid: 'Ingresá un email válido.',
  signup_disabled: 'El registro está deshabilitado.',
  over_email_send_rate_limit: 'Esperá un momento antes de volver a intentar.',
  over_request_rate_limit: 'Demasiados intentos. Esperá un momento.',
}

/* El bloque editorial es el mismo en las dos pantallas: es la voz
   de la marca, no la del formulario. */
export const authEditorial = {
  date: 'MediaParty 2026',
  kicker: 'Edición independiente',
}

export const authSidebar = {
  title: 'Entrá a tu mesa de trabajo.',
}

export interface AuthTab {
  label: string
  to: string
  mode: AuthMode
}

export const authTabs: AuthTab[] = [
  { label: 'Ingresar', to: '/login', mode: 'login' },
  { label: 'Crear cuenta', to: '/registro', mode: 'register' },
]
