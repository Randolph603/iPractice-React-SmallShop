import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './Home/HomePage';
import ProductDetails from './Home/ProductDetails';
import Rest from './Home/Rest';
import { useScript } from './hooks/useScript';

export default function App() {
  useScript('assets/js/vendor.js');
  useScript('assets/js/main.js');
  return (
    <>
      {/* Preloader Start */}
      <div className="ft-preloader active">
        <div className="ft-preloader-inner h-100 d-flex align-items-center justify-content-center">
          <div className="ft-child ft-bounce1"></div>
          <div className="ft-child ft-bounce2"></div>
          <div className="ft-child ft-bounce3"></div>
        </div>
      </div>
      {/* Preloader End */}

      {/* Main Wrapper Start */}
      <div className="wrapper">
        {/* Header Start */}
        <header className="header">
          <div className="header__inner fixed-header">
            <div className="header__main">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <div className="header__main-inner">
                      <div className="header__main-left">
                        <div className="logo">
                          <a href="/" className="logo--normal">
                            <img src="assets/img/logo/logo.png" alt="Logo" />
                          </a>
                        </div>
                      </div>
                      <div className="header__main-center">
                        <nav className="main-navigation text-center d-none d-lg-block">
                          <ul className="mainmenu">
                            <li className="mainmenu__item">
                              <a href="/" className="mainmenu__link">
                                <span className="mm-text">Home</span>
                              </a>
                            </li>
                            <li className="mainmenu__item">
                              <a href="/" className="mainmenu__link">
                                <span className="mm-text">All Products</span>
                              </a>
                            </li>
                            <li className="mainmenu__item">
                              <a href="/" className="mainmenu__link">
                                <span className="mm-text">Contact Us</span>
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                      <div className="header__main-right">
                        <div className="header-toolbar-wrap">
                          <div className="header-toolbar">
                            <div className="header-toolbar__item header-toolbar--minicart-btn">
                              <a href="#miniCart" className="header-toolbar__btn toolbar-btn">
                                <i className="la la-shopping-cart"></i>
                                <span>0</span>
                              </a>
                            </div>
                            <div className="header-toolbar__item d-block d-lg-none">
                              <a href="#offcanvasMenu" className="header-toolbar__btn toolbar-btn menu-btn">
                                <div className="hamburger-icon">
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* Header End */}

        <Router>
          <Switch>
            <Redirect from='/' to={'/home'} exact={true} />
            <Route exact path='/home' component={HomePage} />
            <Route exact path='/product' component={ProductDetails} />
            <Route component={HomePage} />
          </Switch>
        </Router>

        {/* Footer Start */}
        <footer className="footer bg-color" data-bg-color="#f4f8fa">
          <div className="footer-top">
            <div className="container-fluid">
              <div className="row border-bottom ptb--40">
                <div className="col-lg-10 col-sm-9 offset-md-1 offset-lg-0 mb-md--45">
                  <div className="footer-widget">
                    <div className="textwidget">
                      <figure className="footer-logo mb--30">
                        <img src="assets/img/logo/logo.png" alt="Logo" />
                      </figure>
                      <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms. </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4">
                  <div className="footer-widget">
                    <h3 className="widget-title mb--25 mb-sm--20">Social Network</h3>
                    <div className="footer-widget">
                      <ul className="footer-menu">
                        <li><a href="/#">Facebook</a></li>
                        <li><a href="/#">Linkedin</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="container-fluid">
              <div className="row border-top ptb--20">
                <div className="col-12 text-center">
                  <p className="copyright-text">Copyright &copy; 2019.Company name All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* Footer End */}

        <Rest></Rest>

        {/* Global Overlay Start */}
        <div className="global-overlay"></div>
        {/* Global Overlay End */}

        {/* Global Overlay Start */}
        <a href="/#" className="scroll-to-top"><i className="la la-angle-double-up"></i></a>
        {/* Global Overlay End */}
      </div>
      {/* Main Wrapper End */}

      <script src="assets/js/vendor.js"></script>
      <script src="assets/js/main.js"></script>
    </>
  );
}
