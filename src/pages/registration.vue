<template>
  <div id="app" class="bg-img">
    <navbar />
    <form class="container" >
      <h1>New Patient Registration</h1>
      <div>
        <label for="Name">Name </label>
        <input type="text" name="name" v-model="name" placeholder="Name">
      </div>
      <br>
      <div>
        <label for="email">Email </label>
        <input type="text" name="email" v-model="email" placeholder="Email">
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
        <textarea type="text" name="address" v-model="address" placeholder="address"></textarea>
      </div>
      <br>
      <div>
        <label for="contact">Contact </label>
        <input type="text" name="contact" v-model="contact" placeholder="contact">
      </div>
      <br>
      <div>
        <label for="emergencyContact">Emergency Contact </label>
        <input type="text" name="emergencyContact" v-model="emergencyContact" placeholder="Emergency contact">
      </div>
      <br>
      <div>
        <label for="admissionMonth">Admission Month </label>
        <input type="text" name="admissionMonth" v-model="admissionMonth" placeholder="admission month">
      </div>
      <br>
      <div>
        <label for="height">Height </label>
        <input type="text" name="height" v-model="height" placeholder="Height">
      </div>
      <br>
      <div>
        <label for="weight">Weight</label>
        <input type="text" name="weight" v-model="weight" placeholder="Weight">
      </div>
      <br>
      <div>
        <label for="currentMedication">Current Medication </label>
        <select name="currentMedication" id="currentMedication" v-model="currentMedication" placeholder="current medication">
         <option value="yes">Yes</option>
         <option value="no">No</option>
        </select>
        <!-- <input type="text" name="currentMedication" v-model="currentMedication" placeholder="current medication"> -->
      </div>
      <br>
      <button @click.prevent="clicked" name="register">Register</button>
      <div>
         <p>Already have an account? <a href='/login'>Login in</a>.</p>
      </div>
    </form>
    <div class="footer">
  <p>Contact: 85637492849</p>
</div>
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
      name: '',
      email: '',
      password: '',
      gender: [],
      age: '',
      address: '',
      contact: '',
      emergencyContact: '',
      admissionMonth: '',
      height: '',
      weight: '',
      currentMedication: []
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
        name: this.name,
        email: this.email,
        password: this.password,
        gender: this.gender,
        age: this.age,
        address: this.address,
        contact: this.contact,
        emergencyContact: this.emergencyContact,
        admissionMonth: this.admissionMonth,
        height: this.height,
        weight: this.weight,
        currentMedication: this.currentMedication
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
input[type=text], input[type=password], input[type=number], textarea, select {
  width: auto;
  padding: 15px;
  margin: 10px 0 22px 0;
  border: none;
  background: whitesmoke;
}

input[type=text]:focus, input[type=password]:focus, input[type=number], textarea, select{
  background-color: #fff;
  outline: none;
}
.container {
  background-position: center;
  right: 90px;
  margin: 50px;
  width: 400px;
  padding: 20px;
  background-color: #aaaaaa;
  opacity: 0.6;
  color:black;
}
.bg-img {
  /* The image used */
  background-image: url("https://www.apollohospitals.com/images/patient-care/plus-image.jpg");

  min-height: 800px;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
