import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
// import CollectionContainer from './collection-container';
// import CollectionsOverviewContainer from '../Components/collections-overview/collections-overview.container.jsx';
import { fetchCollectionsStart } from '../redux/shop/shop.actions';
import Spinner from '../Components/spinner/spinner.component';

const CollectionContainer = lazy(()=> import('./collection-container'));
const CollectionsOverviewContainer = lazy(()=>import('../Components/collections-overview/collections-overview.container.jsx'));

// class ShopPage extends React.Component {
//     componentDidMount() {
//         const { fetchCollectionsStart } = this.props;
//         fetchCollectionsStart();
//     }
export const ShopPage = ({fetchCollectionsStart, match}) =>{

    useEffect(()=>{
        fetchCollectionsStart()
    },[fetchCollectionsStart])
    // render() {
    //     const { match } = this.props;
        return (
            <div className="shop-page">
                <Suspense fallback={<Spinner />}>
                    <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
                    <Route path={`${match.path}/:collectionID`} component={CollectionContainer} />
                </Suspense>
            </div>
        )
    // }
};



const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);