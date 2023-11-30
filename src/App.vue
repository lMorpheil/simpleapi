<template>
    <div class="app">
        <TheHeader/>
        <MainScreen/>
        <ThePopup/>
    </div>
</template>

<script>
import TheHeader from "@/components/Header/Header";
import MainScreen from "@/components/MainScreen/MainScreen";
import ThePopup from "@/components/Popup/Popup";

export default {
    name: 'App',
    components: {
        TheHeader,
        MainScreen,
        ThePopup,
    },
}
</script>

<style lang="scss">
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

img {
    height: auto;
    max-width: 100%;
}

html,
body {
    overflow-x: hidden;
    font-family: Montserrat;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 48px;
    color: #9DA5AF;

    &.hidden {
        overflow: hidden;
    }
}

h1 {
    font-family: Montserrat;
    font-size: 104px;
    font-style: normal;
    font-weight: 900;
    line-height: 104px;
    color: #fff;

    @media (max-width: 1690px) {

    }

    @media (max-width: 1365px) {
        text-align: center;
    }
    
    @media (max-width: 767px) {
        text-align: center;
        /* h1-mob */
        font-family: Montserrat;
        font-size: 60px;
        font-style: normal;
        font-weight: 900;
        line-height: 64px; /* 106.667% */
    }
}

h2 {
    font-family: Montserrat;
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: 72px; /* 150% */
    color: #fff;
    
    @media (max-width: 767px) {
        font-family: Montserrat;
        font-size: 32px;
        font-style: normal;
        font-weight: 600;
        line-height: 36px; /* 112.5% */
        text-align: left;
    }
}

.row {
    max-width: 1600px;
    padding-right: 160px;
    padding-left: 160px;
    margin-right: auto;
    margin-left: auto;
    box-sizing: content-box;

    @media (max-width: 1690px) {
        padding-right: 80px;
        padding-left: 80px;
    }

    @media (max-width: 1365px) {
        padding-right: 40px;
        padding-left: 40px;
    }

    @media (max-width: 767px) {
        padding-right: 20px;
        padding-left: 20px;
    }
}

.app {
    background-color: #0A1F38;
}

.btn {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 32px;
    background-color: #B1C909;
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px;
    width: 100%;
    min-height: 56px;
    color: #fff;
    cursor: pointer;
    /*ToDo: Вынести ширину в миксины мест где вставляются*/
    max-width: 144px;

    &:hover {
        background-color: #97AB0D;
        transition: all linear 0.3s;
    }

    &:active {
        background-color: #819400;
        transition: all linear 0.3s;
    }

    &:disabled {
        background-color: #9DA5AF;
    }

    &-auth {

        &::before {
            content: '';
            display: block;
            width: 32px;
            height: 32px;
            flex-shrink: 0;
            margin-right: 12px;
            background-image: url("./assets/auth-icon.svg");
            background-size: 100% auto;
            background-position: center;
            background-repeat: no-repeat;
        }
    }

    &-close {
        width: 56px;
        height: 56px;
        border-radius: 50%;

        &::before {
            content: '';
            display: block;
            width: 16px;
            height: 16px;
            flex-shrink: 0;
            background-image: url("./assets/close-icon.svg");
            background-size: 100% auto;
            background-position: center;
            background-repeat: no-repeat;
        }
    }
}

.link {
    color: #B1C909;
    text-overflow: ellipsis;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px; /* 155.556% */
    cursor: pointer;
    text-decoration: none;
    
    @media (max-width: 767px) {
        font-size: 14px;
        line-height: 24px; /* 171.429% */
    }

    &:hover {
        color: #fff;
        transition: all linear 0.3s;
    }
}

.form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    
    @media (max-width: 767px) {
        margin-top: 28px;
    }

    &__input {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;

        &:first-child {
            margin-bottom: 24px;
            
            @media (max-width: 767px) {
                margin-bottom: 16px;
            }
        }
    }

    &__label {
        color: #9DA5AF;
        text-overflow: ellipsis;
        font-family: Montserrat;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 28px; /* 155.556% */
        margin-bottom: 8px;
        margin-left: 25px;
    }

    &__wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 40px;
        width: 100%;

        @media (max-width: 767px) {
            flex-direction: column-reverse;
            margin-top: 28px;
        }

        .btn {
            display: inline-block;
            max-width: none;
            width: auto;
            padding-right: 24px;
            padding-left: 24px;

            @media (max-width: 767px) {
                max-width: none;
            }
        }
    }

    &__error {
        color: #FF7461;
        text-overflow: ellipsis;
        font-family: Montserrat;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 28px; /* 155.556% */
        display: none;
    }

    &__notice {
        display: none;
        border-radius: 24px;
        padding: 8px 20px;
        background-color: rgba(255, 116, 97, 0.1);

        color: #FF7461;
        text-overflow: ellipsis;
        /* Text-small */
        font-family: Montserrat;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 28px; /* 155.556% */
        margin-top: 20px;
        width: 100%;
    }
}

.input {
    padding-right: 25px;
    padding-left: 25px;
    border-radius: 36px;
    color: #0A1F38;
    text-overflow: ellipsis;
    white-space: nowrap;
    /* Text-small */
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 155.556% */
    width: 100%;
    min-height: 72px;
    border: 2px solid transparent;

    &::placeholder {
        color: #9DA5AF;
        text-overflow: ellipsis;
        font-family: Montserrat;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 28px; /* 155.556% */
    }

    &:hover {
        border: 2px solid #B1C909;
        transition: all linear 0.3s;
    }

    &:focus {
        border: 2px solid #B1C909;
        transition: all linear 0.3s;
    }
}
</style>
