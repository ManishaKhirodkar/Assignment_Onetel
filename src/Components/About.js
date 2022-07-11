import React from "react";
import '../Styles/styles.css';
import { Link } from 'react-router-dom';

class About extends React.Component {
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
                <img src="../Images/about-header.jpg" alt="" className="img-fluid" height="500px" />
                <div className="rectangle">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2>Meet The Crew!</h2>
                                <p>Onetel web template is free responsive template from website. You can use this layout for any of
                                    your
                                    website. Please spread a word about us. Thank you. This template uses CSS Flexbox, which is
                                    supported on IE 10t versions of all other major browsers. Check for detailed browser
                                    support information.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col=sm-12">
                                <div className="tem">
                                    <img src="../Images/team1.jpg" className="imag" alt="" />
                                </div>

                                <h3>LINDA</h3>
                                <h4>Creative Director</h4>
                                <p>A Creative Director range of experience can be broad and encompass a number of disciplines;
                                    visual design; , art direction, advertising account director, film/video director</p>
                            </div>
                            <div className="col-lg-4 col-md-4 col=sm-12">
                                <div className="tem">
                                    <img src="../Images/team2.jpg" className="imag" alt="" />
                                </div>
                                <h3>JULIA</h3>
                                <h4>UX Designer</h4>
                                <p>A Creative Designer range of experience can be broad and encompass a number of disciplines;
                                    visual design; art direction, advertising account director, film/video director</p>
                            </div>
                            <div className="col-lg-4 col-md-4 col=sm-12">
                                <div className="tem">
                                    <img src="../Images//team3.jpg" className="imag" alt="" />
                                </div>
                                <h3>MARY</h3>
                                <h4>Fronend Developer</h4>
                                <p>A Creative Developer range of experience can be broad and encompass a number of disciplines;
                                    art direction, advertising account director, film/video director</p>
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

export default About;