import React from 'react';
import { Card, Col, Container, Row } from "react-bootstrap";
import products from '../products'
import Product from '../components/Product';

const HomeScreen = () => {
  return(
  <>
  <h1>Our Latest Products</h1>
  <Row>
  { products.map((product,i)=>{
      return(
    <Col key={i} sm={12} md={6} lg={3}>
     <Product product={product}  />
      
      </Col>
      )
})

}

  </Row>
  </>
  )
};

export default HomeScreen;
