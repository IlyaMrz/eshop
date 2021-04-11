import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionContainer from './collection-container';
import { fetchCollectionsStart } from '../redux/shop/shop.actions';
import CollectionsOverviewContainer from '../Components/collections-overview/collections-overview.container.jsx';

 
// class ShopPage extends React.Component {
//     componentDidMount() {
//         const { fetchCollectionsStart } = this.props;
//         fetchCollectionsStart();
//     }
const ShopPage = ({fetchCollectionsStart, match}) =>{

    useEffect(()=>{
        fetchCollectionsStart()
    },[fetchCollectionsStart])
    // render() {
    //     const { match } = this.props;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
                <Route path={`${match.path}/:collectionID`} component={CollectionContainer} />
            </div>
        )
    // }
};



const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);