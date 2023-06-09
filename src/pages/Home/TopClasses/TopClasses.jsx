import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import { useEffect, useState } from "react";
import TopClassCard from "../../../Components/TopClassCard/TopClassCard";


const TopClasses = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/classes/top')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, []);
    console.log("all data ", classes);

    return (
        <>
            <SectionTitle title="Popular Courses" subTitle="Learn Online" />
            <div className="grid justify-center p-14 md:grid-cols-3 gap-5">
                {
                    classes.map(classItem => <TopClassCard
                        key={classItem._id}
                        classItem={classItem}
                    ></TopClassCard>)
                }
            </div>
            <div className="text-center mb-10">
                <button className="btn w-96 btn-outline ">See All Classes </button>
            </div>
        </>

    );
};

export default TopClasses;