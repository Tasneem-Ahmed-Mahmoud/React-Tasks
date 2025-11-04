
import React from 'react'
import avatar from '../../assets/images/avatar.svg'

const Home = () => {
    return (
        <>
            <div className="container-fluid home">
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-lg-12 text-center">
                        <img src={avatar} className="img-fluid rounded-circle avatar" alt="avatar" />
                        <h1>start Framework</h1>
                      <div className="d-flex justify-content-center align-items-center gap-2 mb-3">
                        <div className="line"></div>
                          <i className='fas fa-star'></i>
                          <div className="line"></div>
                      </div>
                        <p>Graphic Artist - Web Designer - Illustrator - Photographer</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home