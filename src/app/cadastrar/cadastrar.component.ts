import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  user: User = new User;
  confirmarsenha: string;
  tipoUser: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }

  validarSenha(event: any) {
    this.confirmarsenha = event.target.value
  }

  validarUser(event: any) {
    this.tipoUser = event.target.value
  }

  cadastrar() {
    this.user.tipo = this.tipoUser


    if (this.user.senha != this.confirmarsenha) {
      this.alertas.showAlertDanger('A senhas estão incorretas.')
    } else {
      this.authService.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/entrar'])
        this.alertas.showAlertSuccess('Usuario cadastrado com sucesso')
      })
    }
  }
}
