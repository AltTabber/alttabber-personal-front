export class WeekData{
    isEnded: boolean;
    isComplete: boolean;

    constructor(isEnded:boolean, isComplete:boolean){
        this.isComplete = isComplete;
        this.isEnded = isEnded;
    }
}