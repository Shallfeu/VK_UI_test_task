import {IGroup} from "../../types/IGroup/IGroup.ts";
import {IFilterOptions} from "../../types/IGroup/IFilterOptions.ts";

export interface IGetGroupsResponse {
    result: 1 | 0,
    data?: IGroup[]
}

export interface IGetGroupsFiltersResponse {
    result: 1 | 0,
    data?: IFilterOptions
}