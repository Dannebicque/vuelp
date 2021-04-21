<template>
  <div>
    <h1>Fournisseurs</h1>
    <router-link :to="{name: 'AddFournisseur'}">Ajouter un fournisseur</router-link>
    <div>
    <Fournisseur v-for="fournisseur in fournisseurs" :key="fournisseur.id" :fournisseur="fournisseur"></Fournisseur>
    </div>
  </div>
</template>

<script>

import { getFournisseurs } from '../services/ApiFournisseur'
import Fournisseur from '../components/Fournisseur'

export default {
  name: 'Fournisseurs',
  components: {Fournisseur},
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
