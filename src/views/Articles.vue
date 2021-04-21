<template>
  <div>
    <h1>Articles</h1>
    <ul>
      <li v-for="article in articles" :key="article.id">{{article.titre}}</li>
    </ul>
  </div>

</template>

<script>
import {getArticles} from '../services/ApiArticle'

export default {
  name: 'Articles',
  data () {
    return {
      articles: {}
    }
  },
  async mounted () {
    await getArticles().then(response => {
      this.articles = response.data['hydra:member']
    })
  }
}
</script>

<style scoped>
h1 {
  color:blue
}
</style>
