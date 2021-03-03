<template>
  <div id="app">
    <navbar />
    <form >
      <h1>New Patient Registration</h1>
      <div>
        <label for="Name">Name </label>
        <input name="Name" v-model="Name" placeholder="Name">
      </div>
      <br>
      <div>
        <label for="email">Email </label>
        <input name="email" v-model="email" placeholder="Email">
      </div>
      <br>
      <div>
        <label for="password">Password </label>
        <input name="password" v-model="password" placeholder="password" type="password">
      </div>
      <br>
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
     <br>
      <div>
        <label for="age">Age </label>
        <input name="age" v-model="age" placeholder="age" type="number">
      </div>
      <br>
      <div>
        <label for="address">Address </label>
        <textarea name="address" v-model="address" placeholder="address"></textarea>
      </div>
      <br>
      <div>
        <label for="contact">Contact </label>
        <input name="contact" v-model="contact" placeholder="contact">
      </div>
      <br>
      <div>
        <label for="emcontact">Emergency Contact </label>
        <input name="emcontact" v-model="emcontact" placeholder="Emergency contact">
      </div>
      <br>
      <div>
        <label for="admissionmonth">Admission Month </label>
        <input name="admissionmonth" v-model="admissionmonth" placeholder="admission month">
      </div>
      <br>
      <div>
        <label for="height">Height </label>
        <input name="height" v-model="height" placeholder="Height">
      </div>
      <br>
      <div>
        <label for="weight">Weight</label>
        <input name="weight" v-model="weight" placeholder="Weight">
      </div>
      <br>
      <div>
        <label for="currmed">Current Medication </label>
        <input name="currmed" v-model="currmed" placeholder="current medication">
      </div>
      <br>
      <button @click.prevent="clicked" name="register">Register</button>
      <div class="container signin">
         <p>Already have an account? <a href='/login'>Login in</a>.</p>
      </div>
    </form>
  </div>
</template>
<script>
import axios from 'axios'
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
    validate () {
      if (this.Name === '') {
        alert('Name must be filled out')
        return false
      } else if (!this.ValidateEmail(this.email)) {
        alert('You have entered an invalid email address!')
        return false
      } else {
        return true
      }
    },
    ValidateEmail (mail) {
      return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)
    },
    clicked () {
      const body = {
        Name: this.Name,
        email: this.email,
        password: this.password,
        gender: this.gender,
        age: this.age,
        address: this.address,
        contact: this.contact,
        emcontact: this.emcontact,
        admissionmonth: this.admissionmonth,
        height: this.height,
        weight: this.weight,
        currmed: this.currmed
      }
      if (this.validate()) {
        axios.post('http://10.177.68.116:8080/patient/registration', body).then((res) => {
          console.log(res)
          this.$router.push('/home')
        })
      }
    }
  }
}
</script>
<style scoped>
body {
  margin: 0px;
}
form {
  padding: 40px;
  background-color: lavender;
}
</style>
