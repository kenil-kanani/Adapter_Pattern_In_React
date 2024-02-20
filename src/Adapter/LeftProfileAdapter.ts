type LeftProfileAdapterProp = {
    avatarUrl: string,
    name: string,
    userName: string,
    followersCount: number,
    followingCount: number
}

export default class LeftProfileAdapter {
    private value: any;

    constructor(obj: any) {
        this.value = obj;
    }

    getAvatarUrl() {
        return this.value.avatar_url;
    }

    getUserName() {
        return this.value.login;
    }

    getFollowersCount() {
        return this.value.followers;
    }

    getFollowingCount() {
        return this.value.following;
    }

    adapt() {
        return {
            avatarUrl: this.getAvatarUrl(),
            name: this.value.name,
            userName: this.getUserName(),
            followersCount: this.getFollowersCount(),
            followingCount: this.getFollowingCount()
        }
    }
}