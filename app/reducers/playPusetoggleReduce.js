

export default function playPusetoggleReduce(toPlay = true, action) {

  if(action.type === 'PLAYER_TOGGLE'){
    return !toPlay;
  }
  return toPlay;
}
