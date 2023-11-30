<template>
    <section class="main-screen">
        <div class="row">
            <div class="main-screen__grid">
                <div class="main-screen__content">
                    <h1>
                        Мои заметки
                    </h1>
                    <div class="main-screen__subtitle">
                        Не забывай о важном, храни его в облаке.
                    </div>
                </div>
                <div class="main-screen__image">
                    <img src="../../assets/main-img.svg" alt="">
                </div>
            </div>

        </div>
    </section>
</template>

<script>
export default {
    name: 'MainScreen',
}
</script>

<style lang="scss">
    .main-screen {

        &__grid {
            display: flex;
            align-items: center;

            @media (max-width: 1365px) {
                flex-wrap: wrap;
            }
        }

        &__content {
            margin-bottom: 47px;

            @media (max-width: 1365px) {
                margin-bottom: 0;
            }
        }

        &__subtitle {
            margin-top: 40px;
            max-width: 470px;

            @media (max-width: 1365px) {
                text-align: center;
                max-width: none;
                margin-top: 20px;
            }

            @media (max-width: 767px) {
                font-family: Montserrat;
                font-size: 24px;
                font-style: normal;
                font-weight: 400;
                line-height: 36px; /* 150% */
            }
        }

        &__image {
            align-self: flex-end;
            
            img {
                display: block;
                max-width: none;

                @media (max-width: 1690px) {
                    max-width: 100%;
                }
            }

            @media (max-width: 1690px) {
                margin-left: 43px;
            }

            @media (max-width: 1365px) {
                margin-left: 0;
                padding-right: 64px;
                padding-left: 64px;
            }

            @media (max-width: 767px) {
                padding-right: 10px;
                padding-left: 10px;
                margin-top: 15px;
            }
        }

    }
</style>