import Buyable from './Buyable';

export default class Movie implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly originalName: string,
        readonly isIMAX: boolean,
        readonly year: number,
        readonly country: Array<string>,
        readonly slogan: string,
        readonly genre: Array<string>,
        readonly duration: number,
        readonly price: number,
    ) { }
}