<template>
    Dashboard
</template>

<script setup>

import axios from 'axios';
import { ref } from 'vue';

const token = ref(document.cookie.replace((/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')));
console.log(token.value);

axios.defaults.headers.common.Authorization = token;

const api =`${import.meta.env.VITE_APP_API}api/user/check`;

axios.post(api)
    .then((res)=> {
        console.log(res.data)
    })
    .catch((error)=> {console.log(error)})
</script>