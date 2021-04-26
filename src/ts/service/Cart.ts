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
        let total: number = 0;
        this.items.forEach(el => {
            total += el.price;
        });
        return total;
    }

    discountPrice(discount: number): number {
        return this.totalPrice() * ((100 - discount)/100);
    }

    delete(id: number): void {

        let index: number = this.items.findIndex((iteam: Buyable): boolean => iteam.id === id);
        if (index !== -1) {
            this._items.splice(index, 1);
        }
    }






}