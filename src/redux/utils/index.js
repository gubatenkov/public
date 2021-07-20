const addItemToCart = (cartItems, itemToAdd) => {
  const newItem = cartItems.find((item) => item.id === itemToAdd.id);

  if (newItem)
    return cartItems.map((item) =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

const updatedCartItems = (cartItems, payload) => {
  const newCartItems = cartItems
    .map((item) => {
      if (item.id === payload.id) {
        if (payload.type === 'inc') {
          return { ...item, quantity: item.quantity + 1 };
        }
        if (payload.type === 'dec') {
          return { ...item, quantity: item.quantity - 1 };
        }
      }
      return item;
    })
    .filter((item) => item.quantity !== 0);
  return newCartItems;
};

export { addItemToCart, updatedCartItems };
