<template>
    <div class="home-page-index">
        <div class="center-div fullscreen-height is-fullwidth">
            <div class="is-flex">
                <div class="column has-text-centered">
                    <img src="../../assets/img/nuevo-logo.png" alt="Nuevo Logo">
                    <p class="fs-21 mb-10 mt-20">Book List, Made with VUE.JS</p>
                    <router-link
                            class="enter-btn fs-18 fw-600"
                            :to="{ name: 'book.list' }"
                    >
                        Enter Site
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'HomePage'
  }
</script>
<style lang="scss" src="./HomePage.scss"/>
