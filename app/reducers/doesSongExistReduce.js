

export default function doesSongExistReduce(songExistes = false, action) {

  if(action.type==='CHECK_FOR_SONG_IN_PLAYLINS'){
    const savedPlayList = action.playLists.find((thePlayList) =>{
      console.info('obectid', thePlayList.id);
      console.info('imported id', action.curentPlaylist.id);
    return thePlayList.id === action.curentPlaylist.id});

    const song = savedPlayList.songs.find((savedSong) => {
      return savedSong.id === action.songId });
    if(song){
      return true
    }
    else{
      return false
    }


    // return song? true: false;
  }


  return songExistes;
}
