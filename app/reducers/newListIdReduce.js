export default function newListIdReduce(currentTerm = "", action) {


  switch (action.type) {
    case 'NEW_LIST_ID':
      if (action.newListId) {
        return action.newListId;
      }
      break;

    case 'RESET_LIST_ID':
      return "";
      break;
  }
  //
  // if(action.type==='NEW_LIST_ID'){
  //
  //   if(action.newListId) {
  //
  //     return action.newListId;
  //   }
  // }
  //
  // if(action.type==='RESET_LIST_ID'){
  //
  //   return "";
  //   // if(action.newListId) {
  //   //
  //   // }
  // }
  return currentTerm;
}
