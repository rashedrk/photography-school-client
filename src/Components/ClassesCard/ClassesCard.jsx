import { AiFillStar } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { MdWatchLater } from "react-icons/md";
import useAuth from "../../hooks/useAuth"
import axios from "axios";
import useSelectedClass from "../../hooks/useSelectedClass";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";


const ClassesCard = ({ classItem }) => {
    const { user } = useAuth();
    const [, refetch] = useSelectedClass();
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const { _id, name, image, instructor, availableSeats, price } = classItem;

    const handleSelectClass = () => {
        if (user) {
            const classesItems = { classId: _id, name: name, image: image, instructor: instructor, price: price, email: user.email };
            axios.post('http://localhost:3000/classes/selected', classesItems)
                .then(res => {
                    if (res.data.insertedId) {
                        refetch();
                        Swal.fire({
                            icon: 'success',
                            title: 'Your Class has been added',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        } else {
            Swal.fire({
                title: 'You must login first',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login!'
            }).then((result) => {
                if (result.isConfirmed) {
                    
                    navigate('/login', { state: { from: location } });
                }
            })
        }



    }
    return (
        <div className={`card w-96 ${availableSeats == 0 ? 'bg-red-200' : 'bg-base-100'} shadow-xl`}>
            <figure className="px-10 pt-10">
                <img src={image} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body  ">
                <div className="text-slate-600 text-sm flex gap-5">
                    <span className="flex items-center gap-1"><AiFillStar className="text-orange-600" />4.8</span>
                    <span className="flex items-center gap-1"><FaUsers className="text-orange-600" />{availableSeats} vacancies</span>
                    <span className="flex items-center gap-1"><MdWatchLater className="text-orange-600" />10 days</span>
                </div>
                <h2 className="card-title">{name}</h2>
                <p>{instructor}</p>
                <p className="text-2xl font-semibold text-orange-600">${price}</p>
                <div className="card-actions mt-2">
                    <button onClick={handleSelectClass} className="btn primary-btn" disabled={availableSeats == 0 && true} >Select</button>
                </div>
            </div>
        </div>
    );
};

export default ClassesCard;