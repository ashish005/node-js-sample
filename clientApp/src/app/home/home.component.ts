import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import {UserService} from "@app-core/_services";
import {User} from "@app-core/_models/user";

@Component({templateUrl: 'home.html'})
export class HomeComponent implements OnInit {
  currentUser: User;
  users: User[] = [];

  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  deleteUser(id: number) {
    this.userService.delete(id).pipe(first()).subscribe(() => {
      this.loadAllUsers()
    });
  }

  private loadAllUsers() {
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.users = users;
    });
  }

  updateFirebaseCredit(user: User){

  }

  updateDatabaseCredit(user: User){

  }
}
