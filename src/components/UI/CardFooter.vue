<template>
  <div v-if="info" class="card-stats">
    <div v-for="(stat, index) in info" :key="index" class="one-third">
      <div class="stat-value">{{ stat.value }}</div>
      <div class="stat">{{ stat.title }}</div>
    </div>
  </div>
</template>
<script>
import items from '@/seeders/items.js'
export default {
  data() {
    return {
      info: null
    }
  },
  props: {
    id: {
      type: Number
    }
  },
  created() {
    const item = items.find(e => e.id === this.id)
    this.info = item.info
  }  
}
</script>