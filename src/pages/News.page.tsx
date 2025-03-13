import { Flex } from '@mantine/core'
import { NewsComponent } from '../components/NewsComponent/NewsComponent'

export const NewsPage = () => {
    return (
        <Flex
            direction={{ base: 'column', lg: 'row' }}
            m={{ base: '40px auto', lg: '180px auto' }}
            w={{ base: '90%', lg: '70vw' }}
            gap={'39px'}
        >
            <NewsComponent />
        </Flex>
    )
}
