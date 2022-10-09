export interface Car {
  id?: Number | null;
  name: String;
  manafactureName: String;
  modelYear: String;
  transmission: String;
  color: String;
  bodyType: String;
  engineCapacity: Number;
}

export class CarClass implements Car {
  id?: Number | null;
  name: String;
  manafactureName: String;
  modelYear: String;
  transmission: String;
  color: String;
  bodyType: String;
  engineCapacity: Number;
  constructor(
    name: String,
    manfactureName: String,
    modelYear: String,
    transmission: String,
    color: String,
    bodyType: String,
    engineCapacity: Number
  ) {
    this.name = name;
    this.manafactureName = manfactureName;
    this.modelYear = modelYear;
    this.transmission = transmission;
    (this.color = color), (this.bodyType = bodyType);
    this.engineCapacity = engineCapacity;
  }
  
}
