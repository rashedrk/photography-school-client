import ClassesCard from '../../Components/ClassesCard/ClassesCard';
import useClasses from '../../hooks/useClasses';
const Classes = () => {
    const [classes] = useClasses();
    const approvedClasses = classes.filter(item => item.status === "approved")
    console.log(classes);
    return (
        <div className='grid pt-14 mb-14 md:grid-cols-3 justify-center gap-4'>
            {
                approvedClasses.map(classItem => <ClassesCard
                    key={classItem._id}
                    classItem={classItem}
                ></ClassesCard>)
            }
        </div>
    );
};

export default Classes;