import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import TopInstructorCard from "../../../Components/TopInstructorCard/TopInstructorCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper";

const TopInstructors = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/instructors/top')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])

    return (
        <>
            <SectionTitle title="Meet Top Instructors" subTitle="Our Team " />
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                autoplay={{
                    delay: 2400,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination,Autoplay]}
                className="my-10"
            >
                {
                    instructors.map(instructor => <SwiperSlide key={instructor._id}>
                        <TopInstructorCard
                            instructor={instructor}
                        ></TopInstructorCard>
                    </SwiperSlide>)
                }
            </Swiper>
        </>
    );
};

export default TopInstructors;