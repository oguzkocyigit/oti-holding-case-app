<template>
    <div
            class="book-list-page__index"
            v-loading="fullScreenLoading"
    >
        <div class="columns vertical-align">
            <form class="is-flex">
                <div class="column is-narrow">
                    <span class="mr-10">Author Name</span>
                    <el-input class="w-150" v-model="filterModel.name"/>
                </div>
                <div class="column is-narrow">
                    <span class="mr-10">Book Name</span>
                    <el-input class="w-150" v-model="filterModel.book"/>
                </div>
                <div class="column is-narrow">
                    <span class="mr-10">Publisher</span>
                    <el-input class="w-150" v-model="filterModel.publisher"/>
                </div>
                <div class="column is-narrow">
                    <el-button
                            @click="filterBooks"
                            type="submit"
                            class="submit-btn"
                    >
                        <span>Search</span>
                    </el-button>
                    <el-button
                            @click="resetSearch"
                            type="submit"
                            class="submit-btn"
                    >
                        <span>Reset</span>
                    </el-button>
                </div>
            </form>
            <div class="column has-text-right">
                <el-radio
                        v-model="viewSelection"
                        label="grid"
                >
                    <i class="el-icon-s-grid"/>
                    Grid View
                </el-radio>
                <el-radio
                        v-model="viewSelection"
                        label="table"
                >
                    <i class="el-icon-s-grid"/>
                    Table View
                </el-radio>
            </div>
            <div class="column is-narrow has-text-right">
                <router-link
                        class="add-btn fs-18 fw-600"
                        :to="{ name: 'book.create' }"
                >
                    <i class="el-icon-circle-plus-outline"/>
                    Add New Book
                </router-link>
            </div>
        </div>
        <div
                class="columns is-multiline"
                v-if="viewSelection === 'grid'"
        >
            <div
                    class="column is-3-widescreen is-4-desktop is-6-mobile"
                    :key="key"
                    v-for="(book,key) in selectedBooks"
            >
                <book-card-view
                        @detail="getDetail($event)"
                        :book="book"
                />
            </div>
        </div>
        <div
                class="columns"
                v-if="viewSelection === 'table'"
        >
            <div class="column">
                <book-table-view :books-data="selectedBooks"/>
            </div>
        </div>
    </div>
</template>

<script>
  import { BookProxy } from '@/proxies/BookProxy'
  import BookCardView from '@/components/BookGridView'
  import BookTableView from '@/components/BookTableView'

  export default {
    name: 'BookListPageView',
    components: { BookCardView, BookTableView },
    data () {
      return {
        fullScreenLoading: false,
        bookListData: [],
        viewSelection: 'grid',
        filterModel: {
          name: '',
          book: '',
          publisher: '',
        }
      }
    },
    created () {
      this.getBookList()
    },
    computed: {
      selectedBooks () {
        const { name, book, publisher } = this.filterModel
        let filteredBooks = this.bookListData
        if (name !== '') {
          filteredBooks = filteredBooks.filter(item => item.authorName.includes(name))
        }
        if (book !== '') {
          filteredBooks = filteredBooks.filter(item => item.authorName.includes(book))
        }
        if (publisher !== '') {
          filteredBooks = filteredBooks.filter(item => item.authorName.includes(publisher))
        }
        return filteredBooks
      },
    },
    methods: {
      getBookList () {
        this.fullScreenLoading = true
        new BookProxy()
          .all()
          .then((response) => {
            this.bookListData = response
            this.fullScreenLoading = false
          })
      },
      getDetail (id) {
        this.$router.push({ name: 'book.detail', params: { id: id } })
      },
      resetSearch() {
        this.filterModel = {
          name: '',
          book: '',
          publisher: '',
        }
      },
    },
  }
</script>

<style lang="scss" src="./BookListPage.scss"/>
