import React from "react";
import '../Styles/styles.css';
import { Link } from 'react-router-dom';

class Portfolio extends React.Component {
    render() {
        return (
            <div>
                <div className="container">

                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark navi">

                        <a className="navbar-brand" href="#">
                            <img src="../Images/logo.png" alt="logo" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon icon1"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-4 ">
                                <li className="nav-item">
                                    <Link to="/" className="link active" aria-current="page">HOME</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className="link">ABOUT US</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/portfolio" className="link">PORTFOLIO</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contactus" className="link">CONTACT</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <img src="../Images/portfolio-header.jpg" alt="" className="img-fluid" height="500px" />

                <div className="section5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <h2 className="tit4">Our Projects</h2>
                                <p style={{ color: 'gray', textAlign: 'center', marginBottom: '40px' }}>Those templates was built with
                                    Onetel web template is free responsive template from website. You can use this layout for any of
                                    your website. Please spread a word about us. Thank you. This template uses CSS Flexbox, which is
                                    supported on IE 10+ and recent versions of all other major browsers. Check for detailed browser
                                    support information.

                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-sm-6" style={{marginRight: "-22.5px"}} >
                                <img src="../Images/portfolio-img1.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-md-4 col-sm-6" style={{marginRight: "-22.5px"}}>
                                <img src="../Images/portfolio-img2.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-md-4 col-sm-6" style={{marginRight: "-22.5px"}}>
                                <img src="../Images/portfolio-img3.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-md-3 col-sm-6" style={{marginRight: "-22.5px"}}>
                                <img src="../Images/portfolio-img4.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-md-3 col-sm-6" style={{marginRight: "-22.5px"}}>
                                <img src="../Images/portfolio-img5.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-md-3 col-sm-6" style={{marginRight: "-22.5px"}}>
                                <img src="../Images/portfolio-img6.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-md-3 col-sm-12" style={{marginRight: "-22.5px"}}>
                                <img src="../Images/portfolio-img7.jpg" className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <div className="section6">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5 col-sm-12">
                                    <img src="../Images/logo.png" alt="logo" />
                                    <p>Onetel is free Bootstrap v3.3.5 HTML5 layout from templatemo website. Feel free to use it for
                                        your website.</p>
                                    <p>
                                        <i className="bi bi-phone">+91 8103130039</i>
                                    </p>
                                    <p>
                                        <i className="bi bi-envelope-fill">info@company.com</i>
                                    </p>
                                    <p>
                                        <i className="bi bi-globe">www.company.com</i>
                                    </p>
                                </div>
                                <div className="col-md-3 col-sm-12">
                                    <h3 className="tit5">Useful Links</h3>
                                    <p>HTML5 Templates</p>
                                    <p>CSS3 Tricks</p>
                                    <p>Design Blog</p>
                                    <p>Animations</p>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    <h3 className="tit6">Newsletter</h3>
                                    <p>Those templates was built with awesome such Twitter Bootstrap v3 and it features cool HTML5
                                        pages
                                        with color options.</p>
                                    <div className="formgroup">
                                        <form>
                                            <input name="email" type="email" placeholder="Enter your email" required />
                                            <button type="submit" name="submit">Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-6">
                                <p>Copyright © Design by:sitefoxes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Portfolio;