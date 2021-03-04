<template>
  <nav class='navbar'>
      <ul>
      <li><router-link to ="/home" >Home</router-link></li>
      <li><router-link to ="/login">Login</router-link></li>
      <li><router-link to ="/registration">New Patient</router-link></li>
      <li><a href='#'>Contact Us</a></li>
      <li style="float:right"><a href='#'>Emergency</a></li>
      </ul>

  </nav>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style>
.navbar {
    height: 50px;
}
a{
    margin: 10px;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #aaaaaa;
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
  background-color:#a4ebf3;
}

/* .active {
  background-color: greenyellow;
} */
</style>
