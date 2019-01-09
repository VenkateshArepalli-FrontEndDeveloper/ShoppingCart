import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

/**
 * renderProposals - render each proposal and return array of elements.
 * @param {array} suggestionsList - proposal object.
 */
const renderProposals = (suggestionsList) => suggestionsList && suggestionsList.map((item, index) => {
 return (<li className="suggestion" key={index} data-row-num={index}>{item.suggestion}</li>)
});

/**
 * renderProductCardItems - render each product card and return array of elements.
 * @param {array} list - products.
 */
const renderProductCardItems = (list, onProductClick, wishList) => list && list.map((productInfo, index) => {
    const isExistingProduct = (wishList && wishList.filter((item) => item.productId === productInfo.productId).length === 1);
    return <ProductCard key={index} productInfo={productInfo} onProductClick={onProductClick} isExistingProduct={isExistingProduct} />;
   }); 

/**
 * Container component - which contains Proposals and Products to be rendered.
 */
const Container = ({suggestions, wishList, onProductClick}) => (   
  <div className="main-container">
    <div className="col-4 card-wrap card proposals-list">
      <div className="proposal-title"> Proposals </div>     
      {suggestions.suggestions && <ul className="suggestions-list">{renderProposals(suggestions.suggestions)}</ul>}       
    </div>
    <div className="col-8">
      <div className="products-title title-alignment">Products</div>
      {suggestions.products && <div className="card-grid">{renderProductCardItems(suggestions.products, onProductClick, wishList)}</div>}
    </div>
   </div>
);

// PropTypes
Container.propTypes = {
   suggestions: PropTypes.object,
   wishList: PropTypes.array,
   onProductClick: PropTypes.func
};
    
export default Container;

