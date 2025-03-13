import { Text } from '@mantine/core'
import classes from './AboutBanner.module.css'
import { useInViewport } from '@mantine/hooks'
import CountUp from 'react-countup'

const data = [
    {
        title: 'Более',
        stats: '120 млрд',
        description: 'млрд инвестиций в проекты по всей России',
    },
    {
        title: 'Более',
        stats: '20 000',
        description: 'мест для проживания создадут инвестириумые проекты',
    },
    {
        title: 'Более',
        stats: '300 млрд',
        description: 'вклад в ВВП экономики России от проектов кампусов',
    },
]

export const AboutBanner = () => {
    const { ref, inViewport } = useInViewport()

    const stats = data.map((stat) => (
        <div ref={ref} key={stat.title} className={classes.stat}>
            {/* <Text className={classes.count}>{stat.stats}</Text> */}
            <Text mb={{ base: '12px', md: '20px' }} className={classes.title}>
                {stat.title}
            </Text>
            <Text className={classes.count}>
                {' '}
                {inViewport ? (
                    <CountUp
                        end={parseFloat(stat.stats.replace(/[^0-9.]/g, ''))}
                        duration={2}
                    />
                ) : (
                    '0'
                )}
            </Text>
            <Text className={classes.description}>{stat.description}</Text>
        </div>
    ))
    return <div className={classes.root}>{stats}</div>
}
