<script setup>
import usePropiedades from "../composables/usePropiedades";
import Propiedad from "../components/Propiedad.vue";
import { formatPrice } from "../helpers";

const { pscina, jardin, terraza, gym, propiedadesFiltradas } = usePropiedades();
</script>

<template>
  <h1 class="text-center text-h3 font-weight-bold my-5">
    Nuestras Propiedades
  </h1>

  <v-card flat class="py-10">
    <v-card-title class="text-h5 text-center">
      Busqueda por Filtros:
      <v-row class="py-4">
        <v-checkbox label="Pscina" v-model="pscina" />
        <v-checkbox label="Jardin" v-model="jardin" />
        <v-checkbox label="Terraza" v-model="terraza" />
        <v-checkbox label="GYM" v-model="gym" />
      </v-row>
    </v-card-title>
    <v-row>
      <Propiedad
        v-for="propiedad in propiedadesFiltradas"
        :key="propiedad.id"
        :propiedad="propiedad"
        :price="formatPrice"
      />
    </v-row>
  </v-card>
</template>
