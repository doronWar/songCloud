

export default function doesSongExistReduce(songExistes = false, action) {

  if(action.type==='CHECK_FOR_SONG_IN_PLAYLINS'){
    const savedPlayList = action.playLists.find((thePlayList) =>{
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

  if(action.type==='CHECK_FOR_SONG_IN_ALL_PLAYLINS'){

    action.playLists.forEach((onePlayList)=>{
      onePlayList.songs.forEach((oneSong)=>{
        if(oneSong.id=== action.songId){
          console.info('????');
          return true;
        }
      })
    })
    return false;
  }

  return songExistes;
}
