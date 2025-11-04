
import React, { useState } from 'react'
export default function Portfolio() {


    const [selectedImage, setSelectedImage] = useState(null)

    const handleImageClick = (imgSrc) => {
        setSelectedImage(imgSrc)
    }

    const handleCloseModal = () => {
        setSelectedImage(null)
    }
    return (
        <>

            <div className="portfolio mb-5">
                <div className="container">
                    <div className="row g-3">
                        <div className="col-lg-12 text-center">
                            <h1>portfolio component</h1>
                            <div className="d-flex justify-content-center align-items-center gap-2 mb-3">
                                <div className="line"></div>
                                <i className='fas fa-star'></i>
                                <div className="line"></div>
                            </div>
                        </div>
                        {/* cards */}

                        <div className="col-md-4 ">

                            <div className="position-relative  portfolio-card " onClick={() => handleImageClick("https://routeegy.github.io/startFramework/assets/images/poert1.png")}>
                                <img src="https://routeegy.github.io/startFramework/assets/images/poert1.png" className="w-100 rounded" alt="portfolio" />

                                <div className="layer rounded position-absolute w-100 h-100 top-0 left-0  justify-content-center align-items-center d-flex">
                                    <i className='fas fa-plus fs-1 text-white'></i>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div className="position-relative  portfolio-card " onClick={() => handleImageClick("https://routeegy.github.io/startFramework/assets/images/port2.png")}>
                                <img src="https://routeegy.github.io/startFramework/assets/images/port2.png" className="w-100 rounded" alt="portfolio" />
                                <div className="layer rounded position-absolute w-100 h-100 top-0 left-0  justify-content-center align-items-center d-flex">
                                    <i className='fas fa-plus fs-1 text-white'></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 ">

                            <div className="position-relative  portfolio-card " onClick={() => handleImageClick("https://routeegy.github.io/startFramework/assets/images/poert1.png")}>
                                <img src="https://routeegy.github.io/startFramework/assets/images/poert1.png" className="w-100 rounded" alt="portfolio" />

                                <div className="layer rounded position-absolute w-100 h-100 top-0 left-0  justify-content-center align-items-center d-flex">
                                    <i className='fas fa-plus fs-1 text-white'></i>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div className="position-relative  portfolio-card " onClick={() => handleImageClick("https://routeegy.github.io/startFramework/assets/images/port2.png")}>
                                <img src="https://routeegy.github.io/startFramework/assets/images/port2.png" className="w-100 rounded" alt="portfolio" />
                                <div className="layer rounded position-absolute w-100 h-100 top-0 left-0  justify-content-center align-items-center d-flex">
                                    <i className='fas fa-plus fs-1 text-white'></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 ">

                            <div className="position-relative  portfolio-card " onClick={() => handleImageClick("https://routeegy.github.io/startFramework/assets/images/poert1.png")}>
                                <img src="https://routeegy.github.io/startFramework/assets/images/poert1.png" className="w-100 rounded" alt="portfolio" />

                                <div className="layer rounded position-absolute w-100 h-100 top-0 left-0  justify-content-center align-items-center d-flex">
                                    <i className='fas fa-plus fs-1 text-white'></i>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div className="position-relative  portfolio-card " onClick={() => handleImageClick("https://routeegy.github.io/startFramework/assets/images/port2.png")}>
                                <img src="https://routeegy.github.io/startFramework/assets/images/port2.png" className="w-100 rounded" alt="portfolio" />
                                <div className="layer rounded position-absolute w-100 h-100 top-0 left-0  justify-content-center align-items-center d-flex">
                                    <i className='fas fa-plus fs-1 text-white'></i>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div >

            {/* Modal Layer */}
            <div
                className={`pro-layer d-flex justify-content-center align-items-center ${selectedImage ? 'visible' : ''}`}
                onClick={handleCloseModal}
            >
                {selectedImage && (
                    <img
                        src={selectedImage}
                        className="w-50 h-50 rounded"
                        alt="portfolio enlarged"
                        // onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on image
                    />
                )}
            </div>

        </>
    )
}
