import { TweetsItem } from "components/TweetsItem/TweetsItem";
import { getUsers } from "services/usepAPI"

export const TweetsList = ({items}) => { 

    return (
        <ul>
            {items.map(item => {
                return <TweetsItem key={item.id} item={item} />;
            })}
        </ul>
    )
}