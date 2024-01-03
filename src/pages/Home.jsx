import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { useFetch } from '../hooks/useFetch';
function Home() {

  const data = useFetch("https://dummyjson.com/products")
  // console.log(data)


  return (
    <>
      <Row  style={{marginTop:'130px'}}>
        {
          data && data.length > 0 ?
            data.map((item) => (
              <Col className='mb-5 d-flex justify-content-center'>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={item.thumbnail} style={{ height: '200px' }} />
                  <Card.Body>
                    <Card.Title className='text-center'>{item.title}</Card.Title>
                    <Card.Text>
                      <p>{item.description.slice(0, 50)}...
                      </p>
                      <p className='text-center text-light bg-dark rounded-5' >Price : $ {item.price}</p>
                    </Card.Text>
                    <div className='d-flex align-items-center justify-content-between'>
                      <Button variant="outline-danger"><i class="fa-solid fa-heart"></i></Button>
                      <Button variant="outline-success"><i class="fa-solid fa-cart-plus"></i></Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>)) : <p>No Item To Display</p>
        }
      </Row>
    </>
  )
}

export default Home
