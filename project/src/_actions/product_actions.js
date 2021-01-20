import {
   TEST_ACTIONS
} from './types'

export const testActions = () => {

   const request = 'hellow'

   return {
      type: TEST_ACTIONS,
      payload: request
   }
}