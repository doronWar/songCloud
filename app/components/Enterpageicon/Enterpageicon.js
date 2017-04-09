import './Enterpageicon.scss'
import {Link} from 'react-router-dom'

export default function Enterpageicon(props) {
  return (
    <div className="sign-in-modal">
      <i className="logo fa fa-mixcloud big-logo" aria-hidden="true"/>
      <h1 className="title-sign-in">Sound Cloud</h1>
      <div className="inser-info-component">
        <h1>{props.action}</h1>
        <div className="unser-register">
          <label htmlFor="email" className="labels">Email<br/></label>
            <input type="text" id="email" className="login-inputes"/>
          <span className="user-name-error">Please enter a valid email</span>
          <label htmlFor="password">password<br/></label>
            <input type="text" id="password" className="login-inputes"/>
        </div>

        {/*<input type="text" required placeholder="Username"/>*/}
        {/*<input type="password" required placeholder="Password"/>*/}
      </div>
      <button className="btn-sign-in btn-eff"
      onClick={props.logIn}>
        CONTINUE
      </button>
      {console.info(props.redirectTo)}
      <p>{props.lastLine}<Link to={props.redirectTo}>{props.linkTitle}</Link></p>
    </div>

  )
}
