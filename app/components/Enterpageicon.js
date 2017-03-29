/**
 * Created by Doron Warzager on 29/03/2017.
 */

export default function Enterpageicon(props) {
  return (
    <div>
      <i className="logo fa fa-mixcloud big-logo" aria-hidden="true"></i>
      <h1 className="title-sign-in">Sound Cloud</h1>
      <div className="inser-info-component">
        <h1>{props.action}</h1>
        <div className="unser-register">
          <label for="email">Email<br/>
            <input type="text" id="email"/></label>
          <span className="user-name-error">Please enter a valid email</span>
          <label for="password">password<br/>
            <input type="text" id="password"/></label>
        </div>

        {/*<input type="text" required placeholder="Username"/>*/}
        {/*<input type="password" required placeholder="Password"/>*/}
      </div>
      <button className="btn-sign-in">CONTINUE</button>
      <p>{props.lastLine}<a>{props.linkTitle}</a></p>
    </div>

  )
}
