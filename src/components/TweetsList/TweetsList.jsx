import { TweetsItem } from "components/TweetsItem/TweetsItem";
import { UserList } from "./TweetsList.styled";

export const TweetsList = ({items}) => { 

    return (

        <UserList>
            {items.map(item => {
                return <TweetsItem key={item.id} item={item} />;
            })}
        </UserList>
    )
}