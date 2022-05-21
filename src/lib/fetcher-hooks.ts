import useSWR from "swr";
import { ProjectData } from "../ts/types/project";
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

export const useProjects = () => {
    const {data, error} = useSWR('/project/all', fetcher)

    return {
        projects: data,
        isLoading: !data && !error,
        isError: error
    }
}

export const useProject = (uuid: string) => {
    const {data, error} = useSWR(`/project/${uuid}`, fetcher)

    return {
        project: data as ProjectData,
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