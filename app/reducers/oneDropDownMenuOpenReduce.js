export default function oneDropDownMenuOpenReduce(curentId = false, action) {

  if (action.type === 'CHECK_FOR_OPEN_MENU') {
    if (action.songId === action.dropDownMenuId) {
      console.info(action.dropDownMenuId);
      return !curentId;
    }
  }


  return curentId;
}
