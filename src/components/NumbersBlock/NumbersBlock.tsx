import { FC, useState } from 'react'
import styles from './styles.module.css'
import { Flex, Box, Title, Text, BackgroundImage } from '@mantine/core'
import ReactCardFlip from 'react-card-flip'
import { useInViewport, useMediaQuery } from '@mantine/hooks'
import permBack from '../../images/perm6.webp'
import tyumenBack from '../../images/tumen4.webp'
import ufaBack from '../../images/ufa7.webp'
import arkhangelskBack from '../../images/arhangelsk.webp'
import { MdCurrencyRuble } from 'react-icons/md'
import { BsFillPeopleFill } from 'react-icons/bs'
import { AiOutlineStock } from 'react-icons/ai'
import { RxRulerSquare } from 'react-icons/rx'
import CountUp from 'react-countup'

const NumbersBlock: FC = () => {
    const [isFlipped, setIsflipped] = useState<string | undefined>(undefined)
    const isMobile = useMediaQuery(`(max-width: 640px)`)
    const { ref, inViewport } = useInViewport()

    const initialNumbers = [
        {
            id: 'perm',
            num: '120',
            sign: 'млрд',
            icon: <MdCurrencyRuble size={isMobile ? 32 : 64} />,
            label: 'ПЕРМЬ',
            text: 'Инвестиций',
            backImg: permBack,
        },
        {
            id: 'ufa',
            num: '20',
            sign: 'тыс',
            icon: <BsFillPeopleFill size={isMobile ? 32 : 64} />,
            label: 'УФА',
            text: 'мест проживания',
            backImg: ufaBack,
        },
        {
            id: 'arkhangelsk',
            num: '300+ млрд',
            sign: 'млрд',
            icon: <AiOutlineStock size={isMobile ? 32 : 64} />,
            label: 'АРХАНГЕЛЬСК',
            text: 'Вклад в ВВП',
            backImg: arkhangelskBack,
        },
        {
            id: 'tumen',
            num: '450',
            sign: 'тыс m²',
            icon: <RxRulerSquare size={isMobile ? 32 : 64} />,
            label: 'ТЮМЕНЬ',
            text: 'новых  площадей',
            backImg: tyumenBack,
        },
    ]

    const cardFlipHandler = (id: string) => () => {
        console.log('set os flipped')
        setIsflipped(id)
    }

    return (
        <Flex
            id={'numbers'}
            bg={'rgb(248, 249, 251)'}
            direction={'column'}
            p={{ base: '40px 24px 0', lg: '90px 0 90px' }}
            h={isMobile ? '100dvh' : 'auto'}
            gap={{ base: '24px', lg: '48px' }}
            columnGap={{ base: '24px', lg: '48px' }}
        >
            <Title className={styles.title} m={'0 auto'}>
                ГЕОГРАФИЯ ПРОЕКТОВ
            </Title>
            <Box>
                <div className={styles.content}>
                    <div className={styles.cards}>
                        <div className={styles.right}>
                            <div className={styles.list} ref={ref}>
                                {initialNumbers.map((item, index) => {
                                    return (
                                        <ReactCardFlip
                                            key={index}
                                            isFlipped={isFlipped === item.id}
                                            flipDirection="horizontal"
                                        >
                                            <div
                                                onClick={cardFlipHandler(
                                                    item.id
                                                )}
                                                key={`join-${index}`}
                                                className={styles.item}
                                            >
                                                <div>{item.icon}</div>
                                                <div className={styles.bottom}>
                                                    {/* <div
                                                        className={
                                                            styles.label
                                                        }
                                                    >
                                                        {item.label}
                                                    </div> */}
                                                    <div
                                                        className={`fw550 ${styles.number}`}
                                                    >
                                                        {inViewport ? (
                                                            <>
                                                                <Text
                                                                    className={`fw550 ${styles.number}`}
                                                                >
                                                                    <CountUp
                                                                        end={parseFloat(
                                                                            item.num.replace(
                                                                                /[^0-9.]/g,
                                                                                ''
                                                                            )
                                                                        )}
                                                                        duration={
                                                                            2
                                                                        }
                                                                    />{' '}
                                                                    +
                                                                </Text>
                                                                <Text
                                                                    className={`fw550 ${styles.number}`}
                                                                >
                                                                    {item.sign}
                                                                </Text>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <Text
                                                                    className={`fw550 ${styles.number}`}
                                                                >
                                                                    {item.num} +
                                                                </Text>
                                                                <Text
                                                                    className={`fw550 ${styles.number}`}
                                                                >
                                                                    {item.sign}
                                                                </Text>
                                                            </>
                                                        )}
                                                    </div>
                                                    <Text
                                                        fz={'1vw'}
                                                        mt={'20px'}
                                                    >
                                                        {item.text}
                                                    </Text>
                                                </div>
                                            </div>

                                            <Flex className={styles.itemBack}>
                                                {/* <div className={styles.icon}>
                                                    {item.icon}
                                                </div>
                                                <div className={styles.bottom}>
                                                    <div
                                                        className={
                                                            styles.label
                                                        }
                                                    >
                                                        {item.label}
                                                    </div>
                                                    <div
                                                        className={`fw550 ${styles.number}`}
                                                    >
                                                        {item.num}
                                                    </div>
                                                </div> */}
                                                <BackgroundImage
                                                    style={{
                                                        borderRadius: '12px',
                                                    }}
                                                    w={'100%'}
                                                    h={'100%'}
                                                    src={item.backImg}
                                                />
                                            </Flex>
                                        </ReactCardFlip>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
        </Flex>
    )
}

export default NumbersBlock
