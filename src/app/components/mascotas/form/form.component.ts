import { Component, OnInit } from '@angular/core';
import { MascotaService } from 'src/app/services/mascota.service';
import { Mascota } from 'src/app/models/mascota';
import { Router, ActivatedRoute } from '@angular/router';
//import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  item: Mascota = new Mascota();
  edit:boolean = false;
  titulo = 'Datos de la Mascota'
  
  constructor( private mascotaService: MascotaService,
    private router: Router, 
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      if (params.id) {
        this.edit=true;
        this.item.id = params.id;
        this.mascotaService.getItem(params.id).subscribe(
          a => {
            let mas:any;
            mas = a.payload.data();
            this.item = Object.assign({
              id:a.payload.id,
              nombre:mas.nombre,
              tipo:mas.tipo,
              color:mas.color,
            });
          });
      } else {
        this.edit=false;
      }
      
    });
  }
  
  Enviar() {
    if (this.edit) {
      this.mascotaService.updateMascota((String)(this.item.id),this.item);
    } else {
      this.mascotaService.addMascota(this.item);
    }
    this.router.navigate(['/']);
  }

  Cancelar() {
    this.router.navigate(['/'])
  }

}
