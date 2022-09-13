import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }




  registro = {
    nombre: '',
    apellido: '',
    rut: '',
    email: '',
    password:''
  }


  onSubmit(){
    console.log('submit');
    console.log(this.registro);

  }
  async Registrar() {
    const alert = await this.alertController.create({
      header: 'REGISTRO EXITOSO',
      message: 'GRACIAS POR ELEGIR REGISTRAPP <BR> TU ASISTENCIA FÁCIL',
      buttons: ['ok'],
    });
  
    await alert.present();
  }
}
