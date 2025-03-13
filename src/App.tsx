import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core'
import { theme } from './theme'
import { Router } from './Router'
import './fonts/Gilroy-Regular.ttf'
import './fonts/Gilroy-Regular.woff'
import './fonts/Gilroy-Regular.woff2'

export default function App() {
    return (
        <MantineProvider theme={theme}>
            <Router />
        </MantineProvider>
    )
}

// - gap между блоками 168 px
// - о нас padding 44px
// - проекты - накинуть ховер, анимация появления подчеркивания (линия растягивается от центра к краям или слева направо)
// - кнопки "назад" в новостях и команде
// - регионы выделить цветом
// - в расвернутой форме члена команды добавить крестик
// - жирные заголовки в новостях
// - фотки в команде под квадрат и скруглить углы
// - накинуть ховер на карточки в команде
// - поправить выравнивание отступов в подписях в команде
// - ширину блоков и хэдера на главной странице выровнять
