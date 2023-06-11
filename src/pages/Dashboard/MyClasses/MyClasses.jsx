import { FaTrash } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useSelectedClass from "../../../hooks/useSelectedClass";

const MyClasses = () => {
    const [classes] = useSelectedClass();
    console.log(classes);

    return (
        <div>
            <SectionTitle
                title="My Selected Class"
                subTitle="Join now"
            />
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Course title</th>
                            <th>Instructor</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map(item => <tr key={item._id}>
                                <td className="font-semibold">
                                    {item.name}
                                </td>
                                <td>
                                    {item.instructor}
                                </td>
                                <td className="font-bold">
                                    ${item.price}
                                </td>
                                <td className="flex gap-2 items-center">
                                    <button className="btn bg-green-600 hover:bg-green-500 text-white  btn-xs">Pay</button>
                                    <button className="btn bg-red-500 hover:bg-red-400 text-white btn-xs"><FaTrash /></button>
                                </td>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyClasses;