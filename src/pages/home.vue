<template>
  <div>
      <navbar />
      <div class="slideshow-container">

<div class="mySlides fade">
  <div class="numbertext">1 / 3</div>
  <img src="https://www.apollohospitals.com/images/patient-care/plus-image.jpg" style="width:100%">
  <div class="text">Caption Text</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">2 / 3</div>
  <img src="https://www.apollohospitals.com/images/patient-care/banner/edoc-patient-care.png" style="width:100%">
  <div class="text">Caption Two</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">3 / 3</div>
  <img src="https://www.apollohospitals.com/images/patient-care/banner/edoc-patient-care.png" style="width:100%">
  <div class="text">Caption Three</div>
</div>

</div>
<br>
<div style="text-align:center">
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
</div>
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
