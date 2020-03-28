<template>
    <div class="is-flex vertical-align">
        <div class="column">
            <div class="columns is-multiline">
                <div class="column is-narrow w-150">
                    <p class="fw-600 underlined">Author Name:</p>
                </div>
                <div class="column">
                    <p>{{bookInfo.authorName}}</p>
                </div>
            </div>
            <div class="columns">
                <div class="column is-narrow w-150">
                    <p class="fw-600 underlined">Book Name:</p>
                </div>
                <div class="column">
                    <p>{{bookInfo.bookName}}</p>
                </div>
            </div>
            <div class="columns">
                <div class="column is-narrow w-150">
                    <p class="fw-600 underlined">Publisher Name:</p>
                </div>
                <div class="column">
                    <p>{{bookInfo.publisher}}</p>
                </div>
            </div>
            <template v-if="isDetail">
                <div class="columns">
                    <div class="column is-narrow w-150">
                        <p class="fw-600 underlined">Genre:</p>
                    </div>
                    <div class="column">
                        <p>{{bookInfo.genre}}</p>
                    </div>
                </div>
                <div class="columns">
                    <div class="column is-narrow w-150">
                        <p class="fw-600 underlined">Description:</p>
                    </div>
                    <div class="column">
                        <p>{{bookInfo.description}}</p>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'BookInfoView',
    props: {
      bookInfo: { required: true },
      isDetail: {}
    },
  }
</script>

<style lang="scss" src="./BookGridView.scss"/>