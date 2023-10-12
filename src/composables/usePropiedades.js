import { computed, ref } from "vue"
import { collection } from "firebase/firestore"
import { useFirestore, useCollection } from "vuefire"

export default function usePropiedades() {

  const pscina = ref(false)
  const jardin = ref(false)
  const terraza = ref(false)
  const gym = ref(false)

  const db = useFirestore()
  const propiedadesCollection = useCollection(collection(db, "propiedades"))

  const filtrarPropiedades = (plus) => {
    return propiedadesCollection.value.filter(propiedad => propiedad.plus)
  }

  // const propiedadesFiltradas = computed(() => {
  //   return pscina.value ?
  //     propiedadesCollection.value.filter(propiedad => propiedad.pscina) :
  //     propiedadesCollection.value
  // })

  const propiedadesFiltradas = computed(() => {

    let propiedades = propiedadesCollection.value

    if (pscina.value) propiedades = propiedades.filter(propiedad => propiedad.pscina)
    if (jardin.value) propiedades = propiedades.filter(propiedad => propiedad.jardin)
    if (terraza.value) propiedades = propiedades.filter(propiedad => propiedad.terraza)
    if (gym.value) propiedades = propiedades.filter(propiedad => propiedad.gym)

    return propiedades
  })


  return {
    pscina,
    jardin,
    terraza,
    gym,
    propiedadesCollection,
    propiedadesFiltradas,
  }
}