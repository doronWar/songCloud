
export default function setDropDownMenuIdReduce(curentId='', action) {

  // if(action.type==='CLOSE_DROPDOWN_MENU'){
  //
  // }

  if(action.type==='SET_DROPDOWN_MENU'){
    return action.menuId;
  }




  return curentId;
}
