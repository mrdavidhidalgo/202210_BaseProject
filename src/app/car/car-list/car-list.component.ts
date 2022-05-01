import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { CarService } from '../car.service';
@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars: Array<Car> = [];
  total_marcas = new Map<string, number>();

  constructor(private carService: CarService) { }

  getMarcas(): void {
    this.carService.getCars().subscribe((cars) => {
        this.cars = cars;
        this.getTotalMarcas();
    });
  }

  getTotalMarcas(): void{
    let result = new Map<string, number>()
    this.cars.forEach(car =>{
       result.set(car.marca, (result.get(car.marca) ?? 0) + 1)
    });
    this.total_marcas = result;

  }

  ngOnInit() {
    this.getMarcas()
  }

}
