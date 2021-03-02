import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionContainer from './collection-container';
import { fetchCollectionStartAsync } from '../redux/shop/shop.actions';
import CollectionsOverviewContainer from '../Components/collections-overview/collections-overview.container.jsx';

 
class ShopPage extends React.Component {
    componentDidMount() {
        const { fetchCollectionStartAsync } = this.props;
        fetchCollectionStartAsync();
    }

    render() {
        const { match } = this.props;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
                <Route path={`${match.path}/:collectionID`} component={CollectionContainer} />
            </div>
        )
    }
};



const mapDispatchToProps = dispatch => ({
    fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);