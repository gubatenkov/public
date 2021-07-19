const addItemToCart = (cartItems, itemToAdd) => {
  const newItem = cartItems.find((item) => item.id === itemToAdd.id);

  if (newItem)
    return cartItems.map((item) =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export { addItemToCart };
