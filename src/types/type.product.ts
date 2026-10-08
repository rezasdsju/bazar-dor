export interface IProduct {
    id: number,
    image:string,
    categoryNameBn:string
    unit:'kg'|'litre'|'dozen'|'piece',
    nameBn:string,
    today:number
    change:  { 
        dir: 'up'|'down'|'flat',
        pct:number
    }
}