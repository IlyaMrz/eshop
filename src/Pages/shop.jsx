import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionPage from './collection';
import { updateCollections } from '../redux/shop/shop.actions';
import CollectionsOverview from '../Components/collections-overview/collections-overview.jsx';
import { firestore, convertCollectionsSnapshotToMap } from '../firebase/firebase.utils';

class ShopPage extends React.Component {
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollectionsSS } = this.props;
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(async snapshot => {
            const collectionMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollectionsSS(collectionMap)
        })
    }

    render() {
        const { match } = this.props;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionsOverview} />
                <Route path={`${match.path}/:collectionID`} component={CollectionPage} />
            </div>
        )
    }
};

const mapDispatchToProps = dispatch => ({
    updateCollectionsSS: collectionMap => dispatch(updateCollections(collectionMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);