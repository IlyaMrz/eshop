import { createSelector } from 'reselect';


const selectShopData = state => state.ShopData;

export const SelectShopCollections = createSelector(
    [selectShopData],
    ShopData => ShopData.collections
);

export const selectCollectionsForPreview = createSelector(
    [SelectShopCollections],
    collections => collections ? 
        Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionUrlParam => createSelector(
    [SelectShopCollections],
    collections => (collections ? collections[collectionUrlParam] : null)
);

export const SelectIsCollectionFetching = createSelector(
    [selectShopData],
    ShopData => ShopData.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
    [selectShopData],
    ShopData => !!ShopData.collections
);
