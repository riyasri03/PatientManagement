<template>
  <div>
    <navbar />
    <h1>Welcome Doctor</h1>
      <table style="width:100%">
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Age</th>
            <th>Gender</th>
            <th>issue</th>
            <th>Month</th>
            <th>Cosultation </th>
        </tr>
      <div v-for ='(res, index) in results' :key="res.doctorId">
      <tr>
      <td>{{res.id}}</td>
      <td>{{res.patientName}}</td>
      <td>{{res.patientContact}}</td>
      <td>{{res.age}}</td>
      <td>{{res.gender}}</td>
      <td>{{res.issue}}</td>
      <td>
        <label for="month">Month</label>
        <select name="month" id="month" v-model="month[index]" placeholder="Select Month">
         <option value="january">January</option>
         <option value="february">February</option>
         <option value="march">March</option>
         <option value="april">April</option>
         <option value="may">May</option>
         <option value="june">June</option>
         <option value="july">July</option>
         <option value="august">August</option>
         <option value="september">September</option>
         <option value="october">October</option>
         <option value="november">November</option>
         <option value="december">December</option>
        </select></td>
      <td><button @click="consultationEnd(res.id, index)" class="btn endconsult">consultation end</button></td>
      </tr>
      </div>
      </table>
      <div>
      <router-link to ="/login"><button type='button' class=""><i class="fa fa-sign-out"></i> Logout</button></router-link>
      </div>
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue'
import axios from 'axios'
export default {
  name: 'doclogin',
  components: {
    navbar: navbar
  },
  data () {
    return {
      results: [],
      doctorId: '',
      res: [],
      month: []
    }
  },
  methods: {
    consultationEnd (id, index) {
      const doctorId = this.doctorId
      const patientId = id
      const monthsend = this.month[index]
      axios.put('http://10.177.68.116:8080/doctor/endConsultation/', { doctorId, patientId, monthsend }).then((res) => {
        console.log('response..', res)
      })
    }
  },
  mounted () {
    this.doctorId = localStorage.getItem('id')
    axios.get('http://10.177.68.116:8080/doctor/patientList/' + this.doctorId).then((result) => {
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
.endconsult {
  border-color: #4CAF50;
  color: green;
}

.endconsult:hover {
  background-color: #4CAF50;
  color: white;
}
.btn {
  border: 2px solid black;
  background-color: white;
  color: black;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
}
</style>
