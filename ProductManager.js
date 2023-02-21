class ProductManager {
    constructor() {
        this.products = []
    }

    addProduct = (title, description, price, thumbnail, code, stock,) => {
        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock: stock ?? 1,
            id: this.products.length + 1,
        }

        this.products.push(product)
    }

    getProducts = () => {
        console.log(this.products)
        return
    }

    getProductById = (productId) => {
      const productIndex = this.products.findIndex((product) => product.id === productsId)

      if(productIndex === -1) {
        console.log("Not found")
        return
      }
    }
}

const productManager = new ProductManager()

