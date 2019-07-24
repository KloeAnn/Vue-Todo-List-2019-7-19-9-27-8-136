<template>
  <div>
    <img src="">
    <p>{{username}}</p>
    <p>{{tel}}</p>
  </div>
</template>

<script>
  export default {
    name: "User",
    data() {
      return {
        url: "111111",
        tel: "123123"
      }
    },
    methods: {
      goToHome() {
        this.$router.go(-1)
      },
      goToMain() {
        this.$router.push({path: '/'})
      }
    },
    computed: {
      username() {
        return this.$route.params.username
      }
    }
  }
</script>

<style scoped>
div{
  width: 500px;
}
</style>
