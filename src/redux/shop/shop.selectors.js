import { createSelector } from 'reselect';

const selectShopData = state => state.ShopData;

export const SelectShopCollections = createSelector(
    [selectShopData],
    ShopData => ShopData.collections
)
