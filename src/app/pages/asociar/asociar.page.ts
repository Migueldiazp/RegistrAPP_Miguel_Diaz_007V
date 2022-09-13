import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-asociar',
  templateUrl: './asociar.page.html',
  styleUrls: ['./asociar.page.scss'],
})
export class AsociarPage implements OnInit {


  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }




  nuevo = {
    nombre: '',
    apellido: '',
    rut: '',
    email: '',
    seccion: '',
   
  }


  onSubmit(){
    console.log('submit');
    console.log(this.nuevo);

  }
  async RegistroA() {
    const alert = await this.alertController.create({
      header: 'NUEVO ALUMNO',
      message: 'SE A REGISTRADO UN NUEVO ALUMNO DE MANERA EXITOSA EN LA CLASE',
      buttons: ['ACEPTAR'],
    });
  
    await alert.present();
  }

}

