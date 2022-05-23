import logo from './logo1.png';
import './App.css'

function App(){
  return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="imgcont" alt="logo" />
        <p>Edit<code>src/App.js</code>and save to reload</p>
        <a 
          className="linkcont"
          href="https://facebook.org"
          target="_blank"
          rel="noopener  noreferrer"
        >
        Learn Facebook  
        </a>  
      </header>
    </div>
  );
}

export default App