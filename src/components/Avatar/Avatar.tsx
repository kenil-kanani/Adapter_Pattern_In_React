
type AvatarProps = {
    avatarUrl?: string
}

const Avatar = ({ avatarUrl }: AvatarProps) => {
    return (
        <div className="avatar">
            <div className="w-72 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={avatarUrl || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
            </div>
        </div>
    )
}

export default Avatar