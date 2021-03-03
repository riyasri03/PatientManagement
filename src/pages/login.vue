<template>
<div id='login' class='bg-img'>
  <navbar />
        <div class="container">
        <h1>Login</h1>
        <label for="email"><b>Email</b></label>
        <br>
        <input type='text' name='username' v-model='username' placeholder="Username" label="username" />
        <br>
        <label for="psw"><b>Password</b></label>
        <br>
        <input type='password' name='password' v-model='password' placeholder="Password" label="password" />
        <br>
        <label for="psw"><b>Confirm Password</b></label>
        <br>
         <input type='password' name='cnfpassword' v-model='cnfpassword' placeholder="Confirm Password" label="cnfpassword" />
          <p>Please select your Role:</p>
          <input type="radio" id="doc" v-model="role" value="doc">
          <label for="doc">Doctor</label><br>
          <input type="radio" id="patient" v-model="role" value="patient">
          <label for="patient">Patient</label><br>
          <input type="radio" id="nurse" v-model="role" value="nurse">
          <label for="other">Nurse</label>
          <br>
          <br>
        <button type='button' v-on:click='onsubmit'>Login</button>
        </div>
    </div>
</template>

<script>
import navbar from '@/components/navbar.vue'
import axios from 'axios'
export default {
  name: 'login',
  components: {
    navbar: navbar
  },
  data () {
    return {
      username: '',
      password: '',
      cnfpassword: '',
      role: ''
    }
  },
  methods: {
    validate () {
      if (this.password !== this.cnfpassword) {
        console.log('diff pass')
        return false
      }
      return true
    },
    onsubmit () {
      console.log('In submit')
      const obj = {
        username: this.username,
        password: this.password,
        cnfpassword: this.cnfpassword
      }
      console.log('Out..')
      if (this.validate()) {
        console.log('In..')
        axios.post('http://10.177.68.116:8080/patient/login', obj).then((res) => {
          console.log('response..', res)
          if (this.role === 'doc') this.$router.push('/doclogin')
          else if (this.role === 'patient') this.$router.push('/userlogin')
          else this.$router.push('/nurselogin')
        })
      }
    }
  }
}
</script>

<style scoped>
/* #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    } */
.bg-img {
  /* The image used */
  background-image: url("https://www.apollohospitals.com/images/patient-care/speak-patient.jpg");

  min-height: 800px;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
input[type=text], input[type=password] {
  width: auto;
  padding: 15px;
  margin: 5px 0 22px 0;
  border: none;
  background: black;
}

input[type=text]:focus, input[type=password]:focus {
  background-color: #fff;
  outline: none;
}
.container {
  position: absolute;
  right: 90px;
  margin: 50px;
  width: 300px;
  padding: 20px;
  background-color: white;
  opacity: 0.6;
  color:black;
}
</style>
