export interface ILanguages {
    languages: string[];
    hasTelepathy: boolean;
    telepathyRange: number;
    isMute: boolean;
}

export class Languages implements ILanguages {
    public languages: string[] = [];
    public hasTelepathy: boolean = false;
    public telepathyRange: number = 0;
    public isMute: boolean;

    constructor(languages: string[] = [], hasTelepathy: boolean = false, telepathRange: number = 0, isMute: boolean = false) {
        this.languages = languages;
        this.hasTelepathy = hasTelepathy;
        this.telepathyRange = telepathRange;
        this.isMute = isMute;
    }
}
