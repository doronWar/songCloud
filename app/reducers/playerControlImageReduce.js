


export default function playerControlImageReduce(toPlay = false, action) {

  if(action.type === 'PLAYER_TOGGLE_FROM_AUDIO'){
    return !toPlay;
  }

  return toPlay;
}

