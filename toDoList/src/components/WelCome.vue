<template>
  <div>
    <el-input placeholder="Please input" v-model="username"></el-input>
    <el-button type="primary" @click="goToList">开始使用</el-button>
  </div>
</template>

<script>
  export default {
    name: "WelCome",
    data(){
      return{
        username:''
      }
    },
    methods:{
      goToList(){
        // if(this.username==='')
        // alert("请输入姓名")
        // else
        this.$router.push({name:'home'})
      }
    }
  }
</script>

<style scoped>
  div{
    display: inline-block;
    background: white;
    width: 650px;
    text-align: center;
    border: 5px solid white;
    border-radius: 5px;
  }
</style>
