

export default function currentTrackReducer(currentTerm = "", action) {

  if (action.type === 'TERM_FOR_SEARCH') {
      if (action.value) {
      return action.value;
    }
    else {
      return ""
    }

  }

  //
  // if (action.type === 'SEARCH_FOR_SONG') {
  //   this.props.history.push(`/explore/${action.value}`)
  //
  // }

  return currentTerm;
}



