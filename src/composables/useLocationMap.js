import { ref } from "vue";

export default function useLocationMap() {

  const zoom = ref(15);

  const center = ref([13.4889653, -88.1946233])

  function pin(e) {
    const marker = e.target.getLatLng()
    center.value = [marker.lat, marker.lng]
  }

  return {
    zoom,
    center,
    pin,
  }
}