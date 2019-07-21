<template>
  <div class="body">
    <div class="itemInput">
      <input class="addInput" type="text" v-model="message">
      <button class="addButton" v-on:click="addItem">add</button>
    </div>
    <div class="list">
      <div>
        <ol v-on:change="showType">
          <li v-for="item in items" v-if="item.showItem" >
            <span >
              <input class="checkItem" type="checkbox" v-model="item.checked">
              <input  class="listItem" v-bind:readonly="isReadOnly" type=text v-bind:value="item.message"  @dblclick="changeItem" @keyup.enter="updateItem(item)" >
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
    export default {
        name: "ListBody",
      data(){
          return {
            isReadOnly:true,
            showType:'All',
            showItem:true,
            changeMessage:'',
            message:'',
            checked:false,
            item:{},
            items:[]
          }
      },
      methods:{
          addItem(){
            this.item.showItem=this.showItem
            this.item.message=this.message
            this.item.checked=this.checked
            this.items.push(this.item)
            console.log(this.items)
            this.item={}
            this.message=''
            this.checked=false
            this.showItem=true
          },
        showAll(){
            this.showType='All'
            for(let i of this.items){
              i.showItem=true
            }
        },
        showActive(){
          this.showType='Active'
          for(let i of this.items){
            if(!i.checked)
              i.showItem=false
            else
              i.showItem=true
          }
        },
        showComplete(){
          this.showType='Complete'
          for(let i of this.items){
            if(i.checked)
              i.showItem=false
            else
              i.showItem=true
          }
        },
        changeItem(){
            this.isReadOnly=false
        },
        updateItem(item){
          this.isReadOnly=true
          item.message=event.currentTarget.value
        }
      }
    }
</script>

<style scoped>
 .addInput{
   padding:0px 10px 0px  15px;
   margin: 5px 10px 10px  10px
 }
  .buttons{
    text-align: center;
  }
  .listItem{
    outline: none;
    border: none;
  }
</style>
