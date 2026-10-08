export interface IProduct {
    id: number,
    image:string,
    unit:'kg'|'litre'|'dozen'|'piece',
    nameBn:string,
    today:number
    change:  { 
        dir: string,
        pct:number
    }
}