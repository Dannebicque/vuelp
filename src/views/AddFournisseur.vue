<template>
  <div>
    <h1>Création d'un fournisseur</h1>
    <router-link :to="{name: 'Fournisseurs'}">Retour</router-link>
    <div>
      <form>
      <input-text name="nom" label="Nom" required v-model="nom"></input-text>
      <input-text name="telephone" label="Téléphone" required v-model="telephone"></input-text>
      <input-text name="ville" label="Ville" required v-model="ville"></input-text>
      <button @click.prevent="addFournisseur">Ajouter le fournisseur</button>
      </form>
    </div>
    <div v-show="alert">Fournisseur enregistré</div>
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
      alert:false,
      nom: '',
      telephone: '',
      ville: ''
    }
  },
  methods: {
    async addFournisseur () {
      await postFournisseur({
        nom: this.nom,
        telephone: this.telephone,
        ville: this.ville
      }).then(response => {
        this.alert=true
        this.nom = ''
        this.telephone = ''
        this.ville = ''
      })
    }
  }
}
</script>

<style scoped>

</style>
