import {
   TEST_ACTIONS, 
   LOGIN,
   LOGOUT
} from '../_actions/types'

export default function (state = {}, action) {
   switch (action.type) {
      case TEST_ACTIONS:
         return { ...state, orderInfo: action.payload }
         break;
      case LOGIN:
         return { ...state, loginValid: true }
         break;
      case LOGOUT: 
         return { ...state, loginValid: false }
         break;
      default:
         return { state }
   }
}