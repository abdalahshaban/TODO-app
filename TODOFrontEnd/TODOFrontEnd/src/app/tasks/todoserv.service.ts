import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class TodoservService {
	//add delete edit get
	// private _todoUrl = 'http://localhost:3000/';
	// private _todoUrl = '';
	constructor(private http: HttpClient) {}

	addTitle(body) {
		let headers = new HttpHeaders();
		headers.append('Content-Type', 'application/json');
		console.log(headers);

		console.log(body);
		// return this.http.post<any>(this._todoUrl + 'add', body, { headers: headers });
		return this.http.post<any>('add', body, { headers: headers });
	}

	getTasks() {
		// return this.http.get<any>(this._todoUrl + 'task');
		return this.http.get<any>('task');
	}

	getTasksDone() {
		// return this.http.get<any>(this._todoUrl + 'task/' + 'done');
		return this.http.get<any>('task/' + 'done');
	}
	getTasksAll() {
		// return this.http.get<any>(this._todoUrl + 'taskAll');
		return this.http.get<any>('taskAll');
	}
	// updateTask(){
	//   return this.http.put(this._todoUrl+'taskAll');
	// }
	deleteTask(taskId) {
		// return this.http.delete(this._todoUrl + taskId);
		return this.http.delete(taskId);
	}

	Doned(key, taskId, title) {
		// server.put('/update/:done/:taskId'
		// return this.http.put(this._todoUrl + 'update/' + key + '/' + taskId, title);
		return this.http.put('update/' + key + '/' + taskId, title);
	}
	updateTitle(key, taskId, title) {
		console.log(title);
		// server.put('/update/:done/:taskId'
		// return this.http.put(this._todoUrl + 'update/' + key + '/' + taskId, title);
		return this.http.put('update/' + key + '/' + taskId, title);
	}
}
