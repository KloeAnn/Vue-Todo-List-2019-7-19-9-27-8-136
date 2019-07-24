<template>
  <div class="body">
    <div class="itemInput">
      <input class="addInput" type="text" v-model="message">
      <button class="addButton" v-on:click="addItem">add</button>
    </div>
    <div class="list">
      <div>
        <ol>
          <li v-for="(item,index) in items" v-if="item.showItem" >
            <span >
              <input class="checkItem" type="checkbox" v-model="item.checked" v-on:change="changeItemState">
              <input  :class="item.checked?'grayItem':'blackItem'" v-bind:readonly="isReadOnly" type=text v-bind:value="item.message"  @dblclick="changeItem" @keyup.enter="updateItem(index)" >
              <button @click="deleteListItem(index)">delete</button>
            </span>
          </li>
        </ol>
      </div>
      <div class="buttons">
        <button @click="showAll">All</button>
        <button @click="showActive">Active</button>
        <button @click="showComplete">Complete</button>
      </div>
    </div>
  </div>
</template>

<script>
  const axios = require('axios');
  export default {
    name: "ListBody",
    data(){
      return {
        displayList:[],
        isReadOnly:true,
        showType:'All',
        showItem:true,
        changeMessage:'',
        message:'',
        checked:false,
        item:{},
        info:null
        // items:[]
      }
    },
    methods:{
      addItem(){
        this.$store.dispatch('addListItem',{
          showItem: this.showItem,
          message:this.message,
          checked:this.checked
        })
        this.item={}
        this.message=''
        this.checked=false
        this.showItem=true
      },
      showAll(){
        this.showType='All'
        this.$store.commit('getAllItems')
      },
      showActive(){
        this.showType='Active'
        this.$store.commit('getActiveItems')
      },
      showComplete(){
        this.showType='Complete'
        this.$store.commit('getCompleteItems')
      },
      changeItem(){
        this.isReadOnly=false
      },
      updateItem(index){
        this.isReadOnly=true
        this.item=this.items[index]
        this.item.message=event.currentTarget.value
        this.$store.dispatch('updateListItem',{
          id: this.item.id,
          message:this.item.message,
          showItem:this.item.showItem,
          checked:this.item.checked
        })
      },
      changeItemState(index){
        this.item=this.items[index]
        this.$store.dispatch('updateListItem',{
          id: this.item.id,
          message:this.item.message,
          showItem:this.item.showItem,
          checked:this.item.checked
        })
      },
      deleteListItem(index){
        this.item=this.items[index]
        index=this.item.id
        this.$store.dispatch('deleteListItem',index)
      }
    },
    computed:{
      items(){
        return this.$store.state.items
      }
    },
  }
</script>

<style scoped>
  .body{
    display: block;
    float: left;
  }
</style>
