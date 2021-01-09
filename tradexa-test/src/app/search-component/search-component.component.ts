import { Component, OnInit } from "@angular/core";
import { TradexaService } from "./../services/tradexa.service";

@Component({
  selector: "app-search-component",
  templateUrl: "./search-component.component.html",
  styleUrls: ["./search-component.component.css"]
})
export class SearchComponentComponent implements OnInit {
  selectedUser = "";
  searchUser = "";
  constructor(public tradexaService: TradexaService) {
    this.tradexaService.selectedValue.subscribe(value => {
      this.selectedUser = value;
    });
  }

  ngOnInit() {}
}
