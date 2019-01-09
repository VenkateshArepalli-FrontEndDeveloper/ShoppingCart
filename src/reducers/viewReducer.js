import * as actionType from '../actions/ActionType';
import getServiceData from '../service/APIHelper';

const INITIAL_STATE = {
   suggestions: {},
   wishList: []
}

/**
 * viewReducer - which takes the action(type,payload) as input and update the state.
 */
const viewReducer = (state = INITIAL_STATE, action) => {
  let newState;
  switch (action.type) {
    case actionType.GET_QUERY_STRING:      
       newState = {...state, suggestions: action.payload};            
      return newState;
    case actionType.ADD_PRODUCT_TO_WISHLIST:
      newState = {...state, wishList: action.payload};   
      return newState;
    case actionType.REMOVE_PRODUCT_FROM_WISHLIST:
      newState = {...state, wishList: action.payload};   
      return newState;
    case actionType.RESET_TO_INITIAL_STATE:     
      return INITIAL_STATE;
    default:
      return state
  }
}

export default viewReducer;
