import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useCarts from "../../../hooks/useCarts";

const MyClasses = () => {
    const [cart] = useCarts();


    return (
        <div>
            <SectionTitle
                title="My Selected Class"
                subTitle="Join now"
            />
            classes
        </div>
    );
};

export default MyClasses;