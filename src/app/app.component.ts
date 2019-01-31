import { Component, OnInit } from '@angular/core';

import { AccountsService } from './accounts.service' 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountsService]
})
export class AppComponent implements OnInit {
  accounts: {name: string, status: string}[] = [];

  constructor(private accountsService: AccountsService){}

  ngOnInit(){
    this.accounts = this.accountsService.accounts;
  }


  // onAccountAdded(newAccount: {name: string, status: string}) {
  //   //this.accounts.push(newAccount);
  //   this.accoutsServer.addAccount(newAccount.name, newAccount.status);
    
  // }

  // onStatusChanged(updateInfo: {id: number, newStatus: string}) {
  //   //this.accoutsServer.accounts[updateInfo.id].status = updateInfo.newStatus;
  //   this.accoutsServer.updateStatus(updateInfo.id, updateInfo.newStatus);
  }
}