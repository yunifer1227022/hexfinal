
import { ref, computed } from 'vue'
import axios from 'axios';
import { useRouter } from 'vue-router';
import { defineStore } from 'pinia'

// export const useAlertsStore = defineStore('alerts', {
// 


export const UseProductStore = defineStore('products', () => {
  const products = ref([]);
  const pagination = ref({});
  const router = useRouter();


  function getProducts() {

    const api =`${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/admin/products`;
    console.log(api);
    axios.get(api)
        .then((res)=> {
          // if(res.data.success) {
          //   console.log(res.data)
          // }
          console.log("getProducts res", res);
        })
		    .catch((error)=> {console.log("getProducts err",error)})
  }
  getProducts();

  return {
    products,
    pagination,
    getProducts
  }
});
