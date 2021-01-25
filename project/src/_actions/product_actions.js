import {
   TEST_ACTIONS, 
   LOGIN,
   LOGOUT
} from './types'

export const login = ({email, password}) => {
   if( email !== 'rlftn510@gmil.com' && password !== 'qwe123' ) return alert('로그인 정보가 다릅니다.')

   const request = true
   
   return {
      type: LOGIN,
      payload: request
   }
}

export const logout = () => {
   const request = false

   return {
      type: LOGOUT,
      payload: request
   }
}

export const testActions = () => {

   const request = 'hellow'

   return {
      type: TEST_ACTIONS,
      payload: request
   }
}