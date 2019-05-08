import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TasksComponent } from './tasks/tasks.component';
import { AuthService } from './auth.service';
import { TokenInterceptorService } from './tasks/token-interceptor.service';
import { AuthGuard } from './login/auth.guard';

@NgModule({
	declarations: [ AppComponent, RegisterComponent, LoginComponent, TasksComponent ],
	imports: [ BrowserModule, AppRoutingModule, FormsModule, HttpClientModule ],
	providers: [
		AuthService,
		AuthGuard,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: TokenInterceptorService,
			multi: true
		}
	],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
