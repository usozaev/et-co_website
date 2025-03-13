import { Flex } from '@mantine/core'
import { Header } from '../Header/Header'
import { Outlet } from 'react-router-dom'
import ScrollToTop from '../ScrollToTop/ScrollToTop'

export const Layout = () => {
    return (
        <Flex w={'100vw'} h={'100dvh'} direction={'column'}>
            <ScrollToTop />
            <Header />
            <Outlet />
        </Flex>
    )
}
