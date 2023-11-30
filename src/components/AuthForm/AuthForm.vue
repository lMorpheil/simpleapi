<template>
    <aside class="auth-form">
        <h2>{{ isSignInForm ? 'Вход в ваш аккаунт' : 'Регистрация' }}</h2>
        <form class="form auth-form__form" action="" method="post" v-on="{ submit: isSignInForm ? login : signUp }">
            <label class="form__input">
                <span class="form__label">Email</span>
                <input class="input" :placeholder="placeholder" type="text">
                <span class="form__error">Сообщение об ошибке</span>
            </label>
            <label class="form__input">
                <span class="form__label">Пароль</span>
                <input class="input" placeholder="Введите пароль" type="text">
                <span class="form__error">Сообщение об ошибке</span>
            </label>
            <div class="form__wrapper">
                <div class="auth-form__link">
                    {{ isSignInForm ? 'У вас нет аккаунта?' : 'У вас есть аккаунт?' }} <a class="link" href="javascript:void(0)" @click.prevent="swapForm">{{ isSignInForm ? 'Зарегистрируйтесь' : 'Войти' }}</a>
                </div>
                <button class="btn" type="submit">{{ isSignInForm ? 'Войти' : 'Зарегистрироваться' }}</button>
            </div>
            <div class="form__notice">
                Пользователь с таким логином не найден
            </div>
        </form>
    </aside>
</template>

<script>
export default {
    name: "AuthForm",
    data() {
        return {
            mode: 'signIn',
            error: [],
        }
    },
    methods: {
        swapForm: function () {
            this.mode = this.isSignInForm ? 'signUp' : 'signIn';
        },
        login: async function (ev) {
            ev.preventDefault();
            try {
                const response = await fetch('https://dist.nd.ru/api/auth', {
                    mode: 'no-cors',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                    body: JSON.stringify({
                        email: "user@example.com",
                        password: "123"
                    })
                });

                const data = await response.json();

                if (response.status === 200 || response.status === 201) {
                    /*не реактивный лучше vuex*/
                    localStorage.setItem('user', JSON.stringify(data));
                    /*vuex*/
                    // this.$store.dispatch('user/setUser', data)
                    /*Нажо закрыть модалку*/
                } else {
                    this.error = data;
                    console.error(data)
                }
            } catch (err) {
                console.log('ERROR', err)
            }
        },
        signUp: async function(ev) {
            ev.preventDefault();
            try {
                const response = await fetch('https://dist.nd.ru/api/reg', {
                    mode: 'no-cors',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                    body: JSON.stringify({
                        email: "user@example.com",
                        password: "123"
                    })
                });

                const data = await response.json();

                if (response.status === 200 || response.status === 201) {
                    /*не реактивный лучше vuex*/
                    localStorage.setItem('user', JSON.stringify(data));
                    /*vuex*/
                    // this.$store.dispatch('user/setUser', data)
                    /*Нажо закрыть модалку*/
                } else {
                    this.error = data;
                    console.error(data)
                }
            } catch (err) {
                console.log(err);
            }
        }
    },
    computed: {
        isSignInForm: function () {
            return this.mode === 'signIn';
        },
        placeholder: function() {
            return this.isSignInForm ? 'Введите значение' : 'Введите Email';
        },
    }
}
</script>

<style lang="scss">
.auth-form {

    &__link {
        color: #9DA5AF;
        text-overflow: ellipsis;
        /* Text-small */
        font-family: Montserrat;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 28px; /* 155.556% */

        @media (max-width: 767px) {
            font-size: 14px;
            line-height: 24px; /* 171.429% */
            margin-top: 12px;
        }
    }
}
</style>