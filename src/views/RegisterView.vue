<script setup></script>

<template>
  <v-card flat max-width="600" class="mx-auto my-10">
    <v-card-title class="text-h3 font-weight-bold pb-4" tag="h3"
      >Registrate</v-card-title
    >
    <v-card-subtitle class="text-h5"
      >Es f&aacute;cil y r&aacute;pido.</v-card-subtitle
    >
    <v-form class="mt-5">
      <v-row>
        <v-col>
          <v-text-field
            type="text"
            label="Nombre"
            bg-color="blue-grey-lighten-5"
            hint="Ej. Kevin"
          />
        </v-col>
        <v-col>
          <v-text-field
            type="text"
            label="Apellido"
            bg-color="blue-grey-lighten-5"
            hint="Ej. Luna"
          />
        </v-col>

        <v-col>
          <v-text-field
            type="text"
            label="Telefono"
            bg-color="blue-grey-lighten-5"
            hint="Ej. 2121-2828"
          />
        </v-col>
      </v-row>

      <v-text-field
        type="email"
        label="Correo Electronico"
        bg-color="blue-grey-lighten-5"
        hint="Ej. example@example.com"
        class="mt-2"
      />

      <v-row>
        <v-col>
          <v-text-field
            type="password"
            label="Contraseña"
            bg-color="blue-grey-lighten-5"
            hint="Ej. MySecuredPassword@123"
            class="mt-2"
          />
        </v-col>

        <v-col>
          <v-text-field
            type="password"
            label="Confirma tu Contraseña"
            bg-color="blue-grey-lighten-5"
            hint="Ej. MySecuredPassword@123"
            class="mt-2"
          />
        </v-col>
      </v-row>

      <v-btn block color="pink-accent-3 mt-3">Registrate</v-btn>
    </v-form>
  </v-card>
</template>
