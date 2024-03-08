import {
    AppRoot,
    SplitLayout,
    SplitCol,
    View,
    Panel,
    PanelHeader,
    usePlatform,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import GroupList from "./components/GroupList/GroupList.tsx";
import {useEffect, useState} from "react";
import groupService from "./services/groupService/group.service.ts";
import {IGroup} from "./types/IGroup/IGroup.ts";
import GroupFilters from "./components/GroupFilters/GroupFilters.tsx";
import {IFilterOptions} from "./types/IGroup/IFilterOptions.ts";

const initialFilterOptionsState = {
    avatarGroupColorOptions:[],
    typeOfGroupOptions:[]
}

export default function App() {
    const platform = usePlatform();

    const [groups, setGroups] = useState<IGroup[]>([])
    const [isLoading, setIsLoading] = useState(false)

    const [filterOptions, setFilterOptions] = useState<IFilterOptions>(initialFilterOptionsState)

    const [typeOfGroup, setTypeOfGroup] = useState('all')
    const [avatarColor, setAvatarColor] = useState('all')
    const [isFriends, setIsFriends] = useState(false)

    useEffect(() => {
        const fetchFilterOptions = async () => {
            const {result, data} = await groupService.fetchOptionsForFilterGroups()

            if (result === 0) {
                window.alert("Oops, something went wrong. Try it later!")
            }

            if (result && data) {
                setFilterOptions(data)
            }
        }
        fetchFilterOptions()
    }, []);

    useEffect(() => {
        const fetchGroupsByFilters = async () => {
            setIsLoading(true)
            const options = {
                color: avatarColor,
                friends: isFriends,
                closed: typeOfGroup
            }
            const {result, data} = await groupService.fetchAllGroups(options)

            if (result === 0) {
                window.alert("Oops, something went wrong. Try it later!")
            }

            if (result && data) {
                setGroups(data)
            }
            setIsLoading(false)
        }

        fetchGroupsByFilters()
    }, [typeOfGroup, avatarColor, isFriends]);

    const selectTypeOfGroupHandler = (value: string) => {
        setTypeOfGroup(value)
    }

    const selectAvatarColorHandler = (value: string) => {
        setAvatarColor(value)
    }

    const toggleIsgFriendsHandler = () => {
        setIsFriends(prev => !prev)
    }

    return (
        <AppRoot>
            <SplitLayout header={platform !== 'vkcom' && <PanelHeader delimiter="none"/>}>
                <SplitCol autoSpaced>
                    <View activePanel="main">
                        <Panel id="main">
                            <PanelHeader>LOGO</PanelHeader>

                            <GroupFilters
                                typeOfGroup={typeOfGroup}
                                avatarGroupColor={avatarColor}
                                friendsInGroup={isFriends}
                                onSelectAvatarGroupColor={selectAvatarColorHandler}
                                onSelectTypeOfGroup={selectTypeOfGroupHandler}
                                onToggleFriendsInGroup={toggleIsgFriendsHandler}
                                avatarGroupColorOptions={filterOptions.avatarGroupColorOptions}
                                typeOfGroupOptions={filterOptions.typeOfGroupOptions}
                            />

                            <GroupList groups={groups} isLoading={isLoading}/>
                        </Panel>
                    </View>
                </SplitCol>
            </SplitLayout>
        </AppRoot>
    );
}
