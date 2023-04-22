import { TweetsList } from "components/TweetsList/TweetsList"
import { useEffect, useState } from "react"
import { getUsers } from "services/usepAPI"

const Tweets = () => { 
    const [users, setUsers] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        async function getFetchUsers(page) { 
            const users = await getUsers(page);
            setUsers(pervstate =>  
                [...users]
            )
        }
        getFetchUsers();
        setPage(pervstate => { 
            pervstate += 1;
        })
    }, [page])
    
    return (
        <div>
            <TweetsList items={users} />
        </div>
    )
}

export default Tweets