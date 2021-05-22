var app = new Vue({
  el: '#app',
  data: {
    brand: 'Vue Masterful',
    product: 'Socks',
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    selectedVariant: 0,
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: './assets/vmSocks-green.jpg',
        variantQuantity: 0,
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: './assets/vmSocks-blue.jpg',
        variantQuantity: 10,
      }
    ],
    cart: 0,
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    updateProduct(index) {
      this.selectedVariant = index
    },
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    },
    image() {
      return this.variants[this.selectedVariant].variantImage
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity > 0
    }
  }
})
