<template>
    <div class="container">
        <router-link
            :to="{ name: 'comicDetail', params: { id: item.id } }"
            v-for="item in list"
            :key="item.id"
        >{{item.title}}</router-link>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            list: [],
        }
    },
    created() {
        axios.get('http://localhost:3000/comics').then(res => this.list = res.data);
    }
}
</script>

<style scoped>
.container {
    padding: 0 20px;
}
a + a {
    margin-left: 0.5em;
}
</style>