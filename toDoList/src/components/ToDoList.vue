<template>
    <div>
      <ListHeader></ListHeader>
     <ListBody></ListBody>
    </div>
</template>

<script>
  import ListHeader from './ListHeader'
  import ListBody from './ListBody'
    export default {
        name: "ToDoList",
      components: {ListHeader, ListBody}
    }
</script>

<style scoped>

</style>
