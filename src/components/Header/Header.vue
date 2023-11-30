<template>
    <header class="header">
        <div class="row">
            <div class="header__grid">
                <TheLogo/>
                <button class="btn btn-auth" @click.prevent="openModal">Вход</button>
            </div>
        </div>
    </header>
</template>

<script>
import TheLogo from "@/components/Logo/Logo";

export default {
    name: 'TheHeader',
    components: {
        TheLogo,
    },
    data() {
        return {
            showModal: false,
        }
    },
    methods: {
        openModal: function () {
            const modal = document.querySelector('.popup');
            modal.classList.add('show')
            document.querySelector('body').classList.add('hidden');
        }
    }
}
</script>

<style lang="scss">
.header {

    &__grid {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 40px;
        padding-bottom: 40px;

        @media (max-width: 1690px) {
            padding-top: 20px;
            padding-bottom: 19px;
        }

        @media (max-width: 1365px) {
            padding-bottom: 61px;
        }

        @media (max-width: 767px) {
            padding-bottom: 40px;
        }
    }
}
</style>