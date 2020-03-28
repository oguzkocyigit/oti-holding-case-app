<template>
    <div class="book-table-view__index">
        <el-table
                :data="booksData"
                stripe
                border
                style="width: 100%">
            <el-table-column
                    label=""
                    width="90">
                <template slot-scope="scope">
                    <div class="has-text-centered">
                        <i
                                class="el-icon-zoom-in detail-icon"
                                @click="getDetail(scope.row.id)"
                        />
                    </div>
                </template>
            </el-table-column>
            <el-table-column
                    prop="authorName"
                    label="Author Name">
            </el-table-column>
            <el-table-column
                    prop="bookName"
                    label="Book Name">
            </el-table-column>
            <el-table-column
                    prop="publisher"
                    label="Publisher">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
  export default {
    name: 'BookTableView',
    props: {
      booksData: {required: true}
    },
    methods: {
      getDetail (id) {
        this.$router.push({ name: 'book.detail', params: { id: id } })
      },
    },
  }
</script>

<style lang="scss" src="./BookTableView.scss"/>