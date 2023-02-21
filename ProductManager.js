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
        let prod = this.products.find(prod => prod.id === productId)
        if (prod) {
            console.log(prod)
        } else {
            console.log("not found")
        }
    }
    }

const productManager = new ProductManager()
