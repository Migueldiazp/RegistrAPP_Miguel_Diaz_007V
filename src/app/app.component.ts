import { Component } from '@angular/core';

interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}


  componentes : Componente[] = [

    { 

      icon: 'clipboard-outline',
      name: 'Asistencias',
      redirecTo: '/info'
    },
    {
      icon: 'qr-code-sharp',
      name: 'Leer Asistencia QR',
      redirecTo: '/captura'
    },
    {
      icon: 'information',
      name: 'REGISTRAPP INFO',
      redirecTo: '/registrapp'
    },   
 
  ];

  componentes2 : Componente[] = [

    { 

      icon: 'clipboard-outline',
      name: 'Asistencias',
      redirecTo: '/info'
    },
 
    {
      icon: 'information',
      name: 'REGISTRAPP INFO',
      redirecTo: '/registrapp'
    },   
 
  ];
  



}
