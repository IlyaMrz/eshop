import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionPage from './collection';
import { updateCollections } from '../redux/shop/shop.actions';
import CollectionsOverview from '../Components/collections-overview/collections-overview.jsx';
import { firestore, convertCollectionsSnapshotToMap } from '../firebase/firebase.utils';
import WithSpinner from '../Components/with-spinner/with-spinner';


const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    state = {
        loading: true
    }

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollectionsSS } = this.props;
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(async snapshot => {
            const collectionMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollectionsSS(collectionMap);
            this.setState({ loading: false });
        })
    }

    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={(props)=> <CollectionsOverviewWithSpinner isLoading={loading} {...props}/>} />
                <Route path={`${match.path}/:collectionID`} render={(props)=> <CollectionPageWithSpinner isLoading={loading} {...props}/>} />
            </div>
        )
    }
};

const mapDispatchToProps = dispatch => ({
    updateCollectionsSS: collectionMap => dispatch(updateCollections(collectionMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);