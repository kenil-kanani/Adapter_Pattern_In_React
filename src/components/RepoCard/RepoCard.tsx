import { useQuery } from "@tanstack/react-query"

type RepoCardProps = {
    repoName: string,
    repoVisibility: string,
    language: string,
    updated_at: string
}

const RepoCard = ({ repoName, repoVisibility, language, updated_at }: RepoCardProps) => {

    return (
        <div className="h-32 w-11/12 mx-auto mb-3 flex items-center border-b-[1px] border-[#21262D]">
            <div>
                <div className="flex mb-2 items-center">
                    <h1 className="text-[20px] text-[#2F81F7]">{repoName || "quizapp-reat"}</h1>
                    <p className="text-xs text-[#848D97] border border-[1px] border-[#30363D] px-2 rounded-3xl ml-4">{repoVisibility || "public"}</p>
                </div>
                <div className="flex text-xs text-[#848D97]">
                    <p className="">{language || "JavaScript"}</p>
                    <p className="ml-4">{updated_at || "Updated 2 weeks ago"}</p>
                </div>
            </div>
        </div>
    )
}

export default RepoCard;