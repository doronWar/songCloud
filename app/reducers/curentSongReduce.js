


export default function currentTrackReducer(currentTrack = null, action) {

  if (action.type === 'CURENT_SONG') {

    return action.song
  }

  return currentTrack;
}
// export default function curentSongReduce() {
//   return null;
// }
