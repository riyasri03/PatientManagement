<template>
<div id='login' class='bg-img'>
  <navbar />
        <form action="" class="container">
        <h1>Login</h1>
        <label for="email"><b>Email</b></label>
        <br>
        <input type='text' name='username' v-model='input.username' placeholder="Username" id="" />
        <br>
        <label for="psw"><b>Password</b></label>
        <br>
        <input type='password' name='password' v-model='input.password' placeholder="Password" />
        <br>
        <button type='button' v-on:click='login()'>Login</button>
        </form>
    </div>
</template>

<script>
import navbar from '@/components/navbar.vue'
export default {
  name: 'Login',
  components: {
    navbar: navbar
  },
  data () {
    return {
      input: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      if (this.input.username !== '' && this.input.password !== '') {
        if (this.input.username === this.$parent.mockAccount.username && this.input.password === this.$parent.mockAccount.password) {
          this.$emit('authenticated', true)
          this.$router.replace({ name: 'secure' })
        } else {
          console.log('The username and / or password is incorrect')
        }
      } else {
        console.log('A username and password must be present')
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
  background: #f1f1f1;
}

input[type=text]:focus, input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}
.container {
  position: absolute;
  right: 90px;
  margin: 50px;
  max-width: 500px;
  padding: 20px;
  background-color: white;
}
</style>
More
