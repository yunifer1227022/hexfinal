<template>
<Navbar></Navbar>
<div class="container-fluid">
<RouterView />
</div>
</template>

<script setup>

import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Navbar from '../components/Navbar.vue';

const router = useRouter();
const token = ref(document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1'));
// console.log(token.value);

axios.defaults.headers.common.Authorization = token.value;

const api =`${import.meta.env.VITE_APP_API}api/user/check`;

axios.post(api)
    .then((res)=> {
        // console.log(res.data);
        if(!res.data.success) {
			router.push('/login');

        }
    })
    .catch((error)=> {console.log(error)})
</script>