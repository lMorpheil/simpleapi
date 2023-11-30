<template>
    <div class="logo" v-if="isMainPage">
        <img src="../../assets/logo.svg" alt="logo">
    </div>
    <a href="/" v-else>
        <img src="../../assets/logo.svg" alt="logo">
    </a>
</template>

<script>
export default {
    name: "TheLogo",
    computed: {
        isMainPage: function() {
            return window.location.pathname === '/'
        }
    }
}
</script>

<style lang="scss">
    .logo {

        img {
            vertical-align: middle;
        }

        @media (max-width: 767px) {
            max-width: 154px;
        }
    }
</style>