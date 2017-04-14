/**
 * Created by Doron Warzager on 28/03/2017.
 */
import Enterpageicon from '../Enterpageicon/Enterpageicon'

export default function Signup(props) {
  return (
    <div>
      <div>
        <Enterpageicon
          action="Create account"
          lastLine="Already have an account"
          linkTitle='Sign in'
          redirectTo='SignIn'
          {...props}/>
      </div>
    </div>
  )
}
