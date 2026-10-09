export interface IProduct {
    id: number,
    slug:string,
    image:string,
    category:string,
    categoryNameBn:string,
    categoryIcon:string,
    unit:'kg'|'litre'|'dozen'|'piece',
    nameBn:string,
    today:number,
    yesterday:number
    change:  { 
        dir: 'up'|'down'|'flat',
        pct:number
    }
}