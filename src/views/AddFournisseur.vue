<template>
  <div>
    <h1>Création d'un fournisseur</h1>
    <router-link :to="{name: 'Fournisseurs'}">Retour</router-link>
    <div>
      <input-text name="nom" label="Nom" required v-model="nom"></input-text>
      <input-text name="telephone" label="Téléphone" required v-model="telephone"></input-text>
      <input-text name="ville" label="Ville" required v-model="ville"></input-text>
      <button @click="addFournisseur">Ajouter le fournisseur</button>
    </div>
  </div>
</template>

<script>
import InputText from '../components/InputText'
import {postFournisseur} from '../services/ApiFournisseur'


export default {
  name: 'AddFournisseur',
  components: {InputText},
  data () {
    return {
      nom: '',
      telephone: '',
      ville: ''
    }
  },
  methods: {
    addFournisseur () {
      postFournisseur({
        nom: this.nom,
        telephone: this.telephone,
        ville: this.ville
      })
    }
  }
}
</script>

<style scoped>

</style>
