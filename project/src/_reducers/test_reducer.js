import {
   TEST_ACTIONS
} from '../_actions/types'

export default function (state = {}, action) {
   switch (action.type) {
      case TEST_ACTIONS:
         return { ...state, orderInfo: action.payload }
         break;
      default:
         return { state }
   }
}