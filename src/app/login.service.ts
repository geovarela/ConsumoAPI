import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  setMostranenu(arg0: boolean) {
    throw new Error('Method not implemented.');
  }

  mostraMenu = new Subject <boolean> ();


  constructor() { }

  login(usuario:string, senha:string):void{
    if(usuario=="aluno" && senha == "1234"){
      localStorage.setItem('token', 'qwer1234');
      this.mostraMenu.next(false);
    }else{
      this.mostraMenu.next(true);
    }
  }

  setMostraMenu(valor: boolean){
    this.mostraMenu.next(valor);
  }

  getMostramenu(){
    return this.mostraMenu.asObservable();
  }

}
