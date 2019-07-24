<template>
  <div class="page">
    <div class="left">
      <button class="return" @click="goToMain">
        return
      </button>
      <button class="home" >
        Home
      </button>
      <button class="user" @click="goToUser">
        User
      </button>
    </div>
    <div class="right">

      <p>{{username}}</p>
      <ListHeader></ListHeader>
      <br>
      <ListBody></ListBody>
    </div>
  </div>
</template>

<script>
  import HelloWorld from './HelloWorld'
  import ListHeader from "./ListHeader";
  import ListBody from "./ListBody";

  export default {
    name: 'Home',
    components: {
      ListBody,
      ListHeader,
      HelloWorld
    },
    data(){
      return{

      }
    },
    methods:{
      getItemList(){
        this.$store.dispatch('getList')
      },
      goToUser(){
        this.$router.push({path:'/user',query:{username}})
      },
      goToMain(){
        console.log(this.$route.params.username)
        var res=confirm("确定返回欢迎界面吗？")
        if(res)
        {
          alert("欢迎")
          this.$router.go(-1)
        }else {

        }
      }
    },
    mounted() {
      console.log(this.items)
      this.getItemList()
    },
    computed:{
      items(){
        return this.$store.state.items
      },
      username () {
        return this.$route.params.username
      }
    },
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
  .return{
    float: right;
  }
</style>
