import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
function WishList() {

  const wishlistarray = useSelector((state) => state.wishlistReducer);
  console.log("wishlist array")
  console.log(wishlistarray)

  return (
    <>
    
      <Row  style={{marginTop:'150px'}}>
      <h1 className='text-center'>Wishlist</h1>
      <Link to='/' className='m-3' style={{textDecoration:'none',color:'blue'}}><i class="fa-solid fa-arrow-left m-3"></i>Back to home</Link>
        {
          wishlistarray && wishlistarray.length > 0 ?
            wishlistarray.map((item) => (
              <Col lg={3} md={6} className='mb-5 d-flex justify-content-center'>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={item.thumbnail} style={{ height: '200px' }} />
                  <Card.Body>
                    <Card.Title className='text-center'>{item.title}</Card.Title>
                    <Card.Text>
                      <p>{item.description.slice(0, 50)}...
                      </p>
                      <p className='text-center text-light bg-dark rounded-5' >Price : $ {item.price}</p>
                    </Card.Text>

                  </Card.Body>
                </Card>
              </Col>)) : <p>No Item To Display</p>
        }
      </Row>
    </>
  )
}

export default WishList
