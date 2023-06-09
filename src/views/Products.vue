<template>
    <table class="table mt-4">
  <thead>
    <tr v-for="item in products" :key="item.id">
      <th width="120">{{item.category}}</th>
      <th>{{item.title}}</th>
      <th width="120">{{item.origin_price}}</th>
      <th width="120">{{item.price}}</th>
      <th width="100">{{item.is_enabled}}</th>
      <th width="200">編輯</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>分類</td>
      <td>標題</td>
      <td class="text-right">
        200
      </td>
      <td class="text-right">
        100
      </td>
      <td>
        <span class="text-success">啟用</span>
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
</template>

<script setup>
import { defineComponent } from 'vue';
import { UseProductStore } from '../stores/UseProductStore.js'

const productStore = UseProductStore();
productStore.getProducts();
console.log(productStore.products.value);
   

</script>