<template>
  <div class="wrapper-person">
    <div v-if="item">
      <img :src="item.img" alt="item.descr" />
      <h1 style="color: #ffffff;" class="title">{{ item.title }}</h1>
      <p>{{ item.descr }}</p>

      <!-- <div class="card-stats">
        <div 
          v-for="(stat, index) in item.info"
          :key="index" 
          class="one-third">
          <div class="stat-value">{{ stat.value }}</div>  
          <div class="stat">{{ stat.title }}</div>  
        </div>
      </div> -->
      <CardFooter :id="item.id"/>

      <div>
        <router-link to="/" class="btn btnPrimary">Back to home</router-link>
      </div>
    </div>
    <div v-else>
      <notFound />
    </div>
  </div>
</template>

<script>
import items from '@/seeders/items.js'
import CardFooter from '@/components/UI/CardFooter.vue'
import notFound from './notFound.vue';

export default {
  components: {
    CardFooter,
    notFound
  },
  data() {
    return {
      item: null
    }
  },
  created() {
    const alias = this.$route.params.itemAlias
    const item = items.find(e => e.alias === alias)

    if (item) {
      this.item = item
    } else {
      return this.$router.push('/404')
    }
    // console.log(this.$router)
  }
}
</script>

<style lang="scss">
.wrapper-person {
  text-align: center;
}
.card-stats {
  margin: 30px 0;
  border-radius: 14px;
}
</style>