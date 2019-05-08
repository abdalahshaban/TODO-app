import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: [ './register.component.css' ]
})
export class RegisterComponent implements OnInit {
	registerUserData = {};
	message;
	constructor(private _auth: AuthService, private _router: Router) {}

	ngOnInit() {}

	registerUser() {
		console.log(this.registerUserData);

		this._auth.registerUser(this.registerUserData).subscribe(
			(res) => {
				console.log(res);
				this._router.navigate([ '/login' ]);
			},
			(err) => {
				if (err instanceof HttpErrorResponse) {
					if (err.status == 400) {
						this.message = 'email and password required to make new account';
						this._router.navigate([ '/register' ]);
					}
				}
			}
		);
	}
}
