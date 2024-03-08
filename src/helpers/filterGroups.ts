import {IGroup} from "../types/IGroup/IGroup.ts";

const filterGroups = (groups: IGroup[], options: Record<string, string | boolean>) => {
    let result: IGroup[] = [...groups]

    if (options.color) {
        result = result.filter(el => {
            if (options.color === "all" || options.color === el.avatar_color) return true
        })
    }

    if (options.friends) {
        result = result.filter(el => {
            if (el.friends && el.friends?.length > 0) return true
        })
    }

    if (options.closed) {
        result = result.filter(el => {
            const isClosed = options.closed === 'closed'
            if (options.closed === 'all' || el.closed === isClosed) return true
        })
    }

    return result
}

export default filterGroups