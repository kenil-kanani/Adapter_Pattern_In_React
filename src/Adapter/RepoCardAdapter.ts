import moment from 'moment';

export default class RepoCardAdapter {
    private value: any;

    constructor(obj: any) {
        this.value = obj;
    }

    getRepoName() {
        return this.value.name;
    }

    getRepoVisibility() {
        return this.value.visibility;
    }

    getUpdated_at() {
        return "Updated " + moment(this.value.updated_at).fromNow();
    }

    adapt() {
        return {
            repoName: this.getRepoName(),
            repoVisibility: this.getRepoVisibility(),
            language: this.value.language,
            updated_at: this.getUpdated_at()
        }
    }
}