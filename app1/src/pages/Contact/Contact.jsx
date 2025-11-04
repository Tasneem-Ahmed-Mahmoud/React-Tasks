import React from 'react'

export default function Contact() {
  return (
    <>
      <div className="contact mb-5">
        <div className="container">
          <div className="row g-3">

            <div className="col-lg-12 text-center">
              <h1 className="capitalize"> contact component</h1>
              <div className="d-flex justify-content-center align-items-center gap-2 mb-3">
                <div className="line"></div>
                <i className='fas fa-star'></i>
                <div className="line"></div>
              </div>
            </div>

            {/* form */}

            <form action="" className="w-50 mx-auto">
              <div className="form-group mb-5">
                <input type="text" name="" id=""  className='form-control' placeholder="name" />
              </div>
              <div className="form-group mb-5">
                <input type="email" name="" id=""  className='form-control' placeholder="email" />
              </div>
              <div className="form-group mb-5">
                <input type="text" name="" id=""  className='form-control' placeholder="subject" />
              </div>
             
              <button type="submit" className="btn ">send message</button>

            </form>
          </div>
        </div>
      </div>

    </>
  )
}
