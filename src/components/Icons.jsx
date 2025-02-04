import React from "react"
import * as LucideIcons from "lucide-react"

const Icon = ({ name, color = "black", size = 24 }) => {
  // Obtiene el ícono correspondiente del objeto de íconos
  const LucideIcon = LucideIcons[name]

  // Validar si el ícono existe
  if (!LucideIcon) {
    return <p>Icono "{name}" no encontrado</p>
  }

  // Retornar el ícono con las propiedades especificadas
  return <LucideIcon color={color} size={size} />
}

export default Icon
