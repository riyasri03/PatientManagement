<template>
  <div>
    <navbar />
      <h1>This is doctor page</h1>
      <button>History</button>
      <button>End Consultation</button>
      <ul>
        <li v-for="list in getlist" :key="list.id">
          {{ list.title }}
        </li>
      </ul>
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'doclogin',
  components: {
    navbar: navbar
  },
  computed: {
    ...mapGetters(['getlist'])
  }
}
</script>

<style>

</style>
