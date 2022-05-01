/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker }  from '@faker-js/faker';
import {  HttpClientTestingModule } from '@angular/common/http/testing';

import { CarListComponent } from './car-list.component';
import { Car } from '../car';

describe('CarListComponent', () => {
  let component: CarListComponent;
  let fixture: ComponentFixture<CarListComponent>;
  let debug: DebugElement;
  let marca: string;
  let another_marca: string;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarListComponent ],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    marca = "mazda"
    another_marca = "renault"

    component.cars = [
      new Car(
        faker.datatype.number(),
        marca,
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.image.imageUrl(),
        faker.datatype.number(),
        faker.datatype.number()
      ),
      new Car(
        faker.datatype.number(),
        marca,
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.image.imageUrl(),
        faker.datatype.number(),
        faker.datatype.number()
      ),
      new Car(
        faker.datatype.number(),
        another_marca,
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.image.imageUrl(),
        faker.datatype.number(),
        faker.datatype.number()
      )
    ];
    component.getTotalMarcas();
    fixture.detectChanges();
    debug = fixture.debugElement;

  });

  it('should have a table with 3 elements with thead', () => {

    const compiled = fixture.nativeElement as HTMLElement;
    //assert table head
    expect(debug.queryAll(By.css('thead tr th')).length).toEqual(4);
    expect(compiled.querySelectorAll('thead tr th')[0]?.textContent).toEqual("#");
    expect(compiled.querySelectorAll('thead tr th')[1]?.textContent).toEqual("Marca");
    expect(compiled.querySelectorAll('thead tr th')[2]?.textContent).toEqual("Linea");
    expect(compiled.querySelectorAll('thead tr th')[3]?.textContent).toEqual("Modelo");
    //assert table body
    expect(debug.queryAll(By.css('tbody tr')).length).toEqual(3);

    component.cars.forEach((car, index)=>{
      let i =index+1
      expect(compiled.querySelector('tbody tr th.th'+i)?.textContent).toEqual(String(index+1));
      expect(compiled.querySelectorAll('tbody tr td.td'+i)[0]?.textContent).toEqual(car.marca);
      expect(compiled.querySelectorAll('tbody tr td.td'+i)[1]?.textContent).toEqual(car.linea);
      expect(compiled.querySelectorAll('tbody tr td.td'+i)[2]?.textContent).toEqual(String(car.modelo));

    })
  });

  it('should have a resume aggregate of sum of marca', () => {

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelectorAll('div.total')[0]?.textContent)
      .toEqual("Total mazda: 2");

    expect(compiled.querySelectorAll('div.total')[1]?.textContent)
      .toEqual("Total renault: 1");

  });


});
