import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../components/ProductCard';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { withRouter } from 'react-router-dom'

/**
 * renderProductCardItems - render each product card and return array of elements.
 * @param {array} list - Products.
 */
const renderProductCardItems = (list) => list && list.map((productInfo, index) => <ProductCard key={index} productInfo={productInfo} isWishList />); 


/**
 * WishList component
 * @param {object} props Component props
 * @param {object} props.wishList  - information about the product.
 * @param {object} props.history  - context props to handle navigation.
 */
const WishList = ({wishList, history}) =>   {    
    return (
        <div>
         <div className="col-12">   
            <RaisedButton label="Back to Products" primary={true} className="wishList-button" onClick={() => history.push('/')} />
          </div>  
         <div className="wishList-container">         
          {wishList && <div className="col-8 card-grid">{renderProductCardItems(wishList)}</div>}
         </div> 
         </div>      
    )
}

// PropTypes
WishList.propTypes = {
    wishList: PropTypes.array
};

// Inject State
function mapStateToProps(state){
    return {
        wishList: state.viewReducer.wishList || []
     };
   }

// Connect State and Props to Component.
export default withRouter(connect(mapStateToProps)(WishList));