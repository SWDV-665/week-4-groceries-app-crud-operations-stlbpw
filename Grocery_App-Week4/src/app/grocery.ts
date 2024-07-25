export class Grocery {
    name: string;
    quantity: number;
    category: string;
    price: number;
    unit: string;
  
    constructor(name: string, quantity: number, category: string, price: number, unit: string) {
        this.name = name;
        this.quantity = quantity;
        this.category = category;
        this.price = price;
        this.unit = unit;
    }
  
    getName(): string {
        return this.name;
    }
  
    getQuantity(): number {
        return this.quantity;
    }
  
    getCategory(): string {
        return this.category;
    }
  
    getPrice(): number {
        return this.price;
    }
  
    getUnit(): string {
        return this.unit;
    }

    setName(name: string) {
        this.name = name;
    }

    setQuantity(quantity: number) {
        this.quantity = quantity;
    }
}
