<template>
  <div>
    <navbar />
      <h1>This is patient login page</h1>
      <label for="selection">Select your perferred Doctor</label>
      <table style="width:100%">
          <div v-for = 'res in results' :key="res.patientId">
        <tr>
            <th>Doctor Id</th>
            <th>Doctor Name</th>
            <th>Doctor Contact</th>
            <th>Month</th>
            <th>Issue</th>
        </tr>
        <tr>
      <td>{{res.doctorid}}</td>
      <td>{{res.doctorName}}</td>
      <td>{{res.doctorContact}}</td>
      <td>{{res.month}}</td>
      <td>{{res.issue}}</td>
      </tr>
      </div>
      </table>
      <label for="Issue"> Please Enter your Issue</label>
      <input type="text" name="issue" value ="issue" >
     <div> <router-link to="/payment"><button class="btn payment">Make Payment</button></router-link></div>
     <router-link to ="/login"><button type='button' class=""><i class="fa fa-sign-out"></i> Logout</button></router-link>
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue'
import axios from 'axios'
export default {
  name: 'userlogin',
  components: {
    navbar: navbar
  },
  data () {
    return {
      results: [],
      patientId: ''
    }
  },
  mounted () {
    this.patientId = localStorage.getItem('id')
    axios.get('http://10.177.68.116:8080/patient/doctorList/' + this.patientId).then((results) => {
      console.log(results)
      localStorage.setItem('details', results.data)
      this.results = results.data
    })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<style>
.payment {
  border-color: #4CAF50;
  color: green;
}

.payment:hover {
  background-color: #4CAF50;
  color: white;
}
.btn {
  border: 2px solid black;
  background-color: white;
  color: black;
  padding: 10px 18px;
  font-size: 16px;
  cursor: pointer;
}
</style>
