<script setup>
import { useField, useForm } from "vee-validate";
import { collection, addDoc } from "firebase/firestore";
import { useFirestore } from "vuefire";
import { useRouter } from "vue-router";
import {
  validationSchema,
  imageSchema,
} from "../../validation/propiedadSchema";
import useImage from "../../composables/useImage";

const items = [1, 2, 3, 4, 5, 6];

const { url, uploadImage, image } = useImage();

const router = useRouter();

const db = useFirestore();

const { handleSubmit } = useForm({
  validationSchema: {
    ...validationSchema,
    ...imageSchema,
  },
});

const titulo = useField("titulo");
const imagen = useField("imagen");
const precio = useField("precio");
const habitaciones = useField("habitaciones");
const inodoros = useField("inodoros");
const estacionamiento = useField("estacionamiento");
const descripcion = useField("descripcion");

const pscina = useField("pscina", null, { initialValue: false });
const jardin = useField("jardin", null, { initialValue: false });
const terraza = useField("terraza", null, { initialValue: false });
const gym = useField("gym", null, { initialValue: false });

const onSubmit = handleSubmit(async (values) => {
  const { imagen, ...propiedad } = values;

  const docRef = await addDoc(collection(db, "propiedades"), {
    ...propiedad,
    imagen: url.value,
  });

  if (docRef.id) {
    router.push({ name: "admin-propiedades" });
  }
});
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
      <v-text-field
        class="mb-5"
        label="Nombre Propiedad"
        v-model="titulo.value.value"
        :error-messages="titulo.errorMessage.value"
      />

      <v-file-input
        accept="image/jpeg"
        label="Imagen"
        prepend-icon="mdi-camera"
        class="mb-5"
        v-model="imagen.value.value"
        :error-messages="imagen.errorMessage.value"
        @change="uploadImage"
      />

      <div v-if="image" class="my-5">
        <p class="font-weight-bold my-3">Imagen Propiedad:</p>
        <img :src="image" class="w-50" />
      </div>

      <v-text-field
        class="mb-5"
        label="Precio"
        v-model="precio.value.value"
        :error-messages="precio.errorMessage.value"
      />

      <v-row>
        <v-col cols="12" md="4">
          <v-select
            label="Habitaciones"
            class="mb-5"
            :items="items"
            v-model="habitaciones.value.value"
            :error-messages="habitaciones.errorMessage.value"
          />
        </v-col>
        <v-col cols="12" md="4">
          <v-select
            label="Baños"
            class="mb-5"
            :items="items"
            v-model="inodoros.value.value"
            :error-messages="inodoros.errorMessage.value"
          />
        </v-col>
        <v-col cols="12" md="4">
          <v-select
            label="Estacionamientos"
            class="mb-5"
            :items="items"
            v-model="estacionamiento.value.value"
            :error-messages="estacionamiento.errorMessage.value"
          />
        </v-col>
      </v-row>

      <v-textarea
        class="mb-5"
        label="Descripcion"
        v-model="descripcion.value.value"
        :error-messages="descripcion.errorMessage.value"
      />

      <v-row class="px-3">
        <v-checkbox
          label="Pscina"
          v-model="pscina.value.value"
          :error-messages="pscina.errorMessage.value"
        />
        <v-checkbox
          label="Jardin"
          v-model="jardin.value.value"
          :error-messages="jardin.errorMessage.value"
        />
        <v-checkbox
          label="Terraza"
          v-model="terraza.value.value"
          :error-messages="terraza.errorMessage.value"
        />
        <v-checkbox
          label="GYM"
          v-model="gym.value.value"
          :error-messages="gym.errorMessage.value"
        />
      </v-row>

      <v-btn color="pink-accent-3" block class="mt-5" @click="onSubmit"
        >Agregar Propiedad</v-btn
      >
    </v-form>
  </v-card>
</template>
