import { Avatar, ImgItemWrapper, ItemBtn, ItemImg, ItemLink, ItemWrapper, ListItem, TextFollower, TextTweets } from "./TweetsItem.styled";
import logo from '../../images/Logo.png'
import { updUser } from "services/usepAPI";
import { useEffect, useState } from "react";

export const TweetsItem = ({ item }) => { 
    const { tweets, followers, user, avatar, id } = item;

    const [userFollowers, setUserFollowers] = useState(followers);
    const [isFollow, setIsFollow] = useState(localStorage.getItem(`isFollow${user}-${id}`) === 'true');


    const handleClick = userId => { 

        if (id === userId && isFollow === false) {
            setUserFollowers(prev => prev + 1)
            setIsFollow(true)
            localStorage.setItem(`isFollow${user}-${id}`, true)
            return
        }
        setUserFollowers(prev => prev - 1)
        setIsFollow(false)
        localStorage.removeItem(`isFollow${user}-${id}`, false)
    }

    useEffect(() => {
        const fetchUpdUser = async () => { 
        await updUser(id, userFollowers);
         if (userFollowers !== followers) { 
         setUserFollowers(userFollowers);
         }
        }
        fetchUpdUser()
        setUserFollowers(userFollowers)
        
    }, [userFollowers, id, followers, isFollow ])
    
    
    return (
        <ListItem>
            <ItemLink href="https://goit.global/ua/">
                <ItemImg src={logo} alt="logo" />
            </ItemLink>
            <ItemWrapper>
                <ImgItemWrapper>
                    <Avatar src={avatar} alt="" />
                </ImgItemWrapper>
                <TextTweets>{tweets} tweets</TextTweets>
                <TextFollower>{userFollowers} followers</TextFollower>
                <ItemBtn type="button" onClick={() => handleClick(id)} style={{backgroundColor: isFollow ? '#5CD3A8' : '#EBD8FF'}}>
                    { isFollow ? 'following' : 'follow'}
                </ItemBtn>
                
            </ItemWrapper>
            
        </ListItem>
    )
    
}