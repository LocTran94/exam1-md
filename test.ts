class Product {
    private _name:string
    private _id:number
    private _price:number
    private _amount:number
    private _brand:string
     constructor(name:string,price:number,quatiti:number,brand:string,id:number) {
        this._name = name
        this._id = id
         this._price = price
         this._amount =quatiti
         this._brand = brand
     }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get amount(): number {
        return this._amount;
    }

    set amount(value: number) {
        this._amount = value;
    }

    get brand(): string {
        return this._brand;
    }

    set brand(value: string) {
        this._brand = value;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }
}


class ManageProduct {
     listProduct: Product [] = []
    add (product:Product){
         this.listProduct.push(product)
    }

    display(){
         console.table(this.listProduct)
    }

    edit(id:number,  element:Product){
         for (let i = 0; i < this.listProduct.length; i++ ){
             if (this.listProduct[i].id == id){
                 this.listProduct.splice(i,1,element)
             }
         }
    }

    remove(id:number){

        for (let i = 0; i < this.listProduct.length; i++) {
            if (this.listProduct[i].id == id) {
                this.listProduct.splice(i, 1)
            }
        }

        return this.listProduct
    }


    findByPrice(a:number, b:number){
         let x: Product [] = this.listProduct.filter(element=>
             a < element.price && element.price < b)
                 console.table(x)
             }




    findByBrand(brand:string){
        let c: Product [] = this.listProduct.filter(element=>element.brand ==  brand)
                console.table(c)


    }
    sortMinMax(){
     let y:Product [] = this.listProduct.sort((a:Product,b:Product)=>a.price - b.price)
        return y
    }

    sortMaxMin(){
        console.table(this.sortMinMax().reverse())
    }


    sortMaxMinQuatiti(){
        console.table((this.listProduct.sort((a:Product,b:Product)=>a.amount - b.amount)).reverse())
    }



    findinclue(lo:string){
      return   this.listProduct.filter(element=> element.name.toLowerCase().includes('lo',0))
    }

}


let a = new Product('loc', 50,10,'iphone',1)
let b = new Product('linh', 30,40,'samsung',2)
let x = new ManageProduct()
x.add(a)
x.add(b)
x.display()
x.findByPrice(10,60)
x.sortMinMax()
x.sortMaxMin()
x.sortMaxMinQuatiti()
x.findByBrand('iphone')
console.table(x.findinclue('lo'))
