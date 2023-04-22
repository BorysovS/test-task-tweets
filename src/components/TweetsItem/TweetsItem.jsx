import { Avatar, ImgItemWrapper, ItemBtn, ItemImg, ItemLink, ItemWrapper, ListItem, TextFollower, TextTweets } from "./TweetsItem.styled";
import logo from '../../images/Logo.png'

export const TweetsItem = ({ item }) => { 
    console.log(logo);
    return (
        <ListItem>
            <ItemLink href="https://goit.global/ua/">
                <ItemImg src={logo} alt="logo" />
            </ItemLink>
            <ItemWrapper>
                <ImgItemWrapper>
                    <Avatar src={item.avatar} alt="" />
                </ImgItemWrapper>
                <TextTweets>{item.tweets} tweets</TextTweets>
                <TextFollower>{item.followers} followers</TextFollower>
                <ItemBtn type="button">Follow</ItemBtn>
                
            </ItemWrapper>
            
        </ListItem>
    )
    
}