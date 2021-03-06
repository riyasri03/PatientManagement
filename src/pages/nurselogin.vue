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
             <button @click="history" class="btn payment"> History</button>
       <table v-show="histShow">
       <tr>
            <th>Patient Id</th>
            <th>Patient Name</th>
            <th>Patient Contact</th>
            <th>Month</th>
            <th>Issue</th>
        </tr>
       <tr v-for="data in hist" :key="data.id">
         <td>{{data.patientId}}</td>
         <td>{{data.patientName}}</td>
         <td>{{data.patientContact}}</td>
         <td>{{data.month}}</td>
         <td>{{data.issue}}</td>
        </tr>
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
      id: '',
      hist: [],
      histShow: false,
      patientId: ''
    }
  },
  mounted () {
    this.id = localStorage.getItem('id')
    axios.get('http://10.177.68.33:8080/nurse/patientList/' + this.id).then((result) => {
      console.log(result)
      localStorage.setItem('details', result.data)
      this.results = result.data
    })
      .catch((error) => {
        console.log(error)
      })
  },
  methods: {
    history () {
      this.histShow = true
      this.patientId = localStorage.getItem('id')
      axios.get('http://10.177.68.116:8801/nurse/getPatientsHistory/' + this.patientId).then((output) => {
        console.log(output)
        localStorage.setItem('details', output.data)
        this.hist = output.data
        console.log(this.hist)
        this.hist.array.forEach(e => {
          this.hist.push(e)
        })
      })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  created () {
    if (localStorage.getItem('sessionStatus') !== '200') {
      this.$router.push('/login')
    }
  }
}
</script>

<style>
table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even){background-color: #f2f2f2}

th {
  background-color:#aaaaaa;
  color: white;
}
</style>
