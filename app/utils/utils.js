export function xhrControll(data, song, actionToDo, path) {


    // const addedPlayList = {
    //
    //   title: 'New Playlist ',
    //   id: listId,
    //   songs: [song],
    // };
    //

    const xhr = new XMLHttpRequest();


  xhr.open(`${actionToDo}`, `${serverLocation}/${path}`);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send(JSON.stringify(data));



}

export const serverLocation = location.port == 8080  ? 'http://localhost:3000' : location.origin;
