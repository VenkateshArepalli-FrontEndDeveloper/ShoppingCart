import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {SearchPage, Container} from '../components';
import { ToastContainer, toast } from 'react-toastify';
import { connect } from 'react-redux';
import {isEmpty} from 'lodash';
import {addProductToWishList, removeProductFromWishList} from '../actions';
import { bindActionCreators } from 'redux';


/* View - Main view of the application and Enclosed by two components.
*  - Container - which hold the products and proposals.
*  - SearchPage - To Provide information to user.
*/
class View extends Component {
     /**
     * constructor
     * @param {object} props
     */
    constructor(props) {
        super(props);
        this.state = {           
            suggestions: this.updateProductWithUniqueId(props.suggestions),
            wishList: props.wishList,
            showSearchPage: isEmpty(props.suggestions.products)

        };
        this.onProductClick =  this.onProductClick.bind(this);
      }
    
       
    /**
     * componentWillReceiveProps
     * @param {object} nextProps
     */
    componentWillReceiveProps(nextProps) {
        const {suggestions, wishList} = nextProps;
        if (!isEmpty(suggestions)) {
            const modifiedSuggestions = this.updateProductWithUniqueId(suggestions);
            this.setState({suggestions: modifiedSuggestions, wishList, showSearchPage: false});
        } else {
            this.setState({showSearchPage: true});
        }               
    }
    
     
    /**
     * updateProductWithUniqueId
     * @param {object} suggestions - add productId to product to maintain unique key.
     */
    updateProductWithUniqueId(suggestions) {
        const {products = []} = suggestions;
        const modifiedProducts = products && products.map((item, index) => Object.assign({},  item, {productId:  index}));
        return Object.assign({}, suggestions, {products:  modifiedProducts});
    }
    
    /**
     * onProductClick
     * @param {object} event - event handler for the selected product.
     * @param {bool} isInputChecked - Information about selected/Unselected the product.
     * @param {number} productId - Unique Id for the product.
     */
    onProductClick(event, isInputChecked, productId) {
        const {suggestions: {products}, wishList} = this.state;
       // const {addProductToWishList, removeProductFromWishList} = this.props;        
        if(isInputChecked) {         
            const selectedProduct = products.filter((item) => item.productId === productId);
            const updatedWishList = [...wishList, ...selectedProduct];
            this.props.dispatch(addProductToWishList(updatedWishList));
            toast.success("Added to Wishlist", {position: toast.POSITION.TOP_RIGHT});           
        } else {
            const filteredWishList = wishList.filter((item) => item.productId !== productId);            
            this.props.dispatch(removeProductFromWishList(filteredWishList));     
            toast.error("Removed from Wishlist", {position: toast.POSITION.TOP_RIGHT});                     
        }
      }
          
   /**
     * render
     * @return {ReactElement} markup
     */
    render() {
        const {suggestions, showSearchPage, wishList} = this.state;          
        return(
            <div>                
                {showSearchPage ? <SearchPage /> : <Container suggestions={suggestions} wishList={wishList} onProductClick={this.onProductClick} />}
                <ToastContainer autoClose={1000} hideProgressBar closeButton={false}/>
            </div>             
        );
    }
};

// PropTypes
View.propTypes = {
    suggestions: PropTypes.object,
    wishList: PropTypes.array
};
     
// Inject State
function mapStateToProps(state){
   return {
        suggestions: state.viewReducer.suggestions || {},
        wishList: state.viewReducer.wishList || []
    };
  }

  // Inject Props
function mapDispatchToProps(dispatch) {
    let actions = bindActionCreators({ addProductToWishList, removeProductFromWishList });
    return { ...actions, dispatch };   
} 
// Connect State and Props to Component.
export default connect(mapStateToProps, mapDispatchToProps)(View);

