import React from 'react';
import style from './ProductItem.module.css';

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

const ProductItem = ({ _id, name, image, price, numReviews, rating }) => {
  return (
    <div>
      <Card>
        <div style={{ overflow: 'hidden' }}>
          <Link to={`/product/${_id}`}>
            <CardMedia
              className={style.productImg}
              component='img'
              height='250'
              image={image}
              alt={name}
            />
          </Link>
        </div>

        <CardContent>
          <Link className={style.cardLink} to={`/product/${_id}`}>
            <Typography
              className={style.cardTitle}
              gutterBottom
              variant='h5'
              component='div'
            >
              {name}
            </Typography>
          </Link>
          <Typography
            variant='body2'
            color='text.secondary'
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Rating
              name='half-rating-read'
              style={{ marginRight: '15px' }}
              defaultValue={rating}
              precision={rating % 1 === 0 ? 1 : 0.5}
              readOnly
            />
            за {numReviews} вiдгуками
          </Typography>
          <Typography
            variant='h6'
            color='text.secondary'
            style={{ textAlign: 'center', padding: '1rem' }}
          >
            {price} &#8372;
          </Typography>
        </CardContent>

        <CardActions>
          {/* <Button size='small'>{price}</Button> */}
          {/* <Button size='small'>{numReviews}</Button> */}
        </CardActions>
      </Card>
    </div>
  );
};

export default ProductItem;
