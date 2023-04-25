import { TweetsItem } from "components/TweetsItem/TweetsItem";
import { UserList } from "./TweetsList.styled";
import PropTypes from 'prop-types';


export const TweetsList = ({ items, followings, isFollowing }) => { 

    return (
        <UserList>
            {items.map(item => {
                return <TweetsItem key={item.id} item={item} followings={followings} isFollowing={isFollowing} />;
            })}
            </UserList>
    )
}

TweetsList.propTypes = {
    items: PropTypes.array,
    followings: PropTypes.array,
    isFollowing: PropTypes.func,
}