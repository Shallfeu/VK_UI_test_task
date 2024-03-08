import {
    Cell,
    Group,
    List,
    SimpleCell
} from "@vkontakte/vkui";
import {IGroup} from "../../types/IGroup/IGroup.ts";
import {useState} from "react";

const GroupCard = (props: IGroup) => {
    const {
        closed,
        friends,
        name,
        members_count,
        avatar_color
    } = props
    const [showFriends, setShowFriends] = useState(false)

    // P.S. I don't find how to correctly add custom styles
    // so I used inline styles
    // I know that is bad, but I spare my time

    const toggleShowFriendsInGroup = () => {
        setShowFriends(prev => !prev)
    }

    return (
        <Group>
            <SimpleCell before={
                <>
                    {avatar_color && <div
                        style={{
                            border: "1px solid black",
                            borderRadius: "50%",
                            background: avatar_color,
                            width: "100px",
                            height: "100px"
                        }}
                    />}
                </>
            }>
                {name}
            </SimpleCell>

            {closed && <SimpleCell>It's a closed group</SimpleCell>}

            {members_count && <SimpleCell>Subs: {members_count}</SimpleCell>}

            {friends?.length &&
                <SimpleCell onClick={toggleShowFriendsInGroup}>Friends in group: {friends?.length}</SimpleCell>}

            {showFriends && <List>
                {
                    friends?.map((friend, index) => {
                        return (
                            <Cell key={index}>
                                {`${friend.first_name} ${friend.last_name}`}
                            </Cell>
                        )
                    })
                }
            </List>}
        </Group>
    );
}

export default GroupCard