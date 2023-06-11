import { useForm } from "react-hook-form";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";

const AddClass = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <SectionTitle
                title="Add New Class"
                subTitle="Here"
            />
            <form className="px-16 py-8" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Class Name</span>
                        </label>
                        <input type="text" {...register("name", { required: true })} placeholder="class name" className="input input-bordered" />
                        {errors.name && <span className="text-red-600">Name field is required</span>}
                    </div>
                    <div className="form-control">
                        {/* TODO - Upload a file and host to imgbb */}
                        <label className="label">
                            <span className="label-text">Class Image</span>
                        </label>
                        <input type="text" {...register("image", { required: true })} placeholder="image" className="input input-bordered" />
                        {errors.image && <span className="text-red-600">image field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Instructor Name</span>
                        </label>
                        <input type="text" {...register("instructor", { required: true })} placeholder="Enter Instructor name" className="input input-bordered" />
                        {errors.instructor && <span className="text-red-600">instructor name field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" {...register("email", { required: true })} placeholder="Enter instructor email" className="input input-bordered" />
                        {errors.email && <span className="text-red-600">Email field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Seats</span>
                        </label>
                        <input type="number" {...register("availableSeats", { required: true })} placeholder="Enter available seats" className="input input-bordered" />
                        {errors.availableSeats && <span className="text-red-600">available seats field is required</span>}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" {...register("price", { required: true })} placeholder="price" className="input input-bordered" />
                        {errors.price && <span className="text-red-600">price field is required</span>}
                    </div>
                </div>

                <div className="form-control items-center mt-6">
                    <button className="btn primary-btn  ">add class</button>
                </div>
            </form>
        </div>
    );
};

export default AddClass;