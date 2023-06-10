import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";


const useClasses = () => {
    const {user, loading} = useAuth();
    const {  data: cart = [], refetch } = useQuery({
        queryKey: ['carts',user.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch('http://localhost:3000/carts');
            return res.json();
        }
    })

    return [cart,refetch];
};

export default useClasses;