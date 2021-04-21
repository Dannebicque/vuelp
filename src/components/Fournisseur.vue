<template>
  <div class="fournisseur">
    <h2>{{ fournisseur.nom }}</h2>
    <p>...</p>
    <p>{{ fournisseur.telephone }}</p>
    <p>{{ fournisseur.ville }}</p>
    <p><router-link :to="{name: 'EditFournisseur', params: {id: fournisseur.id}}">Modifier</router-link> | Supprimer</p>
  </div>
</template>

<script>
export default {
  name: 'Fournisseur',
  props: {
    fournisseur: {}
  }
}
</script>

<style scoped>
.fournisseur {
  float:left;
  width:33%
}
</style>
