export default function oneDropDownMenuOpenReduce(curentId = false, action) {
  // console.info(action.state);
  if (action.type === 'CHECK_FOR_OPEN_MENU') {
    if (action.songId === action.dropDownMenuId) {
      console.info(action.dropDownMenuId);
      return !curentId;
    }
  }


  if (action.type === 'AUTO_CLOSE') {

    return action.state;
  }

  if (action.type === 'AUTO_CLOSE_ALL_MENUS') {
    if (action.e.target.className !== "add-to-playlist-menu" &&
      action.e.target.className !== "create-list-btn-explore" &&
      action.e.target.className !== "seporater-line" &&
      action.e.target.className !== "playlist-checkbox-holder" &&
      action.e.target.className !== "fa fa-heart-o add-to-playlist-icon chosen" &&
      action.e.target.className !== "fa fa-heart-o add-to-playlist-icon" &&
      action.e.target.className !== "fa add-to-playlist-icon fa-heart" &&
      action.e.target.className !== "fa add-to-playlist-icon fa-heart chosen" &&
      action.e.target.className !== "one-list-checkbox" &&
      action.e.target.className !== "for-global-flag") {
      return action.state;
    }

  }


  return curentId;
}
