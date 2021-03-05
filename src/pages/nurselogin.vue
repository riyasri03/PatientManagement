<template>
    <div>
    <navbar />
      <h1>Welcome Nurse</h1>
      <table style="width:100%">
          <div class=”users” v-for = 'res in results' :key="res.id">
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Age</th>
            <th>Gender</th>
            <th>issue</th>
        </tr>
        <tr>
      <td>{{res.id}}</td>
      <td>{{res.patientName}}</td>
      <td>{{res.patientContact}}</td>
      <td>{{res.age}}</td>
      <td>{{res.gender}}</td>
      <td>{{res.issue}}</td>
      </tr>
      </div>
      </table>
      <router-link to ="/login"><button type='button' class=""><i class="fa fa-sign-out"></i> Logout</button></router-link>
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue'
import axios from 'axios'
export default {
  name: 'nurse',
  components: {
    navbar: navbar
  },
  data () {
    return {
      results: [],
      id: ''
    }
  },
  mounted () {
    this.id = localStorage.getItem('id')
    axios.get('http://10.177.68.116:8080/nurse/patientList/' + this.id).then((result) => {
      console.log(result)
      localStorage.setItem('details', result.data)
      this.results = result.data
    })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<style>

</style>
