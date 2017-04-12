
import { createStore, combineReducers } from 'Redux'
import curentSong from './reducers/curentSongReduce'
import searchForMusic from './reducers/searchForMusicReduce'
import playLists from './reducers/playListsReduce'
import newListId from './reducers/newListIdReduce'
import dropDownMenuId from './reducers/setDropDownMenuIdReduce'
import oneDropDownMenuOpen from './reducers/oneDropDownMenuOpenReduce'


const reducer = combineReducers({
  curentSong,
  searchForMusic,
  playLists,
  newListId,
  dropDownMenuId,
  oneDropDownMenuOpen,
});



const store = createStore(reducer);

export default store;
