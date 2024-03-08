import {ChangeEvent} from "react";
import {Checkbox, Group, Select, SimpleCell} from "@vkontakte/vkui";
import {IFilterItem} from "../../types/IGroup/IFilterOptions.ts";

interface GroupFiltersProps {
    typeOfGroup: string;
    onSelectTypeOfGroup: (value: string) => void;
    friendsInGroup: boolean;
    onToggleFriendsInGroup: () => void;
    avatarGroupColor: string;
    onSelectAvatarGroupColor: (value: string) => void;

    typeOfGroupOptions: IFilterItem[];
    avatarGroupColorOptions: IFilterItem[];
}

const GroupFilters = (props: GroupFiltersProps) => {
    const {
        typeOfGroup,
        friendsInGroup,
        avatarGroupColor,
        onSelectTypeOfGroup,
        onToggleFriendsInGroup,
        onSelectAvatarGroupColor,
        typeOfGroupOptions,
        avatarGroupColorOptions
    } = props

    const selectTypeOfGroup = (e: ChangeEvent<HTMLSelectElement>) => {
        onSelectTypeOfGroup(e.target.value)
    }

    const selectAvatarColorGroup = (e: ChangeEvent<HTMLSelectElement>) => {
        onSelectAvatarGroupColor(e.target.value)
    }

    return (
        <Group style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr"}}>
            <SimpleCell>
                <Select onChange={selectTypeOfGroup} value={typeOfGroup} options={typeOfGroupOptions}/>
            </SimpleCell>

            <SimpleCell>
                <Select onChange={selectAvatarColorGroup} value={avatarGroupColor} options={avatarGroupColorOptions}/>
            </SimpleCell>

            <SimpleCell>
                <Checkbox onClick={onToggleFriendsInGroup} checked={friendsInGroup}>Friends in group</Checkbox>
            </SimpleCell>
        </Group>
    )
}

export default GroupFilters