<template>
  <div>
      <navbar />
      <h1>This is Home page</h1>
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue'
export default {
  name: 'home',
  mounted () {
    const router = this.$router
    const route = this.$route
    console.log(route)
    console.log(router)
  },
  components: {
    navbar: navbar
  }
}
</script>

<style>

</style>
