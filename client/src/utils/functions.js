import { Grid } from '@mui/material';
// import { useEffect, useState } from 'react';

export const isEmailValid = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(re)) {
    return true;
  } else {
    return false;
  }
};

export const renderCartItems = (items, Component) => {
  if (Array.isArray(items) && items.length > 0) {
    return items.map((i) => <Component key={i._id} {...i} />);
  } else {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <div>Тут поки що нiчого нема!</div>
        <img
          width='100%'
          style={{ maxWidth: '700px' }}
          src='./images/working.jpg'
          alt='empty placeholder'
        />
      </div>
    );
  }
};

export const renderItems = (items, Component) => {
  if (Array.isArray(items) && items.length > 0) {
    return items.map((i) => (
      <Grid key={i._id} item md={4} xs={12} sm={6}>
        <Component {...i} />
      </Grid>
    ));
  } else {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <div>Тут поки що нiчого нема!</div>
        <img
          width='100%'
          style={{ maxWidth: '700px' }}
          src='./images/working.jpg'
          alt='empty placeholder'
        />
      </div>
    );
  }
};

// export const useFetch = (id) => {
//   const [data, setData] = useState([]);
//   const [isLoading, setLoading] = useState(true);
//   const [errors, setErrors] = useState([]);

//   const fetchAllProducts = async () => {
//     productService
//       .getProducts()
//       .then((data) => {
//         if (data instanceof Error) {
//           setErrors((errors) =>
//             errors.concat({
//               id: Date.now(),
//               error: `${data}`,
//             })
//           );
//         } else {
//           setData(data);
//         }
//         setLoading(false);
//       })
//       .catch((err) => {
//         setErrors((errors) =>
//           errors.concat({
//             id: Date.now(),
//             error: `${err}`,
//           })
//         );
//         setLoading(false);
//       });
//   };

//   const fetchSingleProduct = (id) => {
//     productService
//       .getOneProduct(id)
//       .then((data) => {
//         if (data instanceof Error) {
//           setErrors((errors) =>
//             errors.concat({
//               id: Date.now(),
//               error: `${data}`,
//             })
//           );
//         } else {
//           setData(data);
//         }
//         setLoading(false);
//       })
//       .catch((err) => {
//         setErrors((errors) =>
//           errors.concat({
//             id: Date.now(),
//             error: `${err}`,
//           })
//         );
//         setLoading(false);
//       });
//   };

//   useEffect(() => {
//     if (!id) {
//       fetchAllProducts();
//     } else {
//       fetchSingleProduct(id);
//     }
//     // eslint-disable-next-line
//   }, []);

//   return [data, isLoading, errors];
// };
