import { Component, OnInit } from "@angular/core";
import { TradexaService } from "./../services/tradexa.service";

@Component({
  selector: "app-user-listing-component",
  templateUrl: "./user-listing-component.component.html",
  styleUrls: ["./user-listing-component.component.css"]
})
export class UserListingComponentComponent implements OnInit {
  userListing:any;
  constructor(public tradexaService: TradexaService) {}

  ngOnInit() {
    this.getUserListing();
  }

  getUserListing() {
    this.tradexaService.getUserList().subscribe(resp => {
      console.log(resp)
      this.userListing = resp;
    });
  }

  selectedValue(user){
    this.tradexaService.loadSelectedValue(user)
  }
}
