<template>
  <div>
    <h1>Modification d'un fournisseur</h1>
    <router-link :to="{name: 'Fournisseurs'}">Retour</router-link>
    <div>
      <form>
      <input-text name="nom" label="Nom" required v-model="nom"></input-text>
      <input-text name="telephone" label="Téléphone" required v-model="telephone"></input-text>
      <input-text name="ville" label="Ville" required v-model="ville"></input-text>
      <button @click.prevent="editFournisseur">Modifier le fournisseur</button>
      </form>
    </div>
    <div v-show="alert">Fournisseur modifié</div>
  </div>
</template>

<script>
import InputText from '../components/InputText'
import {putFournisseur, getFournisseur} from '../services/ApiFournisseur'


export default {
  name: 'EditFournisseur',
  components: {InputText},
  data () {
    return {
      alert:false,
      id: '',
      nom: '',
      telephone: '',
      ville: ''
    }
  },
  async mounted () {
    this.id = this.$route.params.id
    await getFournisseur(this.id).then(response => {
      this.nom = response.data.nom
      this.telephone = response.data.telephone
      this.ville = response.data.ville
    })
  },
  methods: {
    async editFournisseur () {
      await putFournisseur(
          this.id, {
        nom: this.nom,
        telephone: this.telephone,
        ville: this.ville
      }).then(() => {
        this.alert=true
      })
    }
  }
}
</script>

<style scoped>

</style>
