import { useQuery } from "@tanstack/react-query";
import RepoCard from "../RepoCard/RepoCard";
import './RightProfile.css'
import RepoCardAdapter from "../../Adapter/RepoCardAdapter";
import axios from "axios";

const RightProfile = ({ username }: { username: string | undefined }) => {

    const { isLoading, isError, data } = useQuery({
        queryKey: ['repoCard'],
        queryFn: async () => {
            const res = await axios.get(`https://api.github.com/users/${username}/repos`)
            return res.data
        },
    })

    if (isLoading) return <p>Loading...</p>

    if (isError) return <p>Error</p>

    return (
        <div className="w-3/4 pt-10">
            <input type="text" className=" ml-[40px] rounded-md w-[600px] text-[#848D97] bg-[#0D1117] input_find" placeholder="Find a repository..." />
            {
                data?.map((repo: any) => {
                    const repoData = new RepoCardAdapter(repo).adapt()
                    const { repoName, repoVisibility, language, updated_at } = repoData
                    return <RepoCard
                        key={repoData.repoName}
                        repoName={repoName}
                        repoVisibility={repoVisibility}
                        language={language}
                        updated_at={updated_at}
                    />
                })
            }
        </div>
    );
}

export default RightProfile