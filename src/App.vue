<template>
    <div class="app">
        <h1 class="title">
            <a href @click.prevent="$router.go(-1)" v-show="$route.path !== '/comics'">
                <i class="material-icons">keyboard_arrow_left</i>
            </a>
            AlexOtakuWhat
        </h1>
        <main>
            <transition name="fade" mode="out-in">
                <router-view />
            </transition>
        </main>
        <footer>Alex宅幹嘛 X 六角學院</footer>
    </div>
</template>

<script>
import 'normalize.css';
export default {

}
</script>

<style lang="scss">
.app {
    display: flex;
    flex-direction: column;
    height: 100vh;
}
.title,
footer {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #fff;
    background-color: #222;
}
.title {
    position: relative;
    margin: 0;
    a {
        position: absolute;
        top: 50%;
        left: 20px;
        transform: translateY(-50%);
        color: #fff;
    }
    i {
        display: block;
        font-size: 1.5em;
    }
}
main {
    flex-grow: 1;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>