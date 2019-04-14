import {AlertService, AuthenticationService, UserService} from "@app-core/_services";
import {AuthGuard} from "@app-core/_guards";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {ErrorInterceptor, JwtInterceptor} from "@app-core/_helpers";
import {AlertComponent} from "@app-core/_directives/alert/alert.component";

export const CORE_SERVICES = [
  AuthGuard,
  AlertService,
  AuthenticationService,
  UserService,
  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
];


export const CORE_DIRECTIVES = [
  AlertComponent
]
