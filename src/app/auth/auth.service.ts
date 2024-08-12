import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { loginUrl, signupUrl } from '../../environments/environment.development';

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    constructor(private http: HttpClient, private cookieService: CookieService) { }


    login(credentials: { email: string; password: string }): Observable<any> {
        return this.http.post(loginUrl, credentials).pipe(
            map((response: any) => {
                if (response && response.data.token.token) {
                    this.cookieService.set('Authorization', response.data.token.token);
                }
                return response;
            })
        );
    }

    register(user: any): Observable<any> {
        return this.http.post(signupUrl, user);
    }
}


export interface User {
    fullName: string;
    email: string;
    password: string;
    contactNo: number;
    photoProof?: File;
}



