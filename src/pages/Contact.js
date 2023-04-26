import { useEffect, useState } from "react"


export default  function Contact () {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch(' https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])
    return (
        <>
            <h1>Contact us</h1>
            <ul>
                {
                    users.map(i => <li key={i?.id}>
                        <h2>{i?.name}</h2>
                        <h2>{i?.username}</h2>
                    </li>)
                }
            </ul>
        </>
    )}