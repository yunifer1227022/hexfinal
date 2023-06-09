
import { ref,reactive, computed } from 'vue'
import axios from 'axios';
import { useRouter } from 'vue-router';
import { defineStore } from 'pinia'


export const UseProductStore = defineStore('products', () => {
  const products = ref([]);
  const pagination = ref({});

  function getProducts() {

    const api =`${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/admin/products`;
    // console.log(api);
    axios.get(api)
        .then((res)=> {
          if(res.data.success) {
            console.log(res.data);
            products.value = res.data.products;            ;
            pagination.value = res.data.pagination;
            console.log(products.value);
            console.log(pagination.value);
          }
        })
		    .catch((error)=> {console.log("getProducts err",error)})
  }

  return {
    products,
    pagination,
    getProducts
  }
});
