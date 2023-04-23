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
// import { updUser } from 'services/usepAPI';
import { useState } from 'react';
// import { getCardArrayFromLocalStorage } from 'utils/getCardArrLs';

export const TweetsItem = ({ item, followings, isFollowing }) => {
    const { tweets, followers, user, avatar, id } = item;
    
    const [isLoading, setIsLoading] = useState(false);
    const [subscription, setSubscription] = useState(followings.includes(id));
    

    const onFollowBtnClick = async () => {
    setIsLoading(true);
    await isFollowing(id, followers, subscription);
        setSubscription(pervState => !pervState);
        console.log(followings);
    setIsLoading(false);
  };

  return (
    <ListItem>
      <ItemLink href="https://goit.global/ua/">
              <ItemImg src={logo} alt='logo' />
      </ItemLink>
      <ItemWrapper>
        <ImgItemWrapper>
                  <Avatar src={avatar} alt={`${user} avatar`} />
        </ImgItemWrapper>
        <TextTweets>{tweets} tweets</TextTweets>
        <TextFollower>{followers} followers</TextFollower>
        <ItemBtn
                  type="button"
                  onClick={onFollowBtnClick}
                  style={{ backgroundColor: subscription ? '#5CD3A8' : '#EBD8FF' }}
                  disabled={isLoading}
        >
                  {subscription ?  'following' : 'follow'}
        </ItemBtn>
      </ItemWrapper>
    </ListItem>
  );
};
