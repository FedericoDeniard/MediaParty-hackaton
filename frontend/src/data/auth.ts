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
  rules?: AuthRule[]
  match?: string
  matchError?: string
}

export interface AuthModeSpec {
  eyebrow: string
  title: string
  lead: string
  formTitle: string
  formNote: string
  formLinkLabel: string
  formLinkTo: string
  fields: AuthFieldSpec[]
  terms: boolean
  submit: string
  legal: string
}

export const authModes: Record<AuthMode, AuthModeSpec> = {
  login: {
    eyebrow: 'Acceso',
    title: 'Volvé a publicar.',
    lead: 'Retomá el tablero y seguí con la noticia que dejaste a medias.',
    formTitle: 'Iniciar sesión',
    formNote: 'Todavía no tenés cuenta.',
    formLinkLabel: 'Creá una',
    formLinkTo: '/registro',
    fields: [
      { name: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
      {
        name: 'password',
        label: 'Contraseña',
        type: 'password',
        autoComplete: 'current-password',
      },
    ],
    terms: false,
    submit: 'Iniciar sesión',
    legal: 'Al entrar aceptás los términos y la política de privacidad.',
  },
  register: {
    eyebrow: 'Nueva cuenta',
    title: 'Empezá a publicar.',
    lead: 'Creá tu cuenta y procesá tu primera noticia en un minuto.',
    formTitle: 'Crear cuenta',
    formNote: '¿Ya tenés cuenta?',
    formLinkLabel: 'Iniciá sesión',
    formLinkTo: '/login',
    fields: [
      {
        name: 'name',
        label: 'Nombre y apellido',
        type: 'text',
        autoComplete: 'name',
      },
      { name: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
      {
        name: 'password',
        label: 'Contraseña',
        type: 'password',
        autoComplete: 'new-password',
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
    legal: 'Te mandamos un mail para confirmar la dirección.',
  },
}

export interface AuthFact {
  label: string
  value: string
}

export const authFacts: AuthFact[] = [
  { label: 'Documentos por noticia', value: '1' },
  { label: 'Formatos por documento', value: '8' },
  { label: 'Redes conectadas', value: '8' },
]
