Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true,
    }
  },
  template: `
  <div class="product">
      <div class="product-image">
          <img :src="image">
      </div>
      <div class="product-info">
          <h1>{{ title }}</h1>
          <p v-if="inStock">In Stock</p>
          <p v-else :class="{ lineThrough: !inStock }">Out of Stock</p>
          <p>Shipping: {{ shipping }} </p>

          <ul>
          <li v-for="detail in details">{{ detail }}</li>
          </ul>

          <div v-for="(variant, index) in variants" :key="variant.variantId" class="color-box"
          :style="{ backgroundColor: variant.variantColor }" @mouseover="updateProduct(index)">
          </div>

          <button v-on:click="addToCart" :disabled="!inStock" :class="{ disabledButton: !inStock }">
          Add to Cart</button>
          <div class="cart">
          <p>Cart({{ cart }})</p>
          </div>
      </div>
  </div>
  `,
  data() {
    return {
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
      premium: false,
    }
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
    },
    shipping() {
      if (this.premium) {
        return "Free"
      } else {
        return "$2.99"
      }
    }
  }
})


var app = new Vue({
  el: '#app',
})
