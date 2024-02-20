import { useParams } from "react-router-dom"
import LeftProfile from "../LeftProfile/LeftProfile"
import RightProfile from "../RightProfile/RightProfile"
import { useQuery } from "@tanstack/react-query"

const GitHubHomePage = () => {

    const { username } = useParams()

    const { isLoading, isError, data } = useQuery({
        queryKey: ['leftProfile'],
        queryFn: () => fetch(`https://api.github.com/users/${username}`).then(res => res.json()),
    })

    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>Error</p>

    if (data?.message == "Not Found") return (
        <div className='w-screen h-screen flex items-center justify-center'>
            <h1 className='text-2xl'>User Not Found</h1>
        </div>
    )

    return (
        <div className="flex mx-40 mt-10">
            <LeftProfile username={username} />
            <RightProfile username={username} />
        </div>
    )
}

export default GitHubHomePage