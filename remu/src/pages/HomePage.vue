<script setup>
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()

const goDO = () => {
    router.push('/do')
}
    
</script>
<template>
    <div>
        <h1>Home | Remuneraciones</h1>
        <!-- <button @click="goDO">Ir a DO</button> -->
    </div>
    <!-- <router-link to="/do" class="nav-link">DO</router-link> -->
</template>

<style>

</style>