import { useHttp } from './../utils/http';
import { useMutation, useQuery } from "react-query";
import { User } from "../models/user";

export const useCreateUser = () => {
    const http = useHttp();
    const mutation = useMutation({
        mutationKey: 'create user',
        mutationFn: (user: Partial<User>) => http<User>('users', { method: 'POST', data: user })
    });

    return mutation;
}

export const useLoadUser = () => {
    const http = useHttp();
    const { isLoading, data } = useQuery({
        queryKey: 'load users',
        queryFn: () => http<User[]>('users'),
        refetchOnWindowFocus: false,
    });

    return {
        users: data || [],
        isLoading
    }
}