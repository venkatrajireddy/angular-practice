import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';
import { LoginComponent } from "./login/login.component";
import { InMemoryDataService } from './data.service';
import { UserserviceService } from './userservice.service';
 
@Component({
  selector: 'app-root',
   imports: [CommonModule, LoginComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-practice';
  users: any[] = [];

  constructor(private userserviceService: UserserviceService) { }

  ngOnInit() {
    this.userserviceService.getUsers().subscribe(data => {
      this.users = data;
    });
  }
}
