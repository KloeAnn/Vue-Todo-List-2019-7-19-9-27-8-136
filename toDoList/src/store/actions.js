const axios = require('axios');
const actions={
  getList (context) {
    axios.get('http://localhost:3001/todos').then(
      response=>{
        context.commit('getList',response.data)
      }
    ).catch(e=>alert(e))
  },
  addListItem (context,item) {
    axios.post('http://localhost:3001/todos',item).then(
      response=>{
        context.commit('addList',{
            showItem: response.data.showItem,
            message:response.data.message,
            checked:response.data.checked,
        })
      }
    ).catch(e=>alert(e))
  },
  updateListItem (context,item) {

    axios.put(`http://localhost:3001/todos/${item.id}`,item).then(
      response=>{
        context.commit({
          type: 'updateListItem',
          id: response.data.id,
          message:response.data.message,
          showItem:response.data.showItem,
          checked:response.data.checked
        })
      }
    ).catch(e=>alert(e))
  },
  deleteListItem(context,index){
    axios.delete(`http://localhost:3001/todos/${index}`).then(
      response=>{
        console.log(response.data.id)
        context.commit(
          'deleteListItem',
          response.data.id
        )
      }
    ).catch(e=>alert(e))
  },
}
export default actions
