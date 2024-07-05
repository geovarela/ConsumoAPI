import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'LH Games';
  mostrarMenu: boolean = true;

  constructor(private _loginService: LoginService){}
  
  ngOnInit(): void {
    this._loginService.getMostramenu().subscribe(
      res => { this.mostrarMenu = res; }
    )
  }
  ngOndestroy(){
    localStorage.clear();
  }
}
