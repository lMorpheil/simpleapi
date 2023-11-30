<template>
    <div class="popup">
        <div class="popup__body">
            <button class="btn btn-close popup__close" @click.prevent="closeModal"></button>
            <div class="popup__content">
                <slot>
                    <AuthForm/>
                </slot>
            </div>
        </div>
    </div>
</template>

<script>

import AuthForm from "@/components/AuthForm/AuthForm";
export default {
    name: "ThePopup",
    components: {
        AuthForm
    },
    methods: {
        closeModal: function () {
            const modal = document.querySelector('.popup');
            modal.classList.remove('show')
            document.querySelector('body').classList.remove('hidden');
        }
    }
}
</script>

<style lang="scss">
    .popup {
        display: none;
        justify-content: center;
        align-items: center;
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 10, 13, 0.2);
        transition: opacity .3s;
        left: 0;
        top: 0;
        z-index: 9999;

        &.show {
            display: flex;
        }

        &__close {
            position: absolute;
            top: 20px;
            right: 20px;
            z-index: 1;

            @media (max-width: 767px) {
                top: 12px;
                right: 12px;
            }
        }

        &__body {
            position: relative;
            padding: 80px;
            background-color: #1B2F46;
            border-radius: 40px;
            width: 100%;
            max-width: 780px;
            min-height: 672px;

            @media (max-width: 1690px) {
                max-width: 594px;
                min-height: 632px;
                padding: 56px;
            }

            @media (max-width: 1365px) {
                max-width: 688px;
                min-height: 560px;
                padding: 56px;
            }

            @media (max-width: 767px) {
                display: flex;
                flex-direction: column;
                justify-content: center;
                width: calc(100% - 8px);
                min-height: calc(100% - 8px);
                padding: 24px 16px;
            }
        }
    }
</style>