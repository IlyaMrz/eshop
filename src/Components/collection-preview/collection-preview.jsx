import React from 'react';
import { withRouter } from 'react-router-dom';
import CollectionItem from '../collection-item/collection-item';
import { CollectionPreviewContainer, PreviewContainer, TitleContainer } from './collection-preview.styles';

export const CollectionPreview = ({title, items, history, match, routeName}) =>{
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakPoint = 730;
    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
     
         
        return () => window.removeEventListener("resize", handleWindowResize);
       },[]);
    let itemsInRow
return (
    <CollectionPreviewContainer>
        <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
            {title.toUpperCase()+" ➥"}
        </TitleContainer>
        <PreviewContainer>
            { (width > breakPoint ? itemsInRow = 4 : itemsInRow = 2) &&
            items
            .filter((item, idx) => idx < itemsInRow)
            .map((item) => (
                <CollectionItem key={item.id} item={item}/>
             ))}
        </PreviewContainer>
    </CollectionPreviewContainer>
)}

export default withRouter(CollectionPreview);