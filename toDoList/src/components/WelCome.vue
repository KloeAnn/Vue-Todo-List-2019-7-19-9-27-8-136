<template>
    <div>
      <p>
        <button @click="goToList">开始使用</button>
      </p>
      <input placeholder="输入你的名字">
    </div>
</template>

<script>
    export default {
        name: "WelCome",
      methods:{
        goToList(){
          this.$router.push({name:'todo', params: { username: '123' }})
        }
      }
    }
</script>

<style scoped>
  div{
    width: 600px;
    height: 200px;
  }
</style>
