import { TweetsItem } from "components/TweetsItem/TweetsItem";
import { UserList } from "./TweetsList.styled";


export const TweetsList = ({ items, followings, isFollowing }) => { 
    
//     const [selectedOption, setSelectedOption] = useState('all');

//   const options = [
//     { value: 'all', label: 'All' },
//     { value: 'following', label: 'Following' },
//     { value: 'follow', label: 'Follow' },
//   ]
    
//         const lsUsers = JSON.parse(localStorage.getItem('cardArray')) || [];
    
//     const filteredUsers = lsUsers.filter((user) => {
//            console.log(user);
//     switch(selectedOption) {
//       case 'all':
//         return user;
//       case 'following':
//         return user.isFollow === true;
//       case 'follow':
//         return user.isFollow === false;
//       default:
//         return true;
//     }
//     });
    
//     const handleChange = selectedOption => {
//       setSelectedOption(selectedOption.value);
//   };
    


    return (
        <UserList>
            {items.map(item => {
                return <TweetsItem key={item.id} item={item} followings={followings} isFollowing={isFollowing} />;
            })}
            </UserList>
    )
}