import { useQuery } from "@tanstack/react-query";
import Avatar from "../Avatar/Avatar";
import LeftProfileAdapter from "../../Adapter/LeftProfileAdapter";

const LeftProfile = ({ username }: { username: string | undefined }) => {

    const { isLoading, isError, data } = useQuery({
        queryKey: ['leftProfile'],
        queryFn: () => fetch(`https://api.github.com/users/${username}`).then(res => res.json()),
        select: (data: any) => new LeftProfileAdapter(data).adapt()
    })

    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>Error</p>

    return (
        <div className="w-1/4 flex flex-col">
            <Avatar avatarUrl={data?.avatarUrl} />
            <h1 className="text-2xl text-white mt-4">{data?.name}</h1>
            <h2 className="text-xl">{data?.userName}</h2>
            <button className="btn w-[90%] min-h-8 h-8 my-3 bg-[#21262D]">Follow</button>
            <h3 className="text-[14px] font-sans font-serif">
                <span className="text-white text-[18px]">{data?.followersCount} </span>
                Followers .
                <span className="text-white text-[18px]"> {data?.followingCount} </span>
                Following
            </h3>
        </div>
    );
}

export default LeftProfile