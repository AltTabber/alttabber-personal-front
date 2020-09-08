export class WeekData{
    containsData: boolean;
    passed: boolean;
    dateStart: Date;
    dateEnd: Date;

    constructor(containsData:boolean, passed:boolean){
        this.passed = passed;
        this.containsData = containsData;
    }
}