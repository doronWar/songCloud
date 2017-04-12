
import { createStore, combineReducers } from 'Redux'
import curentSong from './reducers/curentSongReduce'


const reducer = combineReducers({
  curentSong,
});



const store = createStore(reducer);

export default store;
