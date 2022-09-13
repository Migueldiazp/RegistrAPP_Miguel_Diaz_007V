import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-recuperacion',
  templateUrl: './recuperacion.page.html',
  styleUrls: ['./recuperacion.page.scss'],
})
export class RecuperacionPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }




 recupera = {
   
    rut: '',
    email:''
  }


  onSubmit(){
    console.log('submit');
    console.log(this.recupera);

  }
  async Recupera() {
    const alert = await this.alertController.create({
      header: 'RECUPERACION EXITOSA',
      message: 'SU CONTRASEÑA FUE ENVIADA AL CORREO REGISTRADO',
      buttons: ['ok'],
    });
  
    await alert.present();
  }
}
