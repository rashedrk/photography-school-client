import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";


const CheckOutForm = ({ price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure();
    const {user}= useAuth();

    const [clientSecret, setClientSecret] = useState("");
    // const [cardError, setCardError] = useState("");
    const [payLoading, setPayLoading] = useState(false);
    const [transactionId, setTransactionId] = useState("")

    
    // payment intent
    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })
    }, [])

    //card payment
    const handleSubmit = async event => {
        event.preventDefault();
        setPayLoading(true);
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        // if (error) {
        //     setCardError(error.message);
        // } else {
        //     setCardError("")
        // }

        const { paymentIntent, error:confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'anonymous',
                        email: user?.email || 'unknown'
                    },
                },
            },
        );
        
        if (confirmError) {
            // setCardError(confirmError);
        }
        setPayLoading(false)
        if(paymentIntent.status === "succeeded"){
            setTransactionId(paymentIntent.id);
            Swal.fire({

                icon: 'success',
                title: 'Payment Successfully done!!',
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    return (
        <form className="mx-auto mt-10 lg:w-1/3" onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            {/* <p>{cardError}</p> */}
            <button className="btn primary-btn btn-sm mt-5" type="submit" disabled={!stripe || !clientSecret || payLoading}>
                Pay
            </button>
        </form>
    );
};

export default CheckOutForm;