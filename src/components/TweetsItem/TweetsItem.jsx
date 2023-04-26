import {
  Avatar,
  ImgItemWrapper,
  ItemBtn,
  ItemImg,
  ItemLink,
  ItemWrapper,
  ListItem,
  TextFollower,
  TextTweets,
} from './TweetsItem.styled';
import logo from '../../images/Logo.png';
import PulseLoader from 'react-spinners/PulseLoader';
import PropTypes from 'prop-types';

import { useState } from 'react';

export const TweetsItem = ({ item, followings, isFollowing }) => {
  const { tweets, followers, user, avatar, id } = item;

  const [isLoading, setIsLoading] = useState(false);
  const [subscription, setSubscription] = useState(followings.includes(id));

  const onFollowBtnClick = async () => {
    setIsLoading(true);
    await isFollowing(id, followers, subscription);
    setSubscription(pervState => !pervState);
    setIsLoading(false);
  };

  return (
    <ListItem>
      <ItemLink href="https://goit.global/ua/">
        <ItemImg src={logo} alt="logo" />
      </ItemLink>
      <ItemWrapper>
        <ImgItemWrapper>
          <Avatar src={avatar} alt={`${user} avatar`} />
        </ImgItemWrapper>
        <TextTweets>{tweets.toLocaleString('en-US')} tweets</TextTweets>
        <TextFollower>{followers} followers</TextFollower>
        <ItemBtn
          type="button"
          onClick={onFollowBtnClick}
          style={{ backgroundColor: subscription ? '#5CD3A8' : '#EBD8FF' }}
          disabled={isLoading}
        >
          {isLoading ? (
            <PulseLoader size={10} color='#846ac2'/>
          ) : subscription ? (
            'following'
          ) : (
            'follow'
          )}
        </ItemBtn>
      </ItemWrapper>
    </ListItem>
  );
};

TweetsItem.propTypes = {
  item: PropTypes.object,
  followings: PropTypes.array,
  isFollowing: PropTypes.func,
}