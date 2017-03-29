/**
 * Created by Doron Warzager on 28/03/2017.
 */
export default function Player() {
  return (
    <div>
      <footer>
        <h1 style = {{border: '1px solid black' ,'textAlign':"center" }}>Player component</h1>
        <img src="" alt="Song Thumbnail"/>
        <p>Song name</p>
        <audio controls>
          <source src="" type="audio/ogg"/>
          <source src="" type="audio/mpeg"/>
        </audio>
      </footer>

    </div>
  )
}
