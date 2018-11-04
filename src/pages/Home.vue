<template>
  <div>
    home

  </div>
</template>

<script>
// import {post} from '@/utils/api'
import axios from 'axios'
export default {
  data () {
    return {

    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      // post('http://api.douban.com/v2/movie/top250',{ start:25,count:2,}).then(res=>{
      //   console.log(res)
      // })
      axios.get('/admin/manage').then(res => {
        console.log(res)
      })
    }
  }
}
</script>
