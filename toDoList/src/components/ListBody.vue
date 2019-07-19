<template>
  <div class="body">
    <div class="input">
      <input>
      <button title="add">add</button>
    </div>
    <div class="list">
      <div>
        <ol>
          <li><span><input type="checkbox">homework</span></li>
          <li><span><input type="checkbox">sport</span></li>
          <li><span><input type="checkbox">shopping</span></li>
        </ol>
      </div>
      <button>All</button>
      <button>Active</button>
      <button>Complete</button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ListBody"
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
