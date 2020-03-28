<template>
    <div
            class="book-detail-view__index"
            v-loading="fullScreenLoading"
    >
        <div class="wrapper">
            <form>
                <div class="is-flex vertical-align">
                    <div class="column is-offset-3 is-6">
                        <div class="columns vertical-align">
                            <div class="column is-narrow w-150">
                                <p class="fw-600">Author Name:</p>
                            </div>
                            <div class="column">
                                <el-input
                                        :class="model.authorName === '' && notSubmitted ? 'is-invalid' : ''"
                                        v-validate="'required'"
                                        v-model="model.authorName"
                                />
                            </div>
                        </div>
                        <div class="columns vertical-align">
                            <div class="column is-narrow w-150">
                                <p class="fw-600">Book Name:</p>
                            </div>
                            <div class="column">
                                <el-input
                                        :class="model.bookName === '' && notSubmitted ? 'is-invalid' : ''"
                                        v-validate="'required'"
                                        v-model="model.bookName"
                                />
                            </div>
                        </div>
                        <div class="columns vertical-align">
                            <div class="column is-narrow w-150">
                                <p class="fw-600">Publisher Name:</p>
                            </div>
                            <div class="column">
                                <el-input
                                        :class="model.publisher === '' && notSubmitted ? 'is-invalid' : ''"
                                        v-validate="'required'"
                                        v-model="model.publisher"
                                />
                            </div>
                        </div>
                        <div class="columns vertical-align">
                            <div class="column is-narrow w-150">
                                <p class="fw-600">Genre:</p>
                            </div>
                            <div class="column">
                                <el-input
                                        :class="model.genre === '' && notSubmitted ? 'is-invalid' : ''"
                                        v-validate="'required'"
                                        v-model="model.genre"
                                />
                            </div>
                        </div>
                        <div class="columns vertical-align">
                            <div class="column is-narrow w-150">
                                <p class="fw-600">Description:</p>
                            </div>
                            <div class="column">
                                <el-input
                                        :class="model.description === '' && notSubmitted ? 'is-invalid' : ''"
                                        v-validate="'required'"
                                        type="textarea"
                                        minRows="2"
                                        maxRows="4"
                                        v-model="model.description"
                                />
                            </div>
                        </div>
                        <div class="columns">
                            <div class="column has-text-right">
                                <el-button
                                        class="submit-btn"
                                        @click="createNewBook"
                                >
                                    <span>{{buttonText}}</span>
                                </el-button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
  import { BookProxy } from '@/proxies/BookProxy'

  export default {
    name: 'BookCreate',
    data () {
      return {
        book: '',
        notSubmitted: false,
        fullScreenLoading: false,
        model: {
          authorName: '',
          bookName: '',
          publisher: '',
          genre: '',
          description: '',
        },
      }
    },
    props: {
      id: {}
    },
    created () {
      if (this.id) {
        this.getBookDetail()
      }
    },
    methods: {
      createNewBook () {
        if (this.id) {
          this.updateBook(this.id)
        } else {
          this.$validator.validate()
            .then(valid => {
              if (valid) {
                this.fullScreenLoading = true
                new BookProxy()
                  .create({ item: this.model })
                  .then(response => {
                    if (response) {
                      this.fullScreenLoading = false
                      this.$notify({ message: 'Yaaay! Successfully added.', type: 'success' })
                      this.$router.push({ name: 'book.detail', params: { id: response.id } })
                    }
                  })
                  .catch(() => {
                    this.$notify({ message: 'Ooops! There is a error.', type: 'error' })
                  })
              } else {
                this.notSubmitted = true
                this.$notify({ message: 'Please fill all inputs!', type: 'error' })
              }
            })
        }
      },
      getBookDetail () {
        this.fullScreenLoading = true
        new BookProxy()
          .find({ id: this.id })
          .then(response => {
            this.model = response
            this.fullScreenLoading = false
          })
      },
      updateBook (id) {
        this.fullScreenLoading = true
        new BookProxy()
          .update({ id, item: this.model })
          .then(() => {
            this.fullScreenLoading = false
            this.$notify({ message: 'Yaaay! Successfully updated.', type: 'success' })
            this.$router.push({ name: 'book.detail', params: { id: this.model.id } })
          })
          .catch(() => {
            this.$notify({ message: 'Ooops! There is a error.', type: 'error' })
          })
      },
    },
    computed: {
      buttonText () {
        return this.id ? 'Update' : 'Create'
      },
    },
  }
</script>
<style lang="scss" src="./BookCreate.scss"/>
