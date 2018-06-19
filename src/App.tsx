import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Disabled</a>
            </li>
            
          </ul>
        
        </div>
      </nav>

      <main role="main" className="container">
        <h1>Todo List</h1>
      </main>
    </React.Fragment>
    );
  }
}

export default App;
