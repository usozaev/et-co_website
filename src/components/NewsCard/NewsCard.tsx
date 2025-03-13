import { Text, Flex } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

interface INewsCardProps {
    linkProps: { href: string; target: string; rel: string }
    image: string
    title: React.ReactNode
    description: React.ReactNode
    nextTitle: string | undefined
    date: string
    calendarDate: string
    nextDate: string
    nextCalendarDate: string
}

export function NewsCard({
    linkProps,
    image,
    title,
    nextTitle,
    calendarDate,
    nextCalendarDate,
}: INewsCardProps) {
    const isMobile = useMediaQuery(`(max-width: 640px)`)

    const buttonClickHandler = () => {
        window.open(linkProps.href, '_blank')
    }

    if (isMobile) {
        return (
            <Flex
                pos={'relative'}
                style={{
                    borderRadius: '16px',
                    border: '1px solid rgb(188, 210, 235)',
                    backgroundImage: `url(${image})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                }}
                p={'32px 24px 32px'}
                w={'100%'}
                h={'436px'}
            >
                <Flex
                    pos={'absolute'}
                    top={'0'}
                    left={'0'}
                    w={'100%'}
                    h={'100%'}
                    style={{
                        zIndex: 100,
                        backgroundColor: '#000',
                        borderRadius: '16px',
                    }}
                    opacity={0.6}
                />
                <Flex
                    w={'100%'}
                    h={'100%'}
                    style={{ zIndex: 110, cursor: 'pointer' }}
                    direction={'column'}
                    gap={'50px'}
                    onClick={buttonClickHandler}
                >
                    <Text c={'#fff'} opacity={0.7}>
                        {calendarDate}
                    </Text>
                    <Text c={'#fff'} fz={{ base: '22px', lg: '32px' }}>
                        {title}
                    </Text>
                </Flex>
            </Flex>
        )
    }

    return (
        <Flex w={'1170px'} gap={'30px'}>
            <Flex
                pos={'relative'}
                style={{
                    borderRadius: '16px',
                    border: '1px solid rgb(188, 210, 235)',
                    backgroundImage: `url(${image})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}
                p={'50px 46px 50px'}
                w={'769px'}
            >
                <Flex
                    pos={'absolute'}
                    top={'0'}
                    left={'0'}
                    w={'769px'}
                    h={'436px'}
                    style={{
                        zIndex: 100,
                        backgroundColor: '#000',
                        borderRadius: '16px',
                    }}
                    opacity={0.6}
                />
                <Flex
                    style={{ zIndex: 110, cursor: 'pointer' }}
                    direction={'column'}
                    gap={'50px'}
                    onClick={buttonClickHandler}
                >
                    <Text c={'#fff'} opacity={0.7}>
                        {calendarDate}
                    </Text>
                    <Text c={'#fff'} fz={'32px'} fw={300}>
                        {title}
                    </Text>
                </Flex>
            </Flex>

            <Flex
                className={'image-swiper-button-next'}
                style={{
                    visibility: nextTitle === undefined ? 'hidden' : 'visible',
                    borderRadius: '16px',
                    border: '1px solid rgb(188, 210, 235)',
                    cursor: 'pointer',
                }}
                bg={'#fff'}
                w={'369px'}
                h={'436px'}
                p={'51px 27px 51px'}
            >
                <Flex direction={'column'} gap={'50px'}>
                    <Text c={'#012F6D'} opacity={0.5}>
                        {nextCalendarDate}
                    </Text>
                    <Text
                        style={{ textAlign: 'left' }}
                        c={'#012F6D'}
                        fz={'24px'}
                        fw={300}
                    >
                        {nextTitle}
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    )
}
