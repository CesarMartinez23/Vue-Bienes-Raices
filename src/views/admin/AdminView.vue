<script setup>
import usePropiedades from "../../composables/usePropiedades";

const { propiedadesCollection, formatPrice } = usePropiedades();
</script>

<template>
  <h2 class="text-center text-h3 my-5 font-weight-bold">Admin Panel</h2>

  <v-btn color="blue" variant="flat" :to="{ name: 'nueva-propiedad' }">
    Nueva Propiedad
  </v-btn>

  <v-card class="mx-auto mt-10" flat>
    <v-list>
      <v-list-item
        v-for="propiedad in propiedadesCollection"
        :key="propiedad.id"
        border
        class="mb-2"
      >
        <template v-slot:prepend>
          <v-list-item-media :start="true">
            <img width="180" :src="propiedad.imagen" :alt="propiedad.titulo" />
          </v-list-item-media>
        </template>

        <v-list-item-title class="py-2 text-h5">{{
          propiedad.titulo
        }}</v-list-item-title>

        <v-list-item-subtitle class="my-2">{{
          formatPrice(propiedad.precio)
        }}</v-list-item-subtitle>

        <template v-slot:append>
          <v-btn
            :to="{ name: 'editar-propiedad', params: { id: propiedad.id } }"
            class="mr-2"
            color="info"
            flat
            >Editar</v-btn
          >
          <v-btn color="red-darken-3" flat>Eliminar</v-btn>
        </template>
      </v-list-item>
    </v-list>
  </v-card>
</template>
