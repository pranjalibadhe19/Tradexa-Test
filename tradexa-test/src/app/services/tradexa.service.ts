import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TradexaService {
  constructor(private http: HttpClient) {}
  public searchUser="";
  public selectedValue: EventEmitter<any> = new EventEmitter();

  getUserList() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  public loadSelectedValue(value: any) {
    this.selectedValue.emit(value);
  }
}
