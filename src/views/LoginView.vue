<script setup></script>

<template>
  <v-card flat max-width="600" class="mx-auto my-10">
    <v-card-title class="text-h3 font-weight-bold pb-4" tag="h3"
      >Iniciar Sesi&oacute;n</v-card-title
    >
    <v-card-subtitle class="text-h5"
      >Inicia Sesi&oacute;n con tu cuenta.</v-card-subtitle
    >
    <v-form class="mt-5">
      <v-text-field
        type="email"
        label="Correo Electronico"
        bg-color="blue-grey-lighten-5"
        hint="Ej. example@example.com"
      />

      <v-text-field
        type="password"
        label="Contraseña"
        bg-color="blue-grey-lighten-5"
        hint="Ej. MySecuredPassword@123"
        class="mt-2"
      />

      <v-btn block color="pink-accent-3 mt-3">Iniciar Sesi&oacute;n</v-btn>
    </v-form>
  </v-card>
</template>
