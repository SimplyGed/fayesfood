export class Receipe {

    public Title: string;
    public Created: Date;
    public Rating: number;

    public Source: string;
    public Page: number;
    public MainIngredients: string[];

    /**
     *
     */
    constructor(title: string) {
        this.Title = title;
        this.Created = new Date(Date.now());
    }
}
