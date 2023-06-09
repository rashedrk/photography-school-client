import { FaUserGraduate } from 'react-icons/fa';

const TopClassCard = ({ classItem }) => {
    
    const { name, image, instructor, enrolled, price } = classItem;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="" /></figure>
            <p className='font-bold absolute top-2 p-3 left-[300px] text-sm bg-[#fa6a57] badge text-white'>${price}</p>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-success text-white">TOP</div>
                </h2>
                <p>{instructor}</p> 
                <div className='inline-flex items-center'>
                    <FaUserGraduate className='text-[#fa6a57] me-1'/> {enrolled} Students
                </div>

                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Course</div>
                    <div className="badge badge-outline">Best</div>
                </div>
            </div>
        </div>
    );
};

export default TopClassCard;