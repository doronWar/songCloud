export function xhrControll(data, song, actionToDo, path) {


    // const addedPlayList = {
    //
    //   title: 'New Playlist ',
    //   id: listId,
    //   songs: [song],
    // };
    //

    const xhr = new XMLHttpRequest();


    xhr.open(`${actionToDo}`, `http://localhost:3000/${path}`);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send(JSON.stringify(data));



}
