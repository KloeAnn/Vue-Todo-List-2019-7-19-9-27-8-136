<template>
  <div>
    <input class="userNameInput" placeholder="输入你的名字" v-model="username">
    <p>
      <button @click="goToList">开始使用</button>
    </p>
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
      getUserName(){
        this.username=event.target.value
      },
      goToList(){
        // if(this.username==='')
        // alert("请输入姓名")
        // else
        this.$router.push({name:'todo', params: { username: this.username }})
      }
    }
  }
</script>

<style scoped>
  div{
    display: inline-block;
    background: white;
    width: 600px;
    height: 200px;
    margin-top: 20px;
    text-align: center;
    border: 5px solid white;
    border-radius: 5px;
  }

</style>
