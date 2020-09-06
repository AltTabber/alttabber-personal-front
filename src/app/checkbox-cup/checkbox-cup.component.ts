import { Component, OnInit } from '@angular/core';
import { WeekData } from './classes/WeekData'

@Component({
  selector: 'app-checkbox-cup',
  templateUrl: './checkbox-cup.component.html',
  styleUrls: ['./checkbox-cup.component.scss']
})
export class CheckboxCupComponent implements OnInit {

  private birthDate: Date;
  private finalDate: Date;
  private weekList: Array<WeekData>;

  constructor() { }

  ngOnInit(): void {
    this.birthDate = new Date("October 19, 1992");
    this.finalDate = this.getDatePlusYears(this.birthDate, 70);
    this.weekList = new Array();
    var weekNumber = this.getWeeksBetweenYears(this.birthDate, this.finalDate);
    var weekNow = this.getWeeksBetweenYears(this.birthDate, new Date());
    console.log(this.birthDate + "  " + this.finalDate);
    console.log(weekNumber + "  " + weekNow);
    for (let index = 0; index < weekNumber; index++) {
      this.weekList.push(new WeekData((index > weekNow), true));
    }
  }

  private getDatePlusYears(startDate: Date, yearPlus: number) {
    var date = new Date(startDate);
    date.setFullYear(startDate.getFullYear() + yearPlus);
    return date;
  }

  private getWeeksBetweenYears(beforeDate: Date, afterDate: Date){
    console.log(afterDate.getTime() + "  " +  beforeDate.getTime())
    return Math.round((afterDate.getTime() - beforeDate.getTime())  / (7 * 24 * 60 * 60 * 1000))
  }

  public getWeekList(): Array<WeekData>{
    return this.weekList;
  }

}
