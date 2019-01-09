
/*
 * action creators
 */

import * as actionType from './ActionType';
import getServiceData from '../service/APIHelper';


export const getQueryString = (query) => async (dispatch) =>  {  
  const suggestions = await getServiceData(query);  
    dispatch({
      type: actionType.GET_QUERY_STRING,
      payload: suggestions
    });
};

export const addProductToWishList = (wishList) => ({
  type: actionType.ADD_PRODUCT_TO_WISHLIST,
  payload: wishList
});


export const removeProductFromWishList = (wishList) => ({
  type: actionType.REMOVE_PRODUCT_FROM_WISHLIST,
  payload: wishList
});
 
export const resetToInitialState = () => ({
  type: actionType.RESET_TO_INITIAL_STATE,
  payload: null
});


