<template>
  <div>
      <navbar />
      <div >
<div>
  <img src="https://www.apollohospitals.com/images/patient-care/banner/edoc-patient-care.png" style="width:100%">
</div>

</div>
<br>
<!-- <div style="text-align:center">
  <span class="dot"></span>
</div> -->
<div class="footer">
  <p>Contact: 8563749284 for more Information and Emergency </p>
</div>
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue'
export default {
  name: 'home',
  components: {
    navbar: navbar
  }
}
</script>

<style>
.footer {
  background-color: #aaaaaa;
  padding: 10px;
}
</style>
