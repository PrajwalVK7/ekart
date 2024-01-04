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

  return (
    <>
      <Row style={{ marginTop: '150px' }} className='container'>
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
                    } alt="" style={{width:'10rem'}} /></td>
                    <td>{item.price}</td>
                    <td><Button variant="outline-danger" onClick={()=>dispatch(removeFromCart(item.id))} ><i class="fa-solid fa-trash"></i></Button></td>
                  </tr>
                ))
                :
                <p className=' text-danger'>No item to display</p>
              }
            </tbody>
          </table>

        </Col>
      </Row>
    </>
  )
}

export default Cart
