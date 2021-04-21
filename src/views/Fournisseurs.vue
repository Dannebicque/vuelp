<template>
  <div>
    <h1>Fournisseurs</h1>
    <router-link :to="{name: 'AddFournisseur'}">Ajouter un fournisseur</router-link>

    <ul>
      <li v-for="fournisseur in fournisseurs" :key="fournisseur.id">{{fournisseur.nom}}</li>
    </ul>
  </div>
</template>

<script>

import { getFournisseurs } from '../services/ApiFournisseur'

export default {
  name: 'Fournisseurs',
  data () {
    return {
      fournisseurs: {}
    }
  },
  async mounted () {
    await getFournisseurs().then(response => {
      this.fournisseurs = response.data['hydra:member']
    })
  }
}
</script>

<style scoped>

</style>
