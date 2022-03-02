import { Component, OnInit } from '@angular/core';
import { MascotaService } from 'src/app/services/mascota.service';
import { Mascota } from 'src/app/models/mascota';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css']
})
export class MascotasComponent implements OnInit {

  mascotas: Mascota[] = [];

  constructor( private mascotaSer:MascotaService ) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.mascotaSer.allMascota().subscribe(data =>{
      this.mascotas = [];
      data.forEach((element: any) => {
        this.mascotas.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
    });
  }
  eliminar(id : string) {
    this.mascotaSer.delete(id).then(() => {
      console.log('Eliminado');
    }).catch( error => {
      console.log(error);
    })
  }

}
