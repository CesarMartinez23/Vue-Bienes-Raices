import { computed, ref } from "vue"
import { collection, doc, deleteDoc } from "firebase/firestore"
import { ref as storageRef, deleteObject } from "firebase/storage"
import { useFirestore, useCollection, useFirebaseStorage } from "vuefire"

export default function usePropiedades() {

  const pscina = ref(false)
  const jardin = ref(false)
  const terraza = ref(false)
  const gym = ref(false)

  const storage = useFirebaseStorage()
  const db = useFirestore()

  const propiedadesCollection = useCollection(collection(db, "propiedades"))

  async function eliminarPropiedad(id, urlImage) {

    const docRef = doc(db, "propiedades", id)
    const imageRef = storageRef(storage, urlImage)

    await Promise.all([
      deleteDoc(docRef),
      deleteObject(imageRef)
    ])
  }

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
    eliminarPropiedad,
  }
}