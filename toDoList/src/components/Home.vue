<template>
  <div class="page">
    <div class="left">
      <el-menu :span="20" :router="true">
        <el-menu-item index="todo">
          <span>todo</span>
        </el-menu-item>
        <el-menu-item index="user">
          <span>user</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import HelloWorld from './HelloWorld'
  import ToDoList from './ToDoList'

  export default {
    name: 'Home',
    components: {
      ToDoList,
      HelloWorld
    },
    beforeRouteLeave(to, from, next) {
      if (to.path === '/') {
        const answer = window.confirm('Do you really want to leave? ')
        if (answer) {
          next()
        } else {
          next(false)
        }
      } else {
        next()
      }
    },
    methods: {
      getItemList() {
        this.$store.dispatch('getList')
      },
      goToUser() {
        this.$router.push({name: 'user', params: {username: this.username}})
      },
      goToMain() {
        this.$router.go(-1)
      }
    },
    mounted() {
      console.log(this.items)
      this.getItemList()
    },
    computed: {
      items() {
        return this.$store.state.items
      },
      username() {
        return this.$route.params.username
      }
    },
  }
</script>

<style scoped>
  .page {
    display: inline-block;
    background: white;
    width: 600px;

    margin-top: 20px;
    text-align: center;
    border: 5px solid white;
    border-radius: 5px;
  }

  .left {
    width: 100px;
    float: left;
  }

  .right {
    margin-left: 100px;
  }


</style>
