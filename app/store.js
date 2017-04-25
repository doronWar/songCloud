
import { createStore, combineReducers } from 'redux'
import curentSong from './reducers/curentSongReduce'
import searchForMusic from './reducers/searchForMusicReduce'
import playLists from './reducers/playListsReduce'
import newListId from './reducers/newListIdReduce'
import dropDownMenuId from './reducers/setDropDownMenuIdReduce'
import oneDropDownMenuOpen from './reducers/oneDropDownMenuOpenReduce'
import doesSongExist from './reducers/doesSongExistReduce'
import playPusetoggle from './reducers/playPusetoggleReduce'
import playerControlImage from './reducers/playerControlImageReduce'
import userInfo from './reducers/userInfoReduce'



const reducer = combineReducers({
  curentSong,
  searchForMusic,
  playLists,
  newListId,
  dropDownMenuId,
  oneDropDownMenuOpen,
  doesSongExist,
  playPusetoggle,
  playerControlImage,
  userInfo,
});



const store = createStore(reducer);

export default store;
