<template>
    <div
            class="book-detail-view__index"
            v-loading="fullScreenLoading"
    >
        <div class="wrapper">
            <div class="is-flex">
                <div class="column is-offset-3 is-6">
                    <book-info-view
                            :is-detail="true"
                            :book-info="book"
                    />
                    <div class="has-text-right">
                        <i
                                @click="updateBook"
                                class="el-icon-edit action-icon edit-btn mr-10"
                        />
                        <i
                                @click="deleteBook"
                                class="el-icon-delete action-icon delete-btn"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import { BookProxy } from '@/proxies/BookProxy'
  import BookInfoView from '@/components/BookInfoView'

  export default {
    name: 'BookDetailView',
    components: { BookInfoView },
    data () {
      return {
        book: '',
        fullScreenLoading: false,
      }
    },
    props: {
      id: { required: true }
    },
    created () {
      this.getBookDetail()
    },
    methods: {
      getBookDetail () {
        this.fullScreenLoading = true
        new BookProxy()
          .find({ id: this.id })
          .then(response => {
            this.book = response
            this.fullScreenLoading = false
          })
          .catch(() => {
            this.$router.push({ name: 'book.list'})
            this.$notify({ message: 'Ooops! Looks like this book has been deleted.', type: 'error' })
          })
      },
      deleteBook () {
        new BookProxy()
          .delete({ id: this.id })
          .then(() => {
            this.$notify({ message: 'Yaaay! Successfully deleted.', type: 'success' })
            this.$router.push({ name: 'book.list'})
          })
          .catch(() => {
            this.$notify({ message: 'Ooops! There is a error.', type: 'error' })
          })
      },
      updateBook() {
        this.$router.push({ name: 'book.update', params: { id: this.id } })
      },
    },
  }
</script>

<style lang="scss" src="./BookDetailView.scss"/>
