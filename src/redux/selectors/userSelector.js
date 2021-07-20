import { createSelector } from 'reselect';

const user = (state) => state.user;
const cart = (state) => state.cart;

const selectDefaultImg = createSelector([user], (user) => user.defaultImg);

const selectCartVisible = createSelector([cart], (cart) => cart.visible);

const selectCurrentUser = createSelector([user], (user) => user.currentUser);

export { selectCurrentUser, selectDefaultImg, selectCartVisible };
