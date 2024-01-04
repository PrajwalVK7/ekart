import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { removeFromCart } from '../redux/slices/cartSlice';
function Cart() {
  const cartArray = useSelector((state) => state.cartReducer)
  console.log("cart array");
  console.log(cartArray);
  const dispatch = useDispatch()
  let totalPrice = 0;
  if (cartArray.length > 0) {
    for (let i = 0; i < cartArray.length; i++) {
      totalPrice += cartArray[i].price
    }
  }

    const handleCheckout = () => {
      alert("Your order is successfully placed")
    }

 

  return (
    <>
      <Row style={{ marginTop: '150px' }} className='container mb-5'>
        <h1 className='text-center'>Cart</h1>
        <Link to='/' className='m-3' style={{ textDecoration: 'none', color: 'blue' }}><i class="fa-solid fa-arrow-left m-3"></i>Back to home</Link>
        <Col lg={6} md={6}>
          <table className='table shadow border'>
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Image</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartArray && cartArray.length > 0 ?
                cartArray.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td><img src={item.thumbnail
                    } alt="" style={{ width: '10rem' }} /></td>
                    <td>{item.price}</td>
                    <td><Button variant="outline-danger" onClick={() => dispatch(removeFromCart(item.id))} ><i class="fa-solid fa-trash"></i></Button></td>
                  </tr>
                ))
                :
                <p className=' text-danger'>No item to display</p>
              }
            </tbody>
          </table>

        </Col>
        <Col lg={6} md={6} className='d-flex justify-content-evenly align-items-center' >
          <Col lg={10} md={10} className='d-flex justify-content-center align-items-center flex-column'>
            <div className='border shadow p-5'>
              <h3 className='text-primary'>Cart Summary</h3>
              <h6>Total no of Products: <span className='fw-bolder fs-4 text-warning'>{cartArray.length}</span></h6>
              <h6>Total no of Price: <span className='fw-bolder fs-4 text-warning'>{totalPrice}</span></h6>
              {cartArray.length>0&&
                <button className='btn btn-success rounded w-100 ' onClick={handleCheckout}>Checkout</button>}
            </div>
          </Col>

        </Col>
      </Row>
    </>
  )
}

export default Cart
