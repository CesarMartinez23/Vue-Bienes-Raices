export const validationSchema = {
  titulo(value) {
    if (value?.length >= 6) return true
    return 'El titulo de la propiedad es obligatorio o muy corto.'
  },
  precio(value) {
    if (/^[0-9]+$/.test(value)) return true
    return 'El Precio solo deben ser números.'
  },
  habitaciones(value) {
    if (value) return true
    return 'Selecciona una Cantidad de Habitaciones.'
  },
  inodoros(value) {
    if (value) return true
    return 'Selecciona una Cantidad de Baños.'
  },
  estacionamiento(value) {
    if (value) return true
    return 'Selecciona una Cantidad de Estacionamientos.'
  },
  descripcion(value) {
    if (value) return true
    return 'Agrega una Descripción de la Propiedad.'
  }
}

export const imageSchema = {
  imagen(value) {
    if (value) return true
    return 'La Imagen es Obligatoria.'
  },
}