import { UseRef, UseState, UseEffect } from 'react';
// import React, { Component } from 'react';
import './login.css';

const login = () => {
  const UserRef = UseRef();
  const errRef = UseRef();

  const [user, setUser] = UseState('');
  const[pwd, setPwd] = UseState('');
  const[errMsg, setErrMsg] = UseState('');
  const [success, setSuccess] = UseState(false);

  UseEffect(() => {
    UserRef.current.focus();
  }, [])

  UseEffect(() => {
    setErrMsg('');
  }, [user, pwd])

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user,pwd);
    setUser('');
    setPwd('');
    setSuccess(true);
  }

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            
          </p>
        </section>
      ) : (
    <section>
      <p ref={errRef} className={errMsg ? "errmsg" :
      "offscreen"} aria-live= "assertive">{errMsg}</p>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username"
        ref={UserRef}
        autoComplete="off"
        onChange={(e) => setUser(e.target.value)}
        value={user}
        required
        />

        <label htmlFor="password">Passworde:</label>
        <input type="password" id="password"
        ref={UserRef}
        onChange={(e) => setPwd(e.target.value)}
        value={pwd}
        required
        />

        <button>Log In</button>
      </form>
    </section>
    )}
    </>
  )
}
export default login
// class login extends Component {
//     handleSubmit = e => {
//       e.preventDefault();
//       console.log(e.target.username.value);
  
//       if (!e.target.username.value) {
//         alert("username is required");
//       } else if (!e.target.username.value) {
//         alert("Valid username is required");
//       } else if (!e.target.password.value) {
//         alert("Password is required");
//       } else if (
//         e.target.username.value === "me@example.com" &&
//         e.target.password.value === "123456"
//       ) {
//         alert("Successfully logged in");
//         e.target.username.value = "";
//         e.target.password.value = "";
//       } else {
//         alert("Wrong username or password combination");
//       }
//     };
  
//     render() {
        
//       return (
//         <div className="App">
//           <form className="form" onSubmit={this.handleSubmit}>
//             <div className="input-group">
//               <label htmlFor="username">Username:</label>
//               <input type="username" name="username" placeholder="nome@email.com.br" />
//             </div>
//             <div className="input-group">
//               <label htmlFor="password">Senha:</label>
//               <input type="password" name="password" />
//             </div>
//             <button className="primary">ENTRAR</button>
//           </form>
//         </div>
//       );
//     }
//   }
  
//   export default login;