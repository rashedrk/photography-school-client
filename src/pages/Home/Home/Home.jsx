import About from "../About/About";
import CountSection from "../CountSection/CountSection";
import Faq from "../FAQ/FAQ";
import SliderTop from "../SliderTop/SliderTop";
import TopClasses from "../TopClasses/TopClasses";
import TopInstructors from "../TopInstructors/TopInstructors";

const Home = () => {
    return (
        <>
            <SliderTop/>
            <About/>
            <TopClasses/>
            <CountSection/>
            <TopInstructors/>
            <Faq/>
        </>
    );
};

export default Home;