<template>
    <div>
      <input type="text" v-model="content">
      <button @click="addItem">add</button>
    </div>
</template>

<script>
    export default {
        name: "AddToDo",
      data(){
          return{
            content:'',
            showItem:true,
            checked:false,
          }
      },
      methods:{
          addItem(){
              this.$store.commit({
                  type: 'addList',
                  showItem: this.showItem,
                  message:this.message,
                  checked:this.checked
                })
          }
      }
    }
</script>

<style scoped>

</style>
