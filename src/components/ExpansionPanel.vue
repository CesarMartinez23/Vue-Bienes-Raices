<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});
</script>

<template>
  <v-expansion-panels variant="popout" class="my-4">
    <v-expansion-panel>
      <v-expansion-panel-title class="font-weight-bold text-h6">
        {{ title }}
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        {{ description }}
        <slot name="item"></slot>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
