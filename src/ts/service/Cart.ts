import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    totalPrice(): number {
        return this.items.reduce((total, element) => total + element.price, 0);
    }

    discountPrice(discount: number): number {
        return this.totalPrice() * ((100 - discount)/100);
    }

    delete(id: number): void {

        let index = this.items.findIndex((iteam: Buyable) => iteam.id === id);
        if (index !== -1) {
            this._items.splice(index, 1);
        }
    }
}