<template>
  <div class="text-end">
    <button class="btn btn-primary" type="button" @click="openModal">新增產品</button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">分類</th>
        <th>標題</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="100">啟用</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in productStore.products" :key="item.id">
        <td>{{ item.category }}</td>
        <td>{{ item.title }}</td>
        <td class="text-right">
          {{ item.origin_price }}
        </td>
        <td class="text-right">
          {{ item.price }}
        </td>
        <td>
          <span class="text-success" v-if="item.is_enabled">啟用</span>
          <span class="text-muted" v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm">編輯</button>
            <button class="btn btn-outline-danger btn-sm">刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <ProductModal ref="tmpModal" :product="tempProduct" @update-product="updateProduct" />
</template>

<script setup>
import { ref } from 'vue'
import { UseProductStore } from '../stores/UseProductStore.js'
import ProductModal from '../components/ProductModal.vue'
import axios from 'axios'

const productStore = UseProductStore()
productStore.getProducts()

const tmpModal = ref(null)
const tempProduct = ref({})

//開啟modal
const openModal = () => {
  console.log('before open')
  tempProduct.value = {}
  tmpModal.value.showModal()
  console.log('after open')
}

// const hideModal = () => {
//   tempProduct.value = {}
//   tmpModal.value.hideModal()
// }

//更新產品資訊
const updateProduct = (item) => {
  tempProduct.value = item
  const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/admin/product`
  console.log(api)
  axios.post(api, { data: tempProduct.value }).then((res) => {
    console.log(res)
    tmpModal.value.hide()
    productStore.getProducts()
  })
}
</script>
