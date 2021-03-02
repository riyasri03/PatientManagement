<template>
  <div id="app">
    <navbar />
    <form @submit.prevent="login" class= "form">
      <div>
        <label for="Name">Name</label>
        <input name="Name" v-model="Name" placeholder="Name">
      </div>
      <div>
        <label for="email">Email</label>
        <input name="email" v-model="email" placeholder="Email">
      </div>
      <div>
        <label for="password">password</label>
        <input name="password" v-model="password" placeholder="password" type="password">
      </div>
      <div>
        <label for="gender">Gender</label>
        <br>
      <input type="radio" id="male" value="male" v-model="gender">
        <label for="male">Male</label>
        <br>
        <input type="radio" id="female" value="female" v-model="gender">
        <label for="female">Female</label>
        <br>
         <input type="radio" id="others" value="others" v-model="gender">
        <label for="others">Others</label>
     </div>
      <div>
        <label for="age">Age</label>
        <input name="age" v-model="age" placeholder="age" type="number">
      </div>
      <div>
        <label for="address">Address</label>
        <input name="address" v-model="address" placeholder="address">
      </div>
      <div>
        <label for="contact">Contact</label>
        <input name="contact" v-model="contact" placeholder="contact">
      </div>
      <div>
        <label for="emcontact">Emergency Contact</label>
        <input name="emcontact" v-model="emcontact" placeholder="Emergency contact">
      </div>
      <div>
        <label for="admissionmonth">Admission Month</label>
        <input name="admissionmonth" v-model="admissionmonth" placeholder="admission month">
      </div>
      <div>
        <label for="height">Height</label>
        <input name="height" v-model="height" placeholder="Height">
      </div>
      <div>
        <label for="weight">Weight</label>
        <input name="weight" v-model="weight" placeholder="Weight">
      </div>
      <div>
        <label for="currmed">Current Medication</label>
        <input name="currmed" v-model="currmed" placeholder="current medication">
      </div>
      <br>
      <input type="submit" value="register">
      <div class="container signin">
         <p>Already have an account? <a href='/login'>Login in</a>.</p>
      </div>
    </form>
  </div>
</template>
<script>
import navbar from '@/components/navbar.vue'
export default {
  name: 'App',
  components: {
    navbar: navbar
  },
  data () {
    return {
      Name: '',
      email: '',
      password: '',
      gender: [],
      age: '',
      address: '',
      contact: '',
      emcontact: '',
      admissionmonth: '',
      height: '',
      weight: '',
      currmed: ''
    }
  },
  methods: {
    async login () {
      const { Name, email, password, gender, age, address, contact, emcontact, admissionmonth, height, weight, currmed } = this
      const res = await fetch(
        'https://SomberHandsomePhysics--five-nine.repl.co/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            Name,
            email,
            password,
            gender,
            age,
            address,
            contact,
            emcontact,
            admissionmonth,
            height,
            weight,
            currmed
          })
        }
      )
      const data = await res.json()
      console.log(data)
    }
  }
}
</script>
<style scoped>
.form {
  padding: 50px;
}
</style>
