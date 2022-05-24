import { Link, Outlet } from 'react-router-dom';
import logo from './logo.svg';
const Home = () => {
    /**
    return (
        <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>zoo</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to="/hello">Hello?</Link>
      </header>
    </div>
    )
    */
   return (
    <>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/hello">Hello</Link>
        </li>
      </ul>
    </nav>

    <Outlet />
  </>
   )
};

export default Home;