import state from "./state";

const mutations={
      addList(state,item){
        state.items.push(item)
      },
      getAllItems(){
        state.items=state.items.map(i=>{
          if(i.hasOwnProperty("showItem"))
            i.showItem=true
          return i
        })
      },
      getActiveItems(){
        state.items=state.items.map(i=>{
          if(i.hasOwnProperty("showItem"))
            if(i.hasOwnProperty("checked"))
            i.showItem=!i.checked
          return i
        })
      },
      getCompleteItems(){
        state.items=state.items.map(i=>{
          if(i.hasOwnProperty("showItem"))
            if(i.hasOwnProperty("checked"))
              i.showItem=i.checked
          return i
        })
      },
      updateListItem(state,item){

        state.items[item.index].message=item.message

      }
}
export default mutations
