class ProductManager {
    constructor() {
        this.products = []
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {
        const products = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock: stock ?? 1
            id: this.products.length + 1,
        }

        this.products.push(products)
    }

    getProducts = () => {
        console.log(this.products)
        return
    }

    getProductById = (productId) => {
       this.products.findIndex(())
    }
}

const productManager = new ProductManager()

productManager.addProduct("conjunto", "lenceria mujer", 1500,)
productManager.addProduct("termo", "hermoso termo", 1500, 10)
productManager.getProducts()