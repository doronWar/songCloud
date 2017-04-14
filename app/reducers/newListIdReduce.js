
export default function newListIdReduce(currentTerm="", action) {

  if(action.type==='NEW_LIST_ID'){

    if(action.newListId) {

      return action.newListId;
    }
  }

  if(action.type==='RESET_LIST_ID'){

    return "";
    // if(action.newListId) {
    //
    // }
  }
  return currentTerm;
}
