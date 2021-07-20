import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  );

export default selectShopCollections;
