import { Component, OnInit, Input } from '@angular/core';
import { ConsumirMovilidadService } from 'app/services/consumir-movilidad.service';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-convocatoria',
  templateUrl: './convocatoria.component.html',
  styleUrls: ['./convocatoria.component.scss']
})
export class ConvocatoriaComponent implements OnInit {
 
  flight: FormGroup ;
  formBuilder: any;
  router: any;
  constructor(public rest: ConsumirMovilidadService) { }

  ngOnInit() {

    this.flight = this.formBuilder.group({
      first_name: ["", Validators.required],
      last_name: ["", Validators.required],
      place_flight: ["", Validators.required],
      date_flight: ["", Validators.required]
    });
  }


  addProduct() {
    this.rest.addProduct(this.flight.value).subscribe(
      result => {
        this.router.navigate(["/crearConv"]);
      },
      err => {
        console.log(this.flight);
        console.log(err);
      }
    );

    }
  }
