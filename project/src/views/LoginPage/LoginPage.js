import React, { useState, useEffect } from 'react'
import { Form } from 'antd'
import { useDispatch } from 'react-redux'


import { testActions } from '../../_actions/product_actions'


function LoginPage() {

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(testActions())
   }, [])
   
   return (
      <div className="app">
         <form>
            <Form.Item
               type="email"
            >
               
            </Form.Item>
         </form>
      </div>
   )
}

export default LoginPage
