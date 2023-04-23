import { TweetsList } from "components/TweetsList/TweetsList"
import { useEffect, useState } from "react"
import { getUsers } from "services/usepAPI"
import { BackLinkBtn } from "./Tweets.styled"

const Tweets = () => { 
    const [users, setUsers] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {

        const fetchUsers = async () => { 
            const newUsers = await getUsers(page);
            if (page === 1) {
                setUsers(newUsers)
                return
            }
        
        setUsers(pervState => [...pervState, ...newUsers]);
            
        }


        fetchUsers();
    }, [page])

    const handleLoadMore = () => { 
        setPage(pervpage => pervpage + 1)
    }
    
    
    return (
        <div>
            <BackLinkBtn to='/'>Back</BackLinkBtn>
            <TweetsList items={users} />
            <button type="button" onClick={handleLoadMore}>Load More</button>
        </div>
    )
}

export default Tweets