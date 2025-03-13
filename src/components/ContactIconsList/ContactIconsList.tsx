import { Flex, Stack, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { IconAt, IconMapPin, IconPhone, IconSun } from '@tabler/icons-react'
import classes from './styles.module.css'

interface ContactIconProps
    extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
    icon: typeof IconSun
    title: React.ReactNode
    description: React.ReactNode
}

function ContactIcon({ title, description }: ContactIconProps) {
    return (
        <Flex
            color={'#002F6D'}
            className={classes.wrapper}
            direction={'column'}
            gap={'36px'}
        >
            <Flex w={'100%'} direction={'column'} gap={'4px'}>
                <Text size="xs" className={classes.title} opacity={0.6}>
                    {title}
                </Text>
                <Text className={classes.description} c={'#002F6D'}>
                    {description}
                </Text>
            </Flex>
        </Flex>
    )
}

const NEWS_DATA = [
    { title: 'Email:', description: 'info@system-ko.ru', icon: IconAt },
    { title: 'Телефон:', description: '+7 495 921 49 69', icon: IconPhone },
    {
        title: 'Адрес:',
        description: 'Москва, БЦ Токмаков, пер. Токмаков, д. 5 стр 1, этаж 5-6',
        icon: IconMapPin,
    },
    { title: 'Время работы:', description: '9:00 – 18:00', icon: IconSun },
]

export function ContactIconsList() {
    const isMobile = useMediaQuery(`(max-width: 640px)`)
    const items = NEWS_DATA.map((item, index) => (
        <ContactIcon key={index} {...item} />
    ))

    return (
        <Stack bg={'#fff'} gap={isMobile ? '16px' : '36px'}>
            {items}
        </Stack>
    )
}
