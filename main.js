var app = new Vue({
  el: '#app',
  data: {
    brand: 'Vue Masterful',
    product: 'Socks',
    inStock: false,
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    selectedVariant: 0,
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: './assets/vmSocks-green.jpg',
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: './assets/vmSocks-blue.jpg',
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
    }
  }
})
