import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Badge from 'material-ui/Badge';
import SearchBar from 'material-ui-search-bar';
import RaisedButton from 'material-ui/RaisedButton';
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getQueryString, resetToInitialState } from '../actions';
import {isEmpty} from 'lodash';


/**
 * Header component - To display the menu,searchbar and wishList.
*/
class Header extends Component {
    
    /**
     * constructor
     * @param {object} props
     */
    constructor(props) {
        super(props);
        this.state = {
            wishList: []
        }
        this.onSearchHandler = this.onSearchHandler.bind(this);   
      }
    
    /**
     * componentWillReceiveProps
     * @param {object} nextProps
     */
    componentWillReceiveProps(nextProps) {
        const {wishList} = nextProps;
        if (wishList) {
        this.setState({wishList});
        }
    }
    
    /**
     * onSearchHandler
     * @param {searchString} string - user input for searching the product.
     */
    onSearchHandler(searchString) {
        const {dispatch} = this.props;
        if(!isEmpty(searchString)) {
        dispatch(getQueryString(searchString));
        } else {
        dispatch(resetToInitialState());
        this.navigateToPage('/');
        }        
    }


    /**
     * navigateToPage
     * @param {screenPath} string - navigate to route based on input.
     */
    navigateToPage(screenPath) {
        const {history} = this.props;
        history.push(screenPath);
    }

     
    /**
     * render
     * @return {ReactElement} markup
     */
    render() {
        const {wishList} = this.state;
        return (        
            <div className="header">           
            <div className="col-2 dropdown">
            <img className="menu-icon" />
            <div className="dropdown-content">
                <Link to="/">View</Link>
                <Link to="/wishlist">WishList</Link>                   
            </div>
            </div>
            <div className="col-8">
                <img className="header-icon" />
                {/* Inline sytle is required for material-ui component */}             
                <SearchBar 
                  onChange={this.onSearchHandler}
                  onRequestSearch={() => this.navigateToPage('/')}
                  hintText="Type here to search"
                  style={{width: "40%", margin: "6px"}}        
                />
            </div>
            <div className="col-2">
                {/* Inline sytle is required for material-ui component */}   
                <Badge
                    badgeContent={wishList.length}
                    primary={true}
                    badgeStyle={{top: 6, right: 0}}
                    style={{padding: '9px'}}>
                    <img className="header-wishlist-icon" onClick={() => this.navigateToPage('/wishList')} />                    
                </Badge>
            </div>  
            </div>);
    }
};

// Proptypes
Header.propTypes = {
    wishList: PropTypes.array  
};


// Inject Props
function mapDispatchToProps(dispatch) {
  let actions = bindActionCreators({ getQueryString, resetToInitialState });
  return { ...actions, dispatch };
} 

// Inject State
function mapStateToProps(state){
    return {
        wishList: state.viewReducer.wishList || []
        };
}

// Connect State and Props to Component.
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
