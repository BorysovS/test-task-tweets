export const TweetsItem = ({ item }) => { 
    console.log(item);
    return (
        <li>
            <p>{item.user}</p>
            <p>{item.tweets}</p>
        </li>
    )
    
}