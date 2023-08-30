<script setup>
import { useForm, useField } from "vee-validate";
import { userSchema } from "../validation/userSchema";
import { useAuthStore } from "../stores/auth";

const { handleSubmit } = useForm({ validationSchema: userSchema });
const auth = useAuthStore();

const email = useField("email");
const password = useField("password");

const submit = handleSubmit((values) => {
  auth.login(values);
});
</script>

<template>
  <v-card flat max-width="600" class="mx-auto my-10">
    <v-card-title class="text-h3 font-weight-bold pb-4" tag="h3"
      >Iniciar Sesi&oacute;n</v-card-title
    >
    <v-card-subtitle class="text-h5"
      >Inicia Sesi&oacute;n con tu cuenta.</v-card-subtitle
    >

    <v-alert
      v-if="auth.hasError"
      class="my-5"
      type="error"
      :title="auth.errorMsg"
    ></v-alert>

    <v-form class="mt-5">
      <v-text-field
        type="email"
        label="Correo Electronico"
        bg-color="blue-grey-lighten-5"
        hint="Ej. example@example.com"
        v-model="email.value.value"
        :error-messages="email.errorMessage.value"
      />

      <v-text-field
        type="password"
        label="Contraseña"
        bg-color="blue-grey-lighten-5"
        hint="Ej. MySecuredPassword@123"
        class="mt-2"
        v-model="password.value.value"
        :error-messages="password.errorMessage.value"
      />

      <v-btn block color="pink-accent-3 mt-3" @click="submit"
        >Iniciar Sesi&oacute;n</v-btn
      >
    </v-form>
  </v-card>
</template>
