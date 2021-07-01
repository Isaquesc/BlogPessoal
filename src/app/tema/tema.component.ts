import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  constructor(
    private rota: Router
  ) { }

  ngOnInit(){
     if (environment.token == '') {
      alert('Sua seção expirou, faça o login novamente')
      this.rota.navigate(['/entrar'])
    }
  }
}
