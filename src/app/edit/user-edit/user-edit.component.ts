import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User = new User()
  idUser: number
  confirmarsenha: string
  tipoUser: string

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit(){
    window.scroll(0, 0)
    if (environment.token == '') {
      alert('Sua seção expirou, faça o login novamente')
      this.router.navigate(['/entrar'])
    }

    this.idUser = this.route.snapshot.params['id']
    this.findByIdUser(this.idUser)
  }

  validarSenha(event: any) {
    this.confirmarsenha = event.target.value
  }

  validarUser(event: any) {
    this.tipoUser = event.target.value
  }

atualizar(){
  this.user.tipo = this.tipoUser


  if (this.user.senha != this.confirmarsenha) {
    this.alertas.showAlertDanger('A senhas estão incorretas.')
  } else {
    this.authService.cadastrar(this.user).subscribe((resp: User) => {
      this.user = resp
      
      this.alertas.showAlertSuccess('Usuario atualizado com sucesso, faça o login novamente')
      environment.token = ''
      environment.foto = ''
      environment.nome = ''
      environment.id = 0
      this.router.navigate(['/entrar'])
    })
  }
}

findByIdUser(id: number){
  this.authService.getByIdUser(id).subscribe((resp: User) => {
    this.user = resp
  })
}

}
