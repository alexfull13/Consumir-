import { Component, OnInit } from '@angular/core';
import { ConsumirMovilidadService } from 'app/services/consumir-movilidad.service';

@Component({
  selector: 'app-movilidad',
  templateUrl: './movilidad.component.html',
  styleUrls: ['./movilidad.component.scss']
})
export class MovilidadComponent implements OnInit {

  plan: any = [];
  planmovi: any = [];

  constructor(public rest: ConsumirMovilidadService) { }

  ngOnInit() {
    this.getPlan();
    this.getPlanMovi();
  }


  getPlan() {
    this.plan = [];
    this.rest.getPlan().subscribe((data: {}) => {
      console.log(data);
      this.plan = data;
    });
  }



  getPlanMovi() {
    this.planmovi = [];
    this.rest.getPlanMovi().subscribe((data: {}) => {
      console.log(data);
      this.planmovi = data;
    });
  }



}




