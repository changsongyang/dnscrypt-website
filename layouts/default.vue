<template>
<v-app light>
  <header>
    <TopMenu />
  </header>
  <v-content class="main-content">
    <v-container class="content-container">
      <nuxt/>
    </v-container>
  </v-content>
</v-app>
</template>

<script>
import TopMenu from "~/components/TopMenu.vue";

export default {
  components: {
    TopMenu,
  },
  watch: {
    $route() {
      this.$nextTick(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    },
  },
};
</script>

<style lang="stylus" scoped>
.main-content
  padding-top: 70px !important
  min-height: 100vh
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)
  position: relative

  &::before
    content: ''
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    background-image: radial-gradient(circle, rgba(0, 191, 165, 0.04) 1px, transparent 1px)
    background-size: 32px 32px
    pointer-events: none
    z-index: 0

.content-container
  padding-top: 24px
  padding-bottom: 48px
  max-width: 1200px
  position: relative
  z-index: 1
</style>
