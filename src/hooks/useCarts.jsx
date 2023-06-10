import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCarts = () => {
    const [axiosSecure] = useAxiosSecure();
    const {user, loading} = useAuth();

    const {  data: cart = [], refetch } = useQuery({
        queryKey: ['carts',user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user?.email}`);
            return res.data;
        }
    })

    return [cart,refetch];
};

export default useCarts;