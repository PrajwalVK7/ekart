import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <div className='bg-primary text-light d-flex align-itesm-center p-3'>
            <div className='container'>
                <div className=" footer row  w-100 mb-3">
                    <div className='col-lg-3 text-center mt-3' >
                        <h4 href="#home" style={{ color: "white", fontSize: "20px" }}>
                            <i class="fa-solid fa-cart-shopping me-3"></i>
                            EKart
                        </h4>
                        <h6 >
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus voluptatum saepe eveniet iusto. Ad sunt molestias atque, labore natus et nulla eaque quaerat hic porro, mollitia voluptate unde assumenda itaque.
                        </h6>
                    </div>
                    <div className='col-lg-3 text-center mt-3 '>
                        <h4 className=''>Links</h4>
                        <div className=''>
                            <Link style={{ textDecoration: "none" }} to={'/'}><h6 className='text-light' >Home</h6></Link>
                            <Link style={{ textDecoration: "none" }} to={'/wishlist'}><h6 className='text-light' >WishList</h6></Link>
                            <Link style={{ textDecoration: "none" }} to={'/cart'}><h6 className='text-light' >cart</h6></Link>
                        </div>
                    </div>
                    <div className='col-lg-3  text-center mt-3'>
                        <div>
                            <h4>Guides</h4>
                            <h6>React</h6>
                            <h6>Bootsrap</h6>
                            <h6>Guides</h6>
                        </div>
                    </div>
                    <div className='col-lg-3 text-center mt-3'>
                        <h4>Contact Us</h4>
                        <div className='d-flex'>
                            <input className='form-control' placeholder='Enter Your Email' type="text" />
                            <button className='btn btn-warning ms-2'>Subscribe</button>
                        </div>
                        <div className="icons d-flex justify-content-evenly pt-4">
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-linkedin"></i>
                            <i class="fa-brands fa-facebook"></i>
                        </div>
                    </div>
                </div>
                <div className='text-center mt-5'>
                    <p>Copyright &#169; 2023, E kart built with react and redux</p>
                </div>


            </div>
        </div>
    )
}

export default Footer
