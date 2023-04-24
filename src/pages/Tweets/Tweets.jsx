import { TweetsList } from 'components/TweetsList/TweetsList';
import { useEffect, useState } from 'react';
import { getUsers, updUser } from 'services/usepAPI';
import {
  BackLinkBtn,
  BtnLoadMore,
  Container,
  FilterThumb,
  WrapperSelect,
} from './Tweets.styled';
import { animateScroll } from 'react-scroll';

import useLocalStorage from 'hooks/useLocalStorage';
import { filterUsers } from 'utils/filterUsers';
import { filterValues } from 'utils/filterValues';
import { SelectFilterUsers } from 'components/DropDown/Dropdown';

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [disabled, setDisabled] = useState(false);
  const [selectedOption, setSelectedOption] = useState(filterValues.all);

  const [followings, setFollowings] = useLocalStorage();

  let filteredUsers = filterUsers(users, followings, selectedOption.value);

  //   const options = [
  //     { value: 'all', label: 'All' },
  //     { value: 'following', label: 'Following' },
  //     { value: 'follow', label: 'Follow' },
  //   ]

  // const lsUsers = JSON.parse(localStorage.getItem('cardArray')) || [];

  // const filteredUsers = users.filter((user) => {
  // switch(selectedOption) {
  //   case 'all':
  //     return true;
  //   case 'following':
  //     return user.isFollow === true;
  //   case 'follow':
  //     return user.isFollow === false;
  //   default:
  //     return true;
  // }
  // });
  //  const filteredUsers = users.filter((user) => {
  //     switch (selectedOption) {
  //       case 'all':
  //         return true;
  //       case 'following':
  //         return user.isFollow === true;
  //       case 'follow':
  //         return user.isFollow === false;
  //       default:
  //         return true;
  //     }}).map((user) => {
  //     const lsUser = users.find((us) => us.id === user.id);
  //     if (lsUser) {
  //       return { ...user, isFollow: lsUser.isFollow };
  //     }
  //     return user;
  //   });

  //     const handleChange = selectedOption => {
  //       setSelectedOption(selectedOption.value);
  //   };

  const scrollOnMoreButton = () => {
    animateScroll.scrollToBottom({
      duration: 500,
      offset: 20,
      delay: 8,
      smooth: 'linear',
    });
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const newUsers = await getUsers(page);
      console.log(newUsers);
      if (page === 1) {
        setUsers(newUsers);
        return;
      }

      if (newUsers.length === 0) {
        setDisabled(true);
      }

      setUsers(pervState => [...pervState, ...newUsers]);
    };
    fetchUsers();
  }, [page, disabled]);

  const updateUserFollowings = async (id, followers, subscription) => {
    setUsers(subs =>
      subs.map(user => {
        if (user.id !== id) return user;
        return {
          ...user,
          followers: !subscription
            ? (user.followers += 1)
            : (user.followers -= 1),
        };
      })
    );
    if (!subscription) {
      setFollowings(prevState => [...prevState, id]);
      await updUser(id, (followers += 1));
    } else {
      setFollowings(prevState => prevState.filter(el => el !== id));
      await updUser(id, (followers -= 1));
    }
  };

  const handleLoadMore = () => {
    setPage(pervpage => pervpage + 1);
    scrollOnMoreButton();
  };

  return (
    <Container>
      <FilterThumb>
        <BackLinkBtn to="/">Go Back</BackLinkBtn>

        <WrapperSelect>
          <SelectFilterUsers
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </WrapperSelect>
      </FilterThumb>
      <TweetsList
        items={filteredUsers}
        setUsers={setUsers}
        followings={followings}
        isFollowing={updateUserFollowings}
      />
      <BtnLoadMore type="button" onClick={handleLoadMore} disabled={disabled}>
        Load More
      </BtnLoadMore>
    </Container>
  );
};

export default Tweets;
