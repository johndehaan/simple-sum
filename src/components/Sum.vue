<template>
  <div v-on:click="calcSum">
    <h1>Simple Sum</h1>
    <div v-for="product in products" :key="product.name">
      <button id="plus-button" v-on:click="product.quantity += 1">
        {{product.name}} ({{product.price}} RMB): {{product.quantity}}
      </button>
      <button id="minus-button" v-on:click="product.quantity -= 1">-</button>
    </div>
    <br/>
    <div v-if="!addingProduct">
      <button v-on:click="addProductStart">Add new product</button>
    </div>
    <div id="add-product" v-if="addingProduct">
      Name: <input v-model="newProduct.name" placeholder="Name"/><br/>
      Price: <input type="number" v-model="newProduct.price" placeholder="Price"/><br/>
      <button v-on:click="addProductDone">Add</button>
    </div>
    <br/>
    <div>Sum:</div>
    <div id="sum">{{sumtotal}} RMB</div>
    <button id="reset-button" v-on:click="clear">Reset</button>
  </div>
</template>

<script>
export default {
  name: 'Sum',
  data () {
    return {
      products: [
        {
          name: 'Juice',
          price: 10,
          quantity: 0
        },
        {
          name: 'Coffee',
          price: 20,
          quantity: 0
        },
        {
          name: 'Cake',
          price: 25,
          quantity: 0
        },
        {
          name: 'Cinnamon bun',
          price: 25,
          quantity: 0
        },
        {
          name: 'Pizza slice',
          price: 25,
          quantity: 0
        },
        {
          name: 'Waffle',
          price: 30,
          quantity: 0
        },
        {
          name: 'Soup',
          price: 60,
          quantity: 0
        }
      ],
      sumtotal: 0,
      addingProduct: false,
      newProduct: {
        name: '',
        price: 0,
        quantity: 0
      }
    }
  },
  methods: {
    calcSum: function (event) {
      this.sumtotal = 0
      for (let idx = 0; idx < this.products.length; idx++) {
        this.sumtotal += this.products[idx].price * this.products[idx].quantity
      }
    },
    clear: function (event) {
      for (let idx = 0; idx < this.products.length; idx++) {
        this.products[idx].quantity = 0
      }
      this.sumtotal = 0
    },
    addProductStart: function (event) {
      this.addingProduct = true
    },
    addProductDone: function (event) {
      this.products.push(this.newProduct)
      this.newProduct = {
        name: '',
        price: 0,
        quantity: 0
      }
      this.addingProduct = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#plus-button {
  width: 85%;
  font-size:        1.35em;
  text-align:       center;
  padding:          0.5em;
}

#minus-button {
  width:            10%;
  font-size:        1.35em;
  padding:          0.5em 0em;
}

#add-product {
  font-size:        1.35em;
}

#sum {
  font-size:        4em;
}

#reset-button {
  font-size:        1.5em;
}
</style>
