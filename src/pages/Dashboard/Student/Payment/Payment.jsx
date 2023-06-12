import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);

const Payment = () => {
    //using LINK state to pass price
    const location = useLocation();
    const price = parseFloat(location?.state?.price.toFixed(2));
    
    return (
        <div>
            <SectionTitle
                title="Payment"
                subTitle="Make your"
            />
                <Elements stripe={stripePromise}>
                    <CheckOutForm 
                        price={price}
                    />
                </Elements>
            
        </div>
    );
};

export default Payment;