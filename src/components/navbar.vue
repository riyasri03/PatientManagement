<template>
  <nav class='navbar'>
      <ul>
      <li><router-link to ="/home" class="active" >Home</router-link></li>
      <li><router-link to ="/login">Login</router-link></li>
      <li><router-link to ="/registration">New Patient</router-link></li>
      <li><a href='#'>Contact Us</a></li>
      <li style="float:right"><a href='#'>Emergency</a></li>
      </ul>

  </nav>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'navbar',
  methods: {
    ...mapActions(['setLoginAction']),
    clicked () {
      // this.setLoginAction('hayyy I am updated by map action')
    }
  },
  created () {
    this.setLoginAction('hayyy I am updated by map action')
  }
}
</script>

<style>
.navbar {
    height: 50px;
    background-color: aqua;
}
a{
    margin: 10px;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color:greenyellow;
}

.active {
  background-color: greenyellow;
}
</style>
