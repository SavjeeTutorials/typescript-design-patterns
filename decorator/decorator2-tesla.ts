abstract class Car{
    public description: string;

    public getDescription() : string{
        return this.description;
    };

    public abstract cost(): number;
}

abstract class CarOptions extends Car{
    decoratedCar: Car;
    public abstract getDescription(): string;
}

// ------------------------------ Cars ------------------------------
class ModelS extends Car{
    public description = "Model S";

    public cost(): number {
        return 73000;
    }
}

class ModelX extends Car {
    public description = "Model X";

    public cost(): number {
        return 77000
    }
}

// ------------------------------ Options ------------------------------
class EnhancedAutoPilot extends CarOptions {
    constructor(car: Car) {
        super();
        this.decoratedCar = car;
    }

    public getDescription(): string {
        return this.decoratedCar.getDescription() + ', Enhanced Autopilot';
    }

    public cost(): number {
        return this.decoratedCar.cost() + 5000;
    }
}

class SmartAirSuspension extends CarOptions {
    constructor(car: Car) {
        super();
        this.decoratedCar = car;
    }

    public getDescription(): string {
        return this.decoratedCar.getDescription() + ', Smart Air Suspension';
    }

    public cost(): number {
        return this.decoratedCar.cost() + 2500;
    }
}

class RearFacingSeats extends CarOptions {
    constructor(car: Car) {
        super();
        this.decoratedCar = car;
    }

    public getDescription(): string {
        return this.decoratedCar.getDescription() + ', Rear Facing Seats';
    }

    public cost(): number {
        return this.decoratedCar.cost() + 4000;
    }
}

// ------------------------------ Configure our Tesla! ------------------------------
let myTesla = new ModelS();
myTesla = new SmartAirSuspension(myTesla);
myTesla = new RearFacingSeats(myTesla);

console.log(myTesla.cost());
console.log(myTesla.getDescription());
