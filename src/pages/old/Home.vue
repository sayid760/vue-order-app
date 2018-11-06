<template>
  <div>
    <input type="text" id="num"  v-model="username" placeholder='11111'>
    <button @click="post" >提交</button>
  </div>
</template>

<script>
import {getFocus, addUsername} from '@/api/home'
import axios from 'axios'
export default {
  data () {
    return {
      username: '11111111'
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      getFocus().then(res => {
        console.log(res)
      })
    },
    post () {
      let data = {
        name: this.username
      }
      addUsername(data).then(res => {
        console.log(res)
      })
    }
  }
}
</script>
