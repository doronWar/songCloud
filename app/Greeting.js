/**
 * Created by Doron Warzager on 26/03/2017.
 */


export default function Greeting(data) {
  return (
    <div>
      <p>Hello my name is {data.name} and my age is {data.age}`</p>
      <input type="button" value="Click me to go to hell" onClick={()=>{console.info('hell');}}/>
      <input type="button" value="Click me for God" onClick={data.fn}/>



    </div>
  )
}
