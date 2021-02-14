import { createSelector } from 'reselect';

const selectShopData = state => state.ShopData;

export const SelectShopCollections = createSelector(
    [selectShopData],
    ShopData => ShopData.collections
)

export const selectCollectionsForPreview = createSelector(
    [SelectShopCollections],
    collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = collectionUrlParam => createSelector(
    [SelectShopCollections],
    collections => collections[collectionUrlParam]
)