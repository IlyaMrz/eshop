import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner';
import CollectionPreview from './collections-preview';
import { compose } from 'redux';

const mapStateToProps = createStructuredSelector({
    isCollectionsLoaded: selectIsCollectionsLoaded
});

const CollectionPreviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPreview);

export default CollectionPreviewContainer;