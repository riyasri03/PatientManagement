<template>
  <div>
    <navbar />
      <h1>This is doctor page</h1>
      <button>History</button>
      <button>End Consultation</button>
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue'
export default {
  name: 'doclogin',
  components: {
    navbar: navbar
  }
}
</script>

<style>

</style>
