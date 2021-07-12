import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal'
import { AlertasComponent } from '../alertas/alertas.component';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor(public bsModalService: BsModalService) { }

  private showAlert(msg: string, tipo: string){

    const bsAlert: BsModalRef = this.bsModalService.show(AlertasComponent)
    bsAlert.content.type = tipo
    bsAlert.content.message = msg

  }

  showAlertDanger(msg: string){
    this.showAlert(msg, 'danger')
  }

  showAlertSucess(msg: string){
    this.showAlert(msg, 'success')
  }

  showAlertInfo(msg: string){
    this.showAlert(msg, 'info')
  }

}
