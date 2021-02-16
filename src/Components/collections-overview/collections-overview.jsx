import React from 'react';

import { CollectionsOverviewContainer } from './collection-overview.styles';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../collection-preview/collection-preview';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';


const CollectionsOverview = ({ collections }) => (
    <CollectionsOverviewContainer>
        {
        collections.map(({id, ...otherCollectionProps})=>(
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))
        }
    </CollectionsOverviewContainer>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);