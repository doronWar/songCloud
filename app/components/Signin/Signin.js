/**
 * Created by Doron Warzager on 28/03/2017.
 */
import Enterpageicon from '../Enterpageicon/Enterpageicon'

export default function Signin(props) {
  return (
    <div >
      <Enterpageicon action="Sing in"
                     lastLine="Don't have an account yet?"
                     linkTitle='Create Account'
                     redirectTo='SignUp'
                     logIn={props.logIn}
                     {...props}/>
    </div>
  )
}

