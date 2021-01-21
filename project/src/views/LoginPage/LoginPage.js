import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { testActions } from '../../_actions/product_actions'


function LoginPage() {

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(testActions())
   }, [])
   
   return (
      <div>
         LoginPage
      </div>
   )
}

export default LoginPage
