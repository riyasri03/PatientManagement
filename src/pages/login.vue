<template>
  <div>
      <navbar />
      <h1>This is login page</h1>
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'login',
  components: {
    navbar: navbar
  },
  computed: {
    ...mapGetters(['login'])
  }
}
</script>

<style>

</style>
