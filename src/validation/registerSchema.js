export const registerSchema = {
  name(value) {
    if (!value) {
      return 'El nombre es obligatorio';
    }
    if (value.length < 3) {
      return 'El nombre debe ser mayor a 3 caracteres';
    }
    return true;
  },
  lastname(value) {
    if (!value) {
      return 'El apellido es obligatorio';
    }
    if (value.length < 3) {
      return 'El apellido debe ser mayor a 3 caracteres';
    }
    return true;
  },
  phone(value) {
    if (!value) {
      return 'El teléfono es obligatorio';
    }
    if (value.length < 7) {
      return 'El teléfono debe tener al menos 8 digitos';
    }
    return true;
  },
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
  passwordConfirmation(value, { password }) {
    if (value === password) return true
    return 'El Password no coincide'
  },
}