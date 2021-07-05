import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  foto = environment.foto
  nome = environment.nome

  constructor(
    private rota: Router
    ) { }

  ngOnInit() {
  }

  sair(){
    this.rota.navigate(['/entrar'])
    environment.token = ''
    environment.foto = ''
    environment.nome = ''
    environment.id = 0
  }
}
