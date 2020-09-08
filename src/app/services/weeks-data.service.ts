import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { WeekData } from './../checkbox-cup/classes/WeekData'
import { YearData } from './../checkbox-cup/classes/YearData'
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeeksDataService {

  private static weekData:WeekData[];

  constructor(private http: HttpClient) { }

  getWeeksData(): Observable<WeekData[]>{
    if(WeeksDataService.weekData == null){
      console.log("print from http");
      return this.http.get<WeekData[]>(environment.api_url + '/weeks/list');
    }else{
      console.log("print from memmory");
      return of(WeeksDataService.weekData);
    }
  }

  setWeeksData(weekData: WeekData[]){
    WeeksDataService.weekData = weekData;
  }

}
