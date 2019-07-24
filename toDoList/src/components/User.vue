<template>
  <div class="page">
    <div class="left">
      <button class="return" @click="goToMain">
        return
      </button>
      <button class="home" @click="goToHome">
        Home
      </button>
      <button class="user" >
        User
      </button>
    </div>
    <div class="right">
      <img src="">
      <p>{{username}}</p>
      <p>{{tel}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "User",
    data(){
      return{
        url:"",
        tel:"123123"
      }
    },
    methods:{
      goToHome(){
        this.$router.go(-1)
      },
      goToMain(){
        this.$router.push({path:'/'})
      }
    },
    computed:{
      username(){
        console.log(this.$route.params.username)
        return this.$route.params.username
      }
    }
  }
</script>

<style scoped>
  .page{
    display: inline-block;
    background: white;
    width: 600px;

    margin-top: 20px;
    text-align: center;
    border: 5px solid white;
    border-radius: 5px;
  }
  .left{
    width:50px;
    float:left;
  }
  .return{
    display: block;
    height: 30px;
    margin: 30px 0;
  }
  .home{
    display: block;

    height: 30px;
    margin: 30px 0;
  }
  .user{
    display: block;

    height: 30px;
    margin: 30px 0;
  }
  .right{
    margin-left:50px;
  }
</style>
