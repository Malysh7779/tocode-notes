<template>
    <div class="note-form__wrapper">
        <form class="note-form" @submit.prevent="onSubmit">
            <textarea required v-model="value" placeholder="Type ur note" />
            <TagsList @onItemClick="handleTagClick" :items="tags" />
            <button class="btn btnPrimary" type="submit">Add new note</button>
        </form>
    </div>
</template>

<script>
import TagsList from '@/components/UI/TagsList.vue'

export default {
  components: {
    TagsList
  },
  data() {
    return {
      value: '',
      tags: [
        {
          title: 'home',
          isActive: false
        },
        {
          title: 'work',
          isActive: false
        },
        {
          title: 'travel',
          isActive: false
        },
      ]
    }
  },
  methods: {
    onSubmit() {
      const comp = {
        value: this.value,
        tags: this.tags
      }

      this.$emit('onSubmit', comp)
      this.value = ''
    },
    // on/off tag
    handleTagClick(tag) {
      const indx = this.tags.findIndex(e => e.title === tag.title)
      this.tags[indx].isActive = !this.tags[indx].isActive
      // console.log(tag.title)
    }
  }
}
</script>

<style lang="scss">
.note-form__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.note-form {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    width: 100%;
    textarea {
    margin-bottom: 0;
    }
}

</style>