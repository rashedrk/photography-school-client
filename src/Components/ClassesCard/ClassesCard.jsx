import { AiFillStar } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { MdWatchLater } from "react-icons/md";


const ClassesCard = ({classItem}) => {
    const {name, image, instructor, availableSeats, price} = classItem
    return (
        <div className={`card w-96 ${availableSeats == 0 ? 'bg-red-200' : 'bg-base-100'} shadow-xl`}>
            <figure className="px-10 pt-10">
                <img src={image} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body  ">
                <div className="text-slate-600 text-sm flex gap-5">
                    <span className="flex items-center gap-1"><AiFillStar className="text-orange-600"/>4.8</span>
                    <span className="flex items-center gap-1"><FaUsers className="text-orange-600"/>{availableSeats} vacancies</span>
                    <span className="flex items-center gap-1"><MdWatchLater className="text-orange-600"/>10 days</span>
                </div>
                <h2 className="card-title">{name}</h2>
                <p>{instructor}</p>
                <p className="text-2xl font-semibold text-orange-600">${price}</p>
                <div className="card-actions mt-2">
                    <button className="btn primary-btn" disabled={availableSeats == 0 && true} >Select</button>
                </div>
            </div>
        </div>
    );
};

export default ClassesCard;