import React from 'react';
import { Route } from 'react-router-dom';
import CollectionPage from './collection';
import CollectionsOverview from '../Components/collections-overview/collections-overview.jsx';

const ShopPage = ({ match }) => (
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionID`} component={CollectionPage} />
    </div>
);


export default ShopPage;