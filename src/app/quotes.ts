export class Quotes {
  showDescription: boolean;
  constructor(public id: number, public name: string,
     public author: string, public quotes: string, public completeDate: Date, public upvote: number, public downvote: number) {
    this.showDescription = false;
  }
}
