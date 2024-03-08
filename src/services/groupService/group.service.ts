import groups from '../../../mockData/groups.json'
import filterOptions from '../../../mockData/filterOptions.json'
import {IGetGroupsFiltersResponse, IGetGroupsResponse} from "./types.ts";
import filterGroups from "../../helpers/filterGroups.ts";

const fetchAllGroups = (options: Record<string, string | boolean>): Promise<IGetGroupsResponse> => {
    return new Promise((res) => {
        setTimeout(() => {
            res({result: 1, data: filterGroups(groups, options)})
        }, 1000)
    })
}

const fetchOptionsForFilterGroups = (): Promise<IGetGroupsFiltersResponse> => {
    return new Promise((res) => {
        setTimeout(() => {
            res({result: 1, data: filterOptions})
        }, 1000)
    })
}

const groupService = {
    fetchAllGroups,
    fetchOptionsForFilterGroups
}

export default groupService