<template>

    <div id="start">

         <div  class="start_content">

                <header class="start_header">
                    <img src="../assets/images/canju.png"/> 用餐人数
                </header>

                <p class="notice">请选择正确的用餐人数 ，小二马上给你送餐具</p>

                <div class="content">
                    <ul class="user_list">
                        <li v-for="(item,key) in userList" :class="{'active':key==0}" :key="key">
                            <span>{{item}}</span>
                        </li>
                    </ul>

                    <div class="mark_input">
                        <input type="text" v-model='p_mark' placeholder="请输入您的口味要求，忌口等（可不填）"/>
                    </div>

                    <ul class="mark_list">
                        <li>
                            <span>打包带走</span>
                        </li>
                        <li>
                            <span>
                               不要放辣椒
                            </span>
                        </li>
                        <li>
                            <span>
                               微辣
                            </span>
                        </li>
                    </ul>

                </div>

            </div>

            <div id="start" class="start" @click="addPeopleInfo()">
                <span>
                        开始点菜
                </span>
            </div>

    </div>
</template>

<script>

// 引入config

import { addPeopleInfos } from '@/api/home'

export default{

  data () {
    return {
      'p_num': '1人',
      'p_mark': '',
      'userList': []
    }
  },

  methods: {
    addChangeEnvet () {
      var that = this/* 保存this */

      // 人数的dom操作
      var userLis = document.querySelectorAll('.user_list li')
      // alert(lis)

      for (var i = 0; i < userLis.length; i++) {
        userLis[i].onclick = function () {
          // 去掉所有的li的class，让当前点击的li的class等于active

          for (var j = 0; j < userLis.length; j++) {
            userLis[j].className = ''
          }
          this.className = 'active' // this 就是li这个dom节点

          // trim()表示去除空格

          that.p_num = this.querySelector('span').innerHTML.trim()
        }
      }

      // 口味的dom操作
      var markLis = document.querySelectorAll('.mark_list li')

      for (var i = 0; i < markLis.length; i++) {
        markLis[i].onclick = function () {
          for (var j = 0; j < markLis.length; j++) {
            markLis[j].className = ''
          }
          this.className = 'active' // this 就是li这个dom节点

          that.p_mark = that.p_mark + ' ' + this.querySelector('span').innerHTML.trim()
        }
      }
    },
    addPeopleInfo () {
      // 桌子id  桌子号：是扫描二维码从url获取的
      let data = {
        uid: 'a001',
        p_num: this.p_num,
        p_mark: this.p_mark
      }
      addPeopleInfos(data).then(res => {
        if (res.data.success) {
          this.$router.push({ path: 'home' })
        }
      })
    }
  },
  mounted () {
    for (var i = 0; i < 12; i++) {
      this.userList.push(i + 1 + '人')
    }

    // 数据没有渲染完成，就去获取dom节点

    // 数据渲染完成再去获取

    this.$nextTick(function () {
      this.addChangeEnvet()
    })
  }
}
</script>

<style lang="scss">

.start_content{

    .start_header{

        height: 3.2rem;

        line-height: 3.2rem;
        background: #000;

        color: #fff;

        width: 10rem;

        margin: 5rem auto 0rem auto;

        border-radius: .5rem;

        img{

            height:2.2rem;

            line-height: 2.2rem;
            position: relative;

            top:.5rem;
            margin-left: 1rem;
        }
    }

    .notice{

        color: red;
        //
        text-align: center;

        margin:1rem 0rem;

    }

    .mark_input{
        padding: 1rem;

        input{

            height: 3rem;
            line-height:3rem;

            width:100%;
            border:1px solid #eee;
        }

    }
    .user_list,.mark_list{

        display: flex;

        flex-wrap: wrap;
        padding: .5rem;

        li{

             width: 25%;
             padding: .5rem;
             box-sizing: border-box;   /*盒子的宽度=盒子本身宽度    默认 盒子的宽度=盒子的宽度+padding+border*/

             span{

                 display: block;

                 width: 100%;
                 height: 3.2rem;

                 line-height: 3.2rem;
                 text-align: center;
                 background: #fff;
                 border-radius: .5rem;
                 border: 1px solid #ccc;
             }

        }

        li.active{

              span{

                 background: red;
                 border: 1px solid red;

                 color:#fff;
             }
        }

    }
}

.start{

    position: fixed;

    bottom: 5rem;

    left: 50%;
    margin-left: -3rem;

    width: 6rem;

    height: 6rem;

    border-radius: 50%;

    background: red;
    color: #fff;

    span{

        display: block;

        width: 2rem;

        margin: 0 auto;

        position: relative;

        top:1.5rem;
    }

  }

</style>
