import { Component, OnInit } from '@angular/core';
import { TodoservService } from './todoserv.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
	selector: 'app-tasks',
	templateUrl: './tasks.component.html',
	styleUrls: [ './tasks.component.css' ],
	providers: [ TodoservService ]
})
export class TasksComponent implements OnInit {
	TODO = [];
	DoneTODO = [];
	title = '';
	isDone = 1;
	isEdit;
	titleupdate;
	id;
	message;

	constructor(private _todoser: TodoservService, private _router: Router) {}

	ngOnInit() {
		this.getTask();
		this.isEdit = false;
	}

	onEditClick(item) {
		this.isEdit = true;
		this.titleupdate = item.title;
		this.id = item._id;
	}

	onEditSubmit() {
		console.log(this.titleupdate);

		console.log(this.id);

		this._todoser.updateTitle(0, this.id, { title: this.titleupdate }).subscribe(
			(res) => {
				console.log(res), this.getTask();
				this.isEdit = false;
			},
			(err) => console.log(err)
		);
	}

	getTask() {
		this._todoser.getTasks().subscribe(
			(res) => {
				console.log(res);
				this.TODO = res.task;
			},
			(err) => {
				if (err instanceof HttpErrorResponse) {
					if (err.status === 401) {
						this._router.navigate([ '/login' ]);
					}
				}
			}
		);
	}
	//Done Tasks
	getTaskDone() {
		this._todoser.getTasksDone().subscribe(
			(res) => {
				console.log(res);
				this.DoneTODO = res.task;
			},
			(err) => console.log(err)
		);
	}
	//
	onAdd() {
		this._todoser.addTitle({ title: this.title }).subscribe(
			(res) => {
				console.log(res);
				this.title = '';
				this.getTask();
			},
			(err) => {
				if (err instanceof HttpErrorResponse) {
					if (err.status == 401) {
						this.message = 'should register befor make it or login with vaild data';
						this._router.navigate([ '/login' ]);
					}
				}
			}
		);
	}
	Doned(taskId, title) {
		this._todoser.Doned(1, taskId, title).subscribe(
			(res) => {
				console.log(res), this.getTask();
			},
			(err) => console.log(err)
		);
	}

	Delete(taskId) {
		this._todoser.deleteTask(taskId).subscribe(
			(res) => {
				console.log(res), this.getTask(), this.getTaskDone();
			},
			(err) => console.log(err)
		);
	}
	Edit(taskId, title) {
		this._todoser.Doned(0, taskId, title).subscribe(
			(res) => {
				console.log(res), this.getTask();
			},
			(err) => console.log(err)
		);
	}

	logOut() {
		localStorage.removeItem('token');
		this._router.navigate([ '/login' ]);
	}
}
