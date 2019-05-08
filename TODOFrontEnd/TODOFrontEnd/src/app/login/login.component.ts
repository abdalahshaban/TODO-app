import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
	loginUserData = {};
	message;
	constructor(private _auth: AuthService, private _router: Router) {}

	ngOnInit() {}

	loginUser() {
		this._auth.loginUser(this.loginUserData).subscribe(
			(res) => {
				console.log(res);
				if (res.token === 'undefined') {
					this._router.navigate([ '/login' ]);
				}
				localStorage.setItem('token', res.token);
				this._router.navigate([ '/tasks' ]);
			},
			(err) => {
				if (err instanceof HttpErrorResponse) {
					if (err.status == 400) {
						this.message = 'login with vaild data OR Register if you New';
						this._router.navigate([ '/login' ]);
					}
				}
			}
		);
	}
}
