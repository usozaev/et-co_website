import { Flex, Title, Text, Box } from '@mantine/core'
import styles from './About.module.css'
import { RightAboutIcon } from '../../images/icons/right-about-icon'
import { LeftAboutIcon } from '../../images/icons/left-about-icon'
import { SkyrimLeft, SkyrimRight } from '../../images/icons/skyrim-icon'

export const About = () => {
    return (
        <Flex
            w={'100%'}
            direction={'column'}
            h={'auto'}
            gap={{ base: '16px', lg: '24px' }}
            p={{ base: '44px 20px 44px', lg: '20px 0 20px' }}
            style={{
                position: 'relative',
                borderRadius: '12px',
                background:
                    'linear-gradient(90deg, rgba(218, 225, 237, 0.10) 0%, rgba(188, 210, 235, 0.10) 100%)',
            }}
        >
            {/* <AboutBanner /> */}

            <Box
                style={{ position: 'absolute', top: '20%', left: '0' }}
                w={'fit-content'}
            >
                <LeftAboutIcon />
            </Box>
            <Box
                style={{ position: 'absolute', top: '20%', right: '0' }}
                w={'fit-content'}
            >
                <RightAboutIcon />
            </Box>
            <Flex
                w={{ base: '100%', lg: '61vw' }}
                m={'0 auto'}
                h={'fit-content'}
                direction={'column'}
                justify={'center'}
                align={'center'}
                gap={{ base: '16px', lg: '24px' }}
                style={{
                    borderRadius: '12px',
                }}
            >
                <Flex
                    w={{ base: '80vw', lg: 'fit-content' }}
                    justify={{ base: 'center', lg: 'space-between' }}
                    align={'center'}
                >
                    <SkyrimLeft />
                    <Title mr={'10px'} className={styles.title}>
                        О НАС
                    </Title>
                    <SkyrimRight />
                </Flex>

                <Text className={styles.description}>
                    Частная инвестиционная компания, специализирующаяся на
                    реализации крупных инфраструктурных проектов на принципах
                    государственно-частного партнёрства и проектного
                    финансирования.
                </Text>
                <Text className={styles.description}>
                    Мы реализуем проекты полного жизненного цикла по модели
                    BOT/BOOT (Build-Own-Operate-Transfer), включая
                    структурирование, строительство, платную эксплуатацию и
                    передачу публичной стороне по истечении сроков реализации
                    проекта.
                </Text>

                <Text className={styles.description}>
                    Являясь частью команды АФК «Система», мы обладаем уникальной
                    возможностью по привлечению групповых компаний при
                    реализации проектов (Группа «Эталон», Sitronics Group, ПАО
                    «МТС», Cosmos Hotel Group, Группа компаний «Медси» и др.),
                    что позволяет эффективно управлять рисками на всех стадиях
                    проектах.
                </Text>
            </Flex>
        </Flex>
    )
}
