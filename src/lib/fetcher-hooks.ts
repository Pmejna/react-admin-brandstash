import useSWR from "swr";
import { Sections } from "../ts/types/sections";
import fetcher from "./fetcher";

export const useMe = () => {
    const {data, error} = useSWR('/user', fetcher)

    return {
        user: data,
        isLoading: !data && !error,
        isError: error
    }
}

export const useNavigation = () => {
    const {data, error} = useSWR('/section-category/all', fetcher)

    return {
        sections: data,
        isLoading: !data && !error,
        isError: error
    }
}