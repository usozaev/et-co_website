import { FC, useEffect, useRef, useState } from 'react'
import { Flex, Image, Title } from '@mantine/core'

import classes from './HowItWorks.module.css'

import image1 from '../../images/perm1.jpg'
import image2 from '../../images/perm2.jpg'
import image3 from '../../images/perm3.jpg'
import image4 from '../../images/perm4.jpg'
import image5 from '../../images/perm5.jpg'

const imagesPerm = [
    {
        image: image1,
    },
    {
        image: image2,
    },
    {
        image: image3,
    },
    {
        image: image4,
    },
    {
        image: image5,
    },
]

const textContent = [
    {
        text: 'Пермский кампус - социально-ориентированный проект инфраструктуры международного уровня.',
    },
    {
        text: 'Разработан в рамках федеральной программы "Наука и университеты". Вместимость кампуса более 5 тысяч человек.',
    },
    {
        text: 'Инфраструктура кампуса включает в себя учебную лабораторию, спортивный комплекс, бассейн, конгресс-холл и гостиницу.',
    },
    {
        text: 'Проект реализует компания ООО "Эталон Кампус" входящая в Группу "Эталон".',
    },
    {
        text: 'Пермский кампус - социально-ориентированный проект инфраструктуры международного уровня.',
    },
]

const HowItWorks: FC = () => {
    const sectionRef = useRef<HTMLElement>(null)
    const stickyRef = useRef<HTMLDivElement>(null)
    const [activeIndex, setActiveIndex] = useState(0)

    const handleNavClick = (index: number) => {
        if (
            window.innerWidth > 1024 &&
            sectionRef &&
            sectionRef.current &&
            stickyRef &&
            stickyRef.current
        ) {
            window.scrollTo({
                top:
                    sectionRef.current.offsetTop +
                    stickyRef.current.offsetTop +
                    window.innerHeight * 3 * (index / 4),
                behavior: 'smooth',
            })
        }
    }

    useEffect(() => {
        const scrollHandler = () => {
            const scrollTop = document.documentElement.scrollTop
            if (
                window.innerWidth > 1024 &&
                sectionRef &&
                sectionRef.current &&
                stickyRef &&
                stickyRef.current
            ) {
                if (
                    scrollTop <
                    sectionRef.current.offsetTop + stickyRef.current.offsetTop
                ) {
                    setActiveIndex(0)
                    return
                }
                if (
                    scrollTop >
                    sectionRef.current.offsetTop +
                        stickyRef.current.offsetTop +
                        stickyRef.current.offsetHeight -
                        window.innerHeight
                ) {
                    setActiveIndex(4)
                    return
                }
                if (
                    scrollTop >=
                        sectionRef.current.offsetTop +
                            stickyRef.current.offsetTop &&
                    scrollTop <=
                        sectionRef.current.offsetTop +
                            stickyRef.current.offsetTop +
                            stickyRef.current.offsetHeight -
                            window.innerHeight
                ) {
                    const relativeScrollTop =
                        scrollTop -
                        (sectionRef.current.offsetTop +
                            stickyRef.current.offsetTop)
                    const scrollPercent =
                        relativeScrollTop / (window.innerHeight * 3)
                    // 0 - 20 - setActiveIndex(0)
                    // 20 - 40 - setActiveIndex(1)
                    // 40 - 60 - setActiveIndex(2)
                    // 60 - 80 - setActiveIndex(3)
                    // 80 - 100 - setActiveIndex(4)
                    if (scrollPercent < 0.2) {
                        setActiveIndex(0)
                        return
                    }
                    if (scrollPercent < 0.4) {
                        setActiveIndex(1)
                        return
                    }
                    if (scrollPercent < 0.6) {
                        setActiveIndex(2)
                        return
                    }
                    if (scrollPercent < 0.8) {
                        setActiveIndex(3)
                        return
                    }
                    setActiveIndex(4)
                }
            }
        }

        window.addEventListener('scroll', scrollHandler)

        scrollHandler()

        return () => {
            window.removeEventListener('scroll', scrollHandler)
        }
    }, [])
    return (
        <section
            className={classes.howitworks}
            ref={sectionRef}
            id="howitworks"
        >
            <Title
                style={{ textAlign: 'center', color: '#002F6D' }}
                m={'0 auto'}
                variant="h2"
            >
                Кампус НИУ ВШЭ в Перми
            </Title>

            <div className="container">
                <div className={classes.content} ref={stickyRef}>
                    <nav
                        style={{
                            display: 'flex',
                            paddingLeft: '100px',
                            justifyItems: 'center',
                            height: '300px',
                            width: '80vw',
                            justifyContent: 'center',
                            zIndex: 1000,
                        }}
                    >
                        <Flex w={'100%'} gap={'20px'}>
                            {imagesPerm.map((item, index) => (
                                <a
                                    style={{ width: '300px', height: '200px' }}
                                    key={`how-nav-${index}`}
                                    className={
                                        activeIndex === index
                                            ? classes.selected
                                            : ''
                                    }
                                    onClick={() => {
                                        handleNavClick(index)
                                    }}
                                >
                                    <Image
                                        style={{
                                            opacity:
                                                activeIndex === index
                                                    ? 0.7
                                                    : '',
                                        }}
                                        src={item.image}
                                        width={'100%'}
                                        height={'100%'}
                                        fit={'contain'}
                                    />

                                    {/* <span className={`fw500 ${classes.label}`}>
                    {item.title}
                  </span> */}
                                </a>
                            ))}
                        </Flex>
                    </nav>
                    <Flex w={'100%'} px={'24px'} className={classes.sticky}>
                        <div className={classes.texts}>
                            {textContent.map((item, index) => (
                                <p
                                    key={`how-text-${index}`}
                                    className={`fw450 ${
                                        activeIndex === index
                                            ? classes.selected
                                            : ''
                                    }`}
                                >
                                    {item.text}
                                </p>
                            ))}
                        </div>
                        <div className={classes.tablet}>
                            {imagesPerm.map((item, index) => (
                                <div
                                    key={`how-image-${index}`}
                                    id={`how-image-${index}`}
                                    className={`${classes.image} ${
                                        activeIndex === index
                                            ? classes.selected
                                            : ''
                                    }`}
                                >
                                    <Image
                                        src={item.image}
                                        width={1302}
                                        height={813}
                                    />
                                </div>
                            ))}
                        </div>
                    </Flex>
                </div>
                <div className={classes.contentMobile}>
                    {imagesPerm.map((item, index) => (
                        <div key={`how-${index}`} className={classes.item}>
                            <div className={classes.title}>
                                <span className={classes.icon}>
                                    <Image
                                        src={item.image}
                                        width={24}
                                        height={24}
                                    />
                                </span>
                            </div>

                            <div className={classes.tblt}>
                                <Image
                                    src={item.image}
                                    width={1440}
                                    height={900}
                                />
                            </div>
                            <div className={classes.device}>
                                <Image
                                    src={item.image}
                                    width={410}
                                    height={834}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HowItWorks
