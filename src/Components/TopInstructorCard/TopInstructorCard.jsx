
import { motion } from "framer-motion"

const TopInstructorCard = ({ instructor }) => {
    const { image, name } = instructor;

    return (
        <div className="text-center">
            <div className="avatar">
                <div className="w-72 rounded-full">

                    <motion.img
                        src={image}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    />
                </div>
            </div>
            <p className=" font-semibold text-3xl">{name}</p>
        </div>
    );
};

export default TopInstructorCard;