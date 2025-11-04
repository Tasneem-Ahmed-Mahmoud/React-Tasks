
import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="footer">

                <div className=" footer__top">
                    <div className="container">
                        <div className="row justify-content-between">

                            <div className="col-lg-3 col-md-6 ">
                                <h3>LOCATION</h3>
                                <p>2215 John Daniel Drive</p>
                                <p>Clark, MO 65243</p>
                            </div>
                            <div className="col-lg-3 col-md-6 ">
                                <h3>AROUND THE WEB</h3>
                                <ul className="list-unstyled social-icons d-flex  gap-3">
                                    <li><a href="#"> <i className="fa-brands fa-facebook"></i></a></li>
                                    <li><a href="#"> <i className="fa-brands fa-twitter"></i></a></li>
                                    <li><a href="#"> <i className="fa-brands fa-linkedin"></i></a></li>
                                    <li><a href="#"> <i className="fa-brands fa-instagram"></i></a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 ">
                                <h3>ABOUT FREELANCER</h3>
                                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright text-center py-3">
                    <p>Copyright © Your Website 2021</p>
                </div>
            </footer>
        </>
    )
}


export default Footer