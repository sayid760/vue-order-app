<template>
  <div>
    <input type="text" id="num" placeholder="请输入数量">
  </div>
</template>

<script>
import {getFocus} from '@/api/home'
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
      getFocus().then(res => {
        console.log(res)
      })
    }
  }
}
</script>
