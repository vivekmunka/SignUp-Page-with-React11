import React from 'react';
import logo from './logo.svg';
import './App.css';
const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5
        }}
    />
);
function App() {
  return (
    <div className="App">
    <img src={logo} alt="Logo" />
      <form>
               <h3 class="text-center">SIGN UP</h3>
               <h1 class="text-center"> Create your account</h1>
               <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
               <div class="col-sm-4">
               <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans" />



              <div class="google-btn">
                <div class="google-icon-wrapper">
                  <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                </div>
                <p class="btn-text"><b>Sign up with google</b></p>
              </div>

               </div>

               <div className="form-group">
                   <input type="text" className="form-control" placeholder="First name" />
               </div>

               <div className="form-group">
                   <input type="text" className="form-control" placeholder="Last name" />
               </div>
               <div className="form-group">
                   <input type="text" className="form-control" placeholder="Email Address" />
               </div>

               <div className="form-group">
                   <input type="password" className="form-control" placeholder="Password" />
               </div>
               <p> By clicking Sign Up, you agree to our <a href="#">Terms of use</a> and our <a href="#">Privacy Policy</a> </p>

               <button type="submit" className="btn btn-primary btn-block">SIGN UP</button>
           </form>
    </div>
  );
}

export default App;
