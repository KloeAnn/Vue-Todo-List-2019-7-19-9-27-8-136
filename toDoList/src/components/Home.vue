<template>
    <div>
      <button @click="goToMain">返回</button>
      <p>{{username}}</p>
      <ListHeader></ListHeader>
      <br>
      <ListBody></ListBody>
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
          name:'Ming'
        }
      },
      methods:{
        getItemList(){
          this.$store.dispatch('getList')
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
          // 我们很快就会看到 `params` 是什么
          return this.$route.params.username
        }
      },
    }
</script>

<style scoped>

</style>
