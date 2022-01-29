import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';


const Product = ({product}) => {
  return (
      
      <Card className='p-3 my-3 rounded '>
          <Link to={`/products/${product._id}`}>
              <Card.Img src={product.image} variant='top'/>
          </Link>
          <Card.Body>
          <Link to={`/products/${product._id}`}>

          <Card.Title as="div"><strong>{product.name}</strong></Card.Title>
          </Link>
          <Card.Text as="div">
        
         <Rating value={product.rating} text={`${product.numReviews} Reviews`}  />
        
          </Card.Text>
          <Card.Text as="h3">
                 $ {product.price}
          </Card.Text>
          </Card.Body>
      </Card>
  );
};
export default Product;