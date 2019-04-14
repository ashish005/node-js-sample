import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {environment} from "@app-environments/environment";
import {User} from "@app-core/_models/user";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(`${environment.apiUrl}/api/users`);
  }

  getById(id: number) {
    return this.http.get(`${environment.apiUrl}/api/users/` + id);
  }

  update(user: User) {
    return this.http.put(`${environment.apiUrl}/api/users/` + user.id, user);
  }

  delete(id: number) {
    return this.http.delete(`${environment.apiUrl}/api/users/` + id);
  }

  register(user: User) {
    return this.http.post(`${environment.apiUrl}/auth/signup`, user);
  }
}
