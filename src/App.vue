<template>
    <div id="app">
        <div
                class="is-flex vertical-align site-bar"
                v-if="!isHomePage"
        >
            <div class="column">
                <img
                        class="cursor"
                        @click="goHomePage"
                        src="./assets/img/nuevo-logo.png"
                        width="50"
                        alt="Nuevo Logo"
                >
            </div>
            <div class="column has-text-right">
                <button
                        class="back-btn"
                        @click="goBack"
                >
                    <i class="el-icon-d-arrow-left"/>
                    Back
                </button>
            </div>
        </div>
        <router-view/>
    </div>
</template>

<script>

  export default {
    name: 'App',
    computed: {
      isHomePage () {
        return this.$route.name === 'home'
      },
    },
    methods: {
      goBack () {
        window.history.back()
      },
      goHomePage () {
        this.$router.push({ name: 'home'})
      }
    },
  }
</script>
