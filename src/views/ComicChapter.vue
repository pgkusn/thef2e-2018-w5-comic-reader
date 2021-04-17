<template>
    <div class="container">
        <div class="view">
            <a href :class="{ disabled: active === 0 }" @click.prevent="switchPage(-1)">
                <i class="material-icons">keyboard_arrow_left</i>
            </a>
            <div class="view__area">
                <img :src="pages[active]" />
            </div>
            <a href :class="{ disabled: active === pages.length - 1 }" @click.prevent="switchPage(1)">
                <i class="material-icons">keyboard_arrow_right</i>
            </a>
        </div>
        <div class="thumb" ref="thumb">
            <a
                href
                v-for="(page, idx) in pages"
                :key="page"
                :class="{ active: active === idx }"
                :style="{ backgroundImage: `url(${page})` }"
                @click.prevent="jumpPage(idx)"
            ></a>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            pages: [],
            active: 0,
        }
    },
    watch: {
        active() {
            this.$nextTick(() => {
                let thumb = this.$refs.thumb;
                let thumbLink = thumb.querySelector('a.active');
                let thumbPos = thumb.offsetLeft;
                let thumbLinkPos = thumbLink.offsetLeft;
                let thumbWidth = thumb.offsetWidth;
                let thumbLinkWidth = thumbLink.offsetWidth;
                let targetPos = thumbLinkPos - thumbPos - thumbWidth / 2 + thumbLinkWidth / 2;
                thumb.scrollTo(targetPos, 0);
            });
        }
    },
    methods: {
        switchPage(val) {
            this.active += val;
        },
        jumpPage(val) {
            this.active = val;
        }
    },
    created() {
        axios.get(`http://localhost:3000/chapter/${this.$route.params.cid}`).then(res => this.pages = res.data.pages);
    }
}
</script>

<style lang="scss" scoped>
.container {
    height: calc(100vh - 100px);
}
.view {
    display: flex;
    flex-wrap: wrap;
    height: calc(100% - 155px);
    &__area {
        width: 80%;
        height: 100%;
        text-align: center;
        img {
            max-width: 100%;
            max-height: 100%;
        }
    }
    a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 10%;
        height: 100%;
        color: #000;
        text-decoration: none;
        &.disabled {
            opacity: 0.2;
            pointer-events: none;
        }
        &:hover {
            background-color: #eee;
        }
        i {
            font-size: 3em;
        }
    }
}
.thumb {
    display: flex;
    margin: 10px auto;
    width: 60%;
    height: 135px;
    overflow: auto;
    a {
        margin: 10px 1%;
        width: 70px;
        flex-shrink: 0;
        background-size: contain;
        background-position: 50%;
        border: 5px solid #fff;
        &.active {
            border-color: #222;
        }
    }
}
</style>