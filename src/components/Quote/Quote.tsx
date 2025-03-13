import { Flex, Text } from '@mantine/core'
import styles from './styles.module.css'

export const Quote = () => {
    return (
        <Flex
            direction={'column'}
            w={'100%'}
            p={'110px 0 110px'}
            justify={'center'}
            style={{
                background:
                    'linear-gradient(90.00deg, rgb(218, 225, 237),rgb(188, 210, 235) 100%)',
            }}
        >
            <Flex direction={'column'} w={'61vw'} m={'0 auto'}>
                <Text
                    m={'0'}
                    style={{ textAlign: 'left' }}
                    className={styles.text}
                >
                    “
                </Text>

                <Text w={'97%'} className={styles.text}>
                    Цель создания современных кампусов как раз в этом и
                    заключается - создать эталонные пространства
                    <Text
                        m={'0'}
                        className={styles.text}
                        style={{ textAlign: 'right' }}
                    >
                        ”
                    </Text>
                </Text>
                <Text className={styles.description}>
                    Президент Российской Федерации
                    <br /> В.В. Путин
                </Text>
            </Flex>
        </Flex>
    )
}
