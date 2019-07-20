<template>
  <div class="body">
    <div class="itemInput">
      <input class="add" type="text" v-model="message">
      <button v-on:click="addItem">add</button>
    </div>
    <div class="list">
      <div>
        <ol v-on:change="showType">
          <li v-for="item in items" v-if="item.showItem" >
            <span >
              <input type="checkbox" v-model="item.checked">{{item.message}}
            </span>
          </li>
        </ol>
      </div>
      <button @click="showAll">All</button>
      <button @click="showActive">Active</button>
      <button @click="showComplete">Complete</button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ListBody",
      data(){
          return {
            showType:'All',
            showItem:true,
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
        }
      }
    }
</script>

<style scoped>
  div{
    width: 500px;
  }
.add{
  float: left;

}
input{
  padding: 4px 15px 4px 0;
  width: 80%;
}
button{
  display: inline-block;
  color:#fc999b;
  background-color:#ffffff;
  border-radius: 5px;
  margin-top:2px;
  padding: 5px 15px;
}
  ol {
    padding-left: 20px;
  }

  ol li {
    padding: 0px;color:#000;
  }



  ol li:nth-child(even){
    background: #f4ecec;
  }


</style>
