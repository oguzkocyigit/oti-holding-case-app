<template>
    <div
            class="book-grid-view__index"
            @click.prevent="emitDetail"
    >
        <book-info-view :book-info="book"/>
    </div>
</template>

<script>
  import BookInfoView from '@/components/BookInfoView'
  export default {
    name: 'BookGridView',
    components: {BookInfoView},
    props: {
      book: { required: true }
    },
    methods: {
      emitDetail () {
        this.$emit('detail', this.book.id)
      },
    },
  }
</script>

<style lang="scss" src="./BookGridView.scss"/>