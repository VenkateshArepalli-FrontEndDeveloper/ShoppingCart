import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

/**
 * ProductCard component
 * @param {object} props Component props
 * @param {object} props.productInfo  - information about the product.
 * @param {func} props.onProductClick - To handle add/remove product from wishlist.
 * @param {bool} props.isWishList  - show/hide the wishlist icon.
 * @param {bool} props.isExistingProduct  - To select the wishlist item.
 */
const ProductCard = ({productInfo, onProductClick, isWishList, isExistingProduct}) => {    
    return (
        <div className="card-wrap">
          <div className="card">         
          <div className="product-container">
            <img src={productInfo.image}  className="product" />
            {!isWishList  && (<div className="frameTitle">               
                <Checkbox
                    checkedIcon={<ActionFavorite />}
                    uncheckedIcon={<ActionFavoriteBorder />}
                    onCheck={(event, isInputChecked) => onProductClick(event, isInputChecked,  productInfo.productId)}
                    checked={isExistingProduct}
                 />      
                </div>)}           
            </div>
            <div className="product-content">           
                <div className="title">{productInfo.suggestion}</div>
                <div className="sub-title">{productInfo.subTitle}</div>
            </div>
            <div className="product-info-price-rating">
                <div className="price alignleft">
                    <span>€</span>
                    <span>{Number(productInfo.standardPrice).toLocaleString('de-DE')}</span>	
                </div>
                <div className="acidjs-rating-stars acidjs-rating-disabled">
                    <form>
                        <input disabled="disabled" type="radio" name="group-3" checked={productInfo.rating === "5"} id="group-3-0" value="5" /><label htmlFor="group-3-0"></label>
                        <input disabled="disabled" type="radio" name="group-3" checked={productInfo.rating === "4"} id="group-3-1" value="4" /><label htmlFor="group-3-1"></label>
                        <input disabled="disabled" type="radio" name="group-3" checked={productInfo.rating === "3"} id="group-3-2" value="3" /><label htmlFor="group-3-2"></label>
                        <input disabled="disabled" type="radio" name="group-3" checked={productInfo.rating === "2"} id="group-3-3" value="2" /><label htmlFor="group-3-3"></label>
                        <input disabled="disabled" type="radio" name="group-3" checked={productInfo.rating === "1"} id="group-3-4"  value="1" /><label htmlFor="group-3-4"></label>
                    </form>
                 </div>
            </div>     
         </div>         
        </div>)
}

// Proptypes
ProductCard.propTypes = {
    propertyInfo: PropTypes.object,
    onProductClick: PropTypes.func,
    isWishList: PropTypes.bool,
    isExistingProduct: PropTypes.bool   
};

export default ProductCard;