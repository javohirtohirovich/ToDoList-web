import {createI18n} from 'vue-i18n'
import en from './en.json'
import uz from './uz.json'
import ru from './ru.json'

export const defaultlocale: string = 'qq';

const i18n: any = createI18n ({
    legacy: false,
    locale: !!localStorage.getItem('language') ? localStorage.getItem('language') : defaultlocale,
    fallbackloacle: 'en',
    messages: {
        uz, en, ru
    }
})

export default i18n