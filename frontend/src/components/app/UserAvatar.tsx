import { useState } from 'react'
import Avatar from 'boring-avatars'

/* La paleta sale de los tokens de la app: verde de datos, arena, los dos
   huesos y el gris cálido. Beam deriva el color de la cara del color del
   cabezal y necesita hex: con `var()` la cuenta falla y la cara queda
   siempre en blanco. */
const avatarTokens = [
  '--chart',
  '--accent',
  '--surface-contrast',
  '--surface',
  '--ink-soft',
]

function readAvatarColors() {
  const styles = getComputedStyle(document.documentElement)
  return avatarTokens.map((token) => styles.getPropertyValue(token).trim())
}

interface UserAvatarProps {
  name: string
}

export default function UserAvatar({ name }: UserAvatarProps) {
  const [colors] = useState(readAvatarColors)

  return (
    <span className="avatar" aria-hidden="true">
      <Avatar name={name} variant="beam" colors={colors} size={32} square />
    </span>
  )
}
