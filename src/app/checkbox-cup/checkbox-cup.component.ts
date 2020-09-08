import { Component, OnInit } from '@angular/core';
import { WeekData } from './classes/WeekData'
import { YearData } from './classes/YearData';
import { WeeksDataService } from './../services/weeks-data.service'

@Component({
  selector: 'app-checkbox-cup',
  templateUrl: './checkbox-cup.component.html',
  styleUrls: ['./checkbox-cup.component.scss']
})
export class CheckboxCupComponent implements OnInit {

  private birthDate: Date;
  private finalDate: Date;
  private weekList: Array<WeekData>;
  private yearList: Array<YearData>;

  private yearCount: number = 70;

  private weeksDataService: WeeksDataService;

  constructor(weeksDataService: WeeksDataService) {
    this.weeksDataService = weeksDataService;
  }

  ngOnInit(): void {

    this.weeksDataService.getWeeksData().subscribe( (weeksData) => {
      this.weekList = weeksData;
      this.yearList = new Array();
      var weekNumber = this.weekList.length;
      this.weeksDataService.setWeeksData(this.weekList);
    });

    
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
