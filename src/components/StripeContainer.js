import React from 'react'
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import PaymentForm from './PaymentForm'

const PUBLIC_KEY = "pk_test_51H5c9lLWfFPh4sc7Ub3kD1DzHU98LfKtJoA3vUcVKjJaisT7KhzhBOQbbijmqwK7kEeq3u8YWlqrYWRdmGqURlYX00liaElRMx"

const stripeTestPromise = loadStripe(PUBLIC_KEY)


export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
        <PaymentForm/>
    </Elements>
  )
}
