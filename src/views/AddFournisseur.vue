<template>
  <div>
    <h1>Création d'un fournisseur</h1>
    <router-link :to="{name: 'Fournisseurs'}">Retour</router-link>
    <div>
      <input-text name="nom" label="Nom" required></input-text>
      <input-text name="telephone" label="Téléphone" required></input-text>
      <input-text name="ville" label="Ville" required></input-text>
      <button @click="addFournisseur">Ajouter le fournisseur</button>
    </div>
  </div>
</template>

<script>
import InputText from '../components/InputText'
export default {
  name: 'AddFournisseur',
  components: {InputText},
  methods: {
    addFournisseur () {
      console.log('ok')
    }
  }
}
</script>

<style scoped>

</style>
