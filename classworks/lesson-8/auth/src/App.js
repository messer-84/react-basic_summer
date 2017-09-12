import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import './Header.css';
import './Main.css';
import './Signin.css';
import './Signup.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="Header">
          <nav>
            <ul className="header-list">
              <li className="header-item">
                <a href="#">Logo</a>
              </li>
              <li className="header-item">
                <a href="#">Secret</a>
              </li>
              <li className="header-item">
                <a href="#">Sign in</a>
              </li>
              <li className="header-item">
                <a href="#">Sign up</a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="Main">
         {/*} <section>BODY</section>
          <section className="Signin">
            <form>
              <div className="fieldset">
                <input type="text" name="login" placeholder="Enter name"/>
              </div>
              <div className="fieldset">
                <input type="password" name="login" placeholder="Password"/>
              </div>
              <button>Submit</button>
            </form>            
          </section> */}
          
          <section className="Signup">
            <form>
              <div className="fieldset">
                <label>Name:</label>
                <input type="text" name="login" />
              </div>
              <div className="fieldset">
                <label>Email:</label>
                <input type="text" name="login" />
              </div>
              <div className="fieldset">
                <label>password:</label>
                <input type="password" name="login" />
              </div>
              <div className="fieldset">
                <label>password confirm:</label>
                <input type="password" name="login" />
              </div>
              <button>Submit</button>
            </form>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
