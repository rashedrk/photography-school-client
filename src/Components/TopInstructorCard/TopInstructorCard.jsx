

const TopInstructorCard = ({ instructor}) => {
    const {image, name} = instructor;
    console.log(instructor);
    return (
        <div className="text-center">
            <div className="avatar">
                <div className="w-72 rounded-full">
                    <img src={image} />
                </div>
            </div>
            <p className=" font-semibold text-3xl">{name}</p>
        </div>
    );
};

export default TopInstructorCard;