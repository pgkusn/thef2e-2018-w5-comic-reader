<template>
    <div class="container" v-if="comic">
        <h3>{{comic.title}}</h3>
        <router-link
            :to="`/comics/${$route.params.id}/chapter/${chapter.id}`"
            v-for="(chapter, idx) in comic.chapters"
            :key="idx"
        >{{chapter.text}}</router-link>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            comic: null,
        }
    },
    created() {
        axios.get(`http://localhost:3000/detail/${this.$route.params.id}`).then(res => this.comic = res.data);
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