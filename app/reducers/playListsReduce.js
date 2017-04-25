export default function currentTrackReducer(currentTerm = [], action) {


  if (action.type === 'LOAD_APP_LOAD_PLAYLIST') {
    return action.loadedPlaylistFromServer;

  }


  if (action.type === 'LOAD_PLAYLIST') {
    return action.loadedPlaylist

  }

  if (action.type === 'ADD_PLAYLIST') {

    const playlists = currentTerm.map((playlist) => playlist);

    const addedPlayList = {

      title: 'New Playlist ',
      id: action.newId,
      songs: action.song ? [action.song] : [],
    };

    playlists.push(addedPlayList);

    return playlists;

  }


  if (action.type === 'REMOVE_PLAYLIST') {

    const playlists = [...currentTerm];
    const indexToRemove = playlists.findIndex((onePlayList) => onePlayList.id === action.playListId)
    playlists.splice(indexToRemove, 1);

    return playlists;

  }


  if (action.type === 'CHANGE_NAME') {
    const playlists = [...currentTerm];
    const onePlayList = playlists.find((aPlayList) => aPlayList.id === action.id);
    onePlayList.title = action.name;

    return playlists;

  }


  if (action.type === 'FIND_SONG_IN_PLAYLIST') {
    const playlists = [...currentTerm];
    const savedPlayList = playlists.find((thePlayList) => thePlayList.id === action.platyListId);
    return savedPlayList.songs.find((savedSong) => {
      return savedSong.id === action.songId
    });


    const onePlayList = playlists.find((aPlayList) => aPlayList.id === action.id);

    onePlayList.title = action.name;

    return playlists;

  }


  if (action.type === 'ADD_AND_REMOVE_SONG_FROM_PLAYLIST') {

    const playlists = [...currentTerm];
    const onePlayList = playlists.find((playList) => playList.id === action.listId);
    let indexOfSong;

    if (action.toAdd) {
      onePlayList.songs.push(action.song);
      return playlists;
    }
    else {

      indexOfSong = onePlayList.songs.findIndex((oneSong) => {
        return oneSong.id === action.song.id;
      });

      onePlayList.songs.splice(indexOfSong, 1);
      return playlists;
    }


  }


  return currentTerm;
}

