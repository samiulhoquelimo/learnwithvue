<script setup>
import {onBeforeMount, ref} from "vue";
import router from "../router/index.js";

const searchField = ["title", "brand", "category", "description"];
const searchValue = ref();

const products = ref([])

onBeforeMount(() => {
  fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        products.value = data.products
      });
})

const headers = [
  {text: "Title", value: "title", sortable: true},
  {text: "Unit Price", value: "price", sortable: true},
  {text: "Stock", value: "stock", sortable: true},
  {text: "Brand", value: "brand", sortable: true},
  {text: "Category", value: "category", sortable: true},
  {text: "Rating", value: "rating", sortable: true},
  {text: "Action", value: "id"},
]

const showProduct = (product) => {
  router.push(`/product/${product.id}`)
};

</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div>
              <input placeholder="Search..." class="form-control mb-2 w-auto form-control-sm" type="text"
                     v-model="searchValue">
              <EasyDataTable
                  buttons-pagination alternating
                  :search-field="searchField"
                  :search-value="searchValue"
                  :headers="headers"
                  :items="products"
                  :rows-per-page="10">

                <template #item-id="product">
                  <button class="btn btn-success btn-sm" @click="showProduct(product)">View Details</button>
                </template>

              </EasyDataTable>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>