export const loginSchema = {
  email(value) {
    if (!value) {
      return 'El correo es obligatorio';
    }
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!regex.test(value)) {
      return 'Email no válido';
    }
    return true;
  },
  password(value) {
    if (!value) {
      return 'La contraseña es obligatoria';
    }
    if (value.length < 6) {
      return 'La contraseña debe ser mayor a 6 caracteres';
    }
    return true;
  },
}