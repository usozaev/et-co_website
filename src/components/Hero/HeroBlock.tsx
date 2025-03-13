import { Title, Text, Flex } from '@mantine/core'
import classes from './Hero.module.css'
import video from '../../images/bg_video.mp4'
import { animated, useSpring } from 'react-spring'
import { useMediaQuery } from '@mantine/hooks'
import { About } from '../About/About'

export default function HeroBlock() {
    const isMobile = useMediaQuery(`(max-width: 640px)`)
    const titleAnimation = useSpring({
        opacity: 1,
        transform: 'translateX(0)',
        from: { opacity: 0, transform: 'translateX(-100%)' },
        config: { duration: 1000 },
        // delay: 1000
    })

    // const textAnimation = useSpring({
    //     opacity: 1,
    //     transform: 'translateX(0)',
    //     from: { opacity: 0, transform: 'translateX(-100%)' },
    //     config: { duration: 1000 },
    //     delay: 2000,
    // })

    const citateAnimation = useSpring({
        opacity: 1,
        transform: 'translateX(0)',
        from: { opacity: 0, transform: 'translateX(-50%)' },
        config: { duration: 1000 },
        delay: 3000,
        width: '100%',
        textAlign: 'start',
        margin: 0,
    })

    if (isMobile) {
        return (
            <Flex direction={'column'}>
                <Flex
                    pos={'relative'}
                    direction={'column'}
                    w={'100%'}
                    h={'100dvh'}
                    gap={'50px'}
                >
                    <video
                        src={video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            position: 'absolute',
                            zIndex: 10,
                            filter: 'brightness(50%)',
                        }}
                        controls={false}
                    />
                    <Flex
                        gap={'24px'}
                        direction={'column'}
                        w={'100%'}
                        h={'100%'}
                        align={'flex-end'}
                        style={{ zIndex: 20 }}
                        p={'120px 20px 50px'}
                        mt={'50px'}
                    >
                        <animated.div style={titleAnimation}>
                            <Title
                                c={'#fff'}
                                fz={32}
                                fw={700}
                                style={{
                                    textAlign: 'center',
                                    textTransform: 'uppercase',
                                }}
                            >
                                ЭТАЛОННЫЕ КОНЦЕССИИ -
                                <br /> № 1 в стране в сфере строительства
                                кампусов
                            </Title>
                        </animated.div>
                        {/* <animated.div style={textAnimation}>
                            <Text
                                c={'#fff'}
                                fz={20}
                                fw={300}
                                style={{ textAlign: 'center' }}
                            >
                                Комплексный подход к реализации крупных
                                инфраструктурных проектов
                            </Text>
                        </animated.div> */}
                    </Flex>
                    <Flex
                        w={'100%'}
                        direction={'column'}
                        style={{ zIndex: 20 }}
                        p={'0 20px 50px'}
                    >
                        <animated.div style={citateAnimation}>
                            <Text
                                mt={'40px'}
                                c={'#fff'}
                                style={{ zIndex: 1000, textAlign: 'center' }}
                                fz={16}
                                fw={300}
                                lh={'130%'}
                            >
                                “Цель создания современных кампусов как раз в
                                этом и заключается - создать эталонные
                                пространства”
                            </Text>
                            <Text
                                c={'#fff'}
                                fz={16}
                                fw={700}
                                lh={'130%'}
                                opacity={'1'}
                                mt={'20px'}
                                style={{ textAlign: 'center' }}
                            >
                                Президент Российской Федерации Владимир
                                Владимирович Путин
                            </Text>
                        </animated.div>
                    </Flex>
                </Flex>
                <About />
            </Flex>
        )
    }

    return (
        <Flex w={'100%'} direction={'column'}>
            <Flex
                id={'hero'}
                bg={'#f9fafc'}
                direction={'column'}
                className={classes.hero}
                pos={'relative'}
            >
                {/* <Overlay
                gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, .15) 90%)"
                opacity={1}
                zIndex={1000}
            /> */}
                <video
                    src={video}
                    autoPlay
                    muted
                    loop
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        position: 'absolute',
                        zIndex: 10,
                        filter: 'brightness(50%)',
                    }}
                />
                <Flex
                    style={{ zIndex: 20 }}
                    className={classes.container}
                    h={'100%'}
                >
                    <Flex
                        gap={'24px'}
                        direction={'column'}
                        w={'100%'}
                        h={'100%'}
                        p={'48px 24px 24px'}
                        m={'0 auto'}
                        align={'flex-end'}
                        justify={'space-between'}
                    >
                        <animated.div style={titleAnimation}>
                            <Title className={classes.title}>
                                ЭТАЛОННЫЕ КОНЦЕССИИ -
                                <br /> № 1 в стране в сфере строительства
                                кампусов
                            </Title>
                        </animated.div>

                        <animated.div style={citateAnimation}>
                            <Flex w={'100%'} direction={'column'} gap={'16px'}>
                                <Text
                                    w={'600px'}
                                    mt={'40px'}
                                    c={'#fff'}
                                    style={{ zIndex: 1000 }}
                                    fz={'32px'}
                                    fw={300}
                                    lh={'130%'}
                                >
                                    “Цель создания современных кампусов как раз
                                    в этом и заключается - создать эталонные
                                    пространства”
                                </Text>
                                <Text
                                    c={'#fff'}
                                    fz={'20px'}
                                    fw={700}
                                    lh={'130%'}
                                    opacity={'1'}
                                >
                                    Президент Российской Федерации Владимир
                                    Владимирович Путин
                                </Text>
                            </Flex>
                        </animated.div>
                    </Flex>
                </Flex>
            </Flex>
            <About />
        </Flex>
    )
}
