import {Div, Group, Header, Spinner} from "@vkontakte/vkui";
import {IGroup} from "../../types/IGroup/IGroup.ts";
import GroupCard from "../GroupCard/GroupCard.tsx";

interface GroupListProps {
    groups: IGroup[];
    isLoading: boolean
}

const GroupList = (props: GroupListProps) => {
    const {
        groups,
        isLoading
    } = props

    if(isLoading) {
        return (
            <Spinner />
        )
    }

    if(!groups.length) {
        return <Div>There is no groups</Div>
    }

    return (
        <Group header={<Header mode="secondary">Items</Header>}>
            {
                groups.map(group => {
                    return (
                        <GroupCard key={group.id} {...group} />
                    )
                })
            }
        </Group>
    )
}

export default GroupList