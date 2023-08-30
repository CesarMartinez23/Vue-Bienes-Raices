<script setup>
const items = [1, 2, 3, 4, 5, 6];
</script>

<template>
  <v-card max-width="800" flat class="mx-auto my-10">
    <v-card-title class="text-h3 font-weight-bold pb-4" tag="h3"
      >Nueva Propiedad</v-card-title
    >
    <v-card-subtitle class="text-h5 py-5"
      >Crea una nueva propiedad.</v-card-subtitle
    >

    <v-form class="mt-10">
      <v-text-field class="mb-5" label="Nombre Propiedad" />

      <v-file-input
        accept="image/jpeg"
        label="Imagen"
        prepend-icon="mdi-camera"
        class="mb-5"
      />

      <v-text-field class="mb-5" label="Precio" />

      <v-row>
        <v-col cols="12" md="4">
          <v-select label="Habitaciones" class="mb-5" :items="items" />
        </v-col>
        <v-col cols="12" md="4">
          <v-select label="Baños" class="mb-5" :items="items" />
        </v-col>
        <v-col cols="12" md="4">
          <v-select label="Estacionamientos" class="mb-5" :items="items" />
        </v-col>
      </v-row>

      <v-textarea class="mb-5" label="Descripcion" />

      <v-row>
        <v-checkbox label="Pscina" />
        <v-checkbox label="Jardin" />
      </v-row>

      <v-btn color="pink-accent-3" block class="mt-5">Agregar Propiedad</v-btn>
    </v-form>
  </v-card>
</template>
