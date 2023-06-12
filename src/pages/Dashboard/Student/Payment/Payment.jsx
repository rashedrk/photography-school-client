import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);

const Payment = () => {
    //using LINK state to pass price
    const location = useLocation();
    const { price, classId, className,selectedId } = location.state || {};
    const totalPrice = parseFloat(price);

    return (
        <div>
            <SectionTitle
                title="Payment"
                subTitle="Make your"
            />
            <Elements stripe={stripePromise}>
                <CheckOutForm
                    price={totalPrice}
                    classId={classId}
                    className={className}
                    selectedId={selectedId}
                />
            </Elements>

        </div>
    );
};

export default Payment;