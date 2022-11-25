import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './components/aboutme';
import Project from './components/projects';
import Maintenance from './components/maintenance';
import PageNotFound from './components/error/404';

function App() {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-12 col-md-12 col-lg-12 bg-light'>
            <div className="main-header navbar navbar-expand-lg navbar-light navbar-black">
              <button className="navbar-toggler navbar-black" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div id='navbarCollapse' className='collapse navbar-collapse'>
                <ul className="navbar-nav">
                  <Link to='/'>
                    <li className="nav-item">
                      <div className="nav-link">About me</div>
                    </li>
                  </Link>
                  <Link to='/project'>
                    <li className="nav-item">
                      <div className="nav-link">Project</div>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End of Navbar */}

      <div className='container'>
        <div className='row'>
          <Routes>
            <Route path='/' element={<AboutMe />}></Route>
            <Route path='/project' element={<Maintenance />}></Route>

            {/* Page not found */}
            <Route path='*' element={<PageNotFound />}></Route>
          </Routes>
        </div>
      </div>

      <div className='container-fluid mt-5'>
        <div className='row'>
          <div className='col-sm-12 col-md-12 col-lg-12 text-center bg-light'>
            <footer className="page-footer font-small">
              <div className="footer-copyright py-3">
                <h5>Contact me</h5>
                <div>
                  <i className="fab fa-instagram"></i>
                  &nbsp;@bernardusbennykpokemon
                </div>
                <div>
                  <i className="far fa-envelope"></i>
                  &nbsp;bernardus.707@gmail.com
                </div>
                <div className='mt-5'>
                  ©2022 <br /> 
                  @Powered by React.js
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
