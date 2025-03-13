import { Divider, Flex, Image as Img, Text } from '@mantine/core'
import { useHover, useMediaQuery } from '@mantine/hooks'
import { useEffect, useMemo, useRef } from 'react'
import { MdArrowForwardIos } from 'react-icons/md'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import arhangelskTitleImage from '../../images/arhangelsk.webp'
import arhangelskImage from '../../images/arhangelsk2.webp'
import arhangelskImage2 from '../../images/arhangelsk3.webp'
import bychiha1 from '../../images/bychiha_1.png'
import bychiha2 from '../../images/bychiha_2.png'
import bychiha3 from '../../images/bychiha_3.png'
import bychiha4 from '../../images/bychiha_4.png'
import BychihaTitleImage from '../../images/BychihaTitleImage.png'
import permTitleImage from '../../images/campus.png'
import { СlockIcon } from '../../images/icons/clock-icon'
import { MoneyIcon } from '../../images/icons/money-icon'
import { PeopleIcon } from '../../images/icons/people-icon'
import { SquareIcon } from '../../images/icons/square-icon'
import perm1 from '../../images/perm1.webp'
import perm2 from '../../images/perm2.webp'
import perm3 from '../../images/perm3.webp'
import perm4 from '../../images/perm4.webp'
import perm5 from '../../images/perm5.webp'
import shibai1 from '../../images/shibai_1.png'
import shibai2 from '../../images/shibai_2.png'
import shibai3 from '../../images/shibai_3.png'
import shibai4 from '../../images/shibai_4.png'
import shibai5 from '../../images/shibai_5.png'
import shibaiTitleImage from '../../images/shibaiTitleImage.png'
import tumenTitleImage from '../../images/tumen1.webp'
import tumen2 from '../../images/tumen2.webp'
import tumen3 from '../../images/tumen3.webp'
import tumen4 from '../../images/tumen4.webp'
import ufaTitleImage from '../../images/ufa1.webp'
import ufa2 from '../../images/ufa2.webp'
import ufa3 from '../../images/ufa3.webp'
import ufa4 from '../../images/ufa4.webp'
import ufa5 from '../../images/ufa5.webp'

// Import Swiper styles
import 'swiper/css'
import { Navigation, Pagination } from 'swiper/modules'
import { SkyrimLeft, SkyrimRight } from '../../images/icons/skyrim-icon'

interface IProjectsGalleryProps {
    galleryType: ProjectsGalleryType
    galleryTypeClickHandler: (type: ProjectsGalleryType) => void
}

export enum ProjectsGalleryType {
    Perm,
    Ufa,
    Tumen,
    Arhangelsk,
    Shibai,
    Bychiha,
}

const projectsNavBarData = [
    {
        type: ProjectsGalleryType.Perm,
        title: 'Кампус Пермь',
        image: permTitleImage,
    },
    {
        type: ProjectsGalleryType.Ufa,
        title: 'Кампус Уфа',
        image: ufaTitleImage,
    },
    {
        type: ProjectsGalleryType.Tumen,
        title: 'Кампус Тюмень',
        image: tumenTitleImage,
    },
    {
        type: ProjectsGalleryType.Arhangelsk,
        title: 'Кампус Архангельск',
        image: arhangelskTitleImage,
    },
    {
        type: ProjectsGalleryType.Shibai,
        title: 'Детский лагерь Шифа',
        image: arhangelskTitleImage,
    },
    {
        type: ProjectsGalleryType.Bychiha,
        title: `Детский лагерь в г. Хабаровск`,
        image: BychihaTitleImage,
    },
]

export const ProjectsGallery = ({
    galleryType,
    galleryTypeClickHandler,
}: IProjectsGalleryProps) => {
    const isMobile = useMediaQuery(`(max-width: 640px)`)
    const imagesRef = useRef<HTMLDivElement>(null)
    const swiperRef = useRef<SwiperClass>()
    const { hovered, ref } = useHover()

    const projectsData = useMemo(() => {
        switch (galleryType) {
            case ProjectsGalleryType.Perm:
                return [
                    {
                        num: '164',
                        letters: 'тыс. м2',
                        bullet1: 'Площадь объекта',
                        icon: <SquareIcon />,
                    },
                    {
                        num: '5089',
                        letters: 'человек',
                        bullet1: 'Вместимость',
                        icon: <PeopleIcon />,
                    },
                    {
                        num: '29',
                        letters: 'млрд руб.',
                        bullet1: 'Объем инвестиций  ',
                        icon: <MoneyIcon />,
                    },
                    {
                        num: '22',
                        letters: 'года',
                        bullet1: 'Срок реализации',
                        icon: <СlockIcon />,
                    },
                ]
            case ProjectsGalleryType.Ufa:
                return [
                    {
                        num: '145',
                        letters: 'тыс. м2',
                        bullet1: 'Площадь объекта',
                        icon: <SquareIcon />,
                    },
                    {
                        num: '4133',
                        letters: 'человека',
                        bullet1: 'Вместимость',
                        icon: <PeopleIcon />,
                    },
                    {
                        num: '27',
                        letters: 'млрд руб.',
                        bullet1: 'Объем инвестиций  ',
                        icon: <MoneyIcon />,
                    },
                    {
                        num: '25',
                        letters: 'лет',
                        bullet1: 'Срок реализации',
                        icon: <СlockIcon />,
                    },
                ]
            case ProjectsGalleryType.Tumen:
                return [
                    {
                        num: '167',
                        letters: 'тыс. м2',
                        bullet1: 'Площадь объекта',
                        icon: <SquareIcon />,
                    },
                    {
                        num: '5100',
                        letters: 'человек',
                        bullet1: 'Вместимость',
                        icon: <PeopleIcon />,
                    },
                    {
                        num: '32',
                        letters: 'млрд руб.',
                        bullet1: 'Объем инвестиций  ',
                        icon: <MoneyIcon />,
                    },
                    {
                        num: '22',
                        letters: 'года',
                        bullet1: 'Срок реализации',
                        icon: <СlockIcon />,
                    },
                ]
            case ProjectsGalleryType.Arhangelsk:
                return [
                    {
                        num: '152',
                        letters: 'тыс. м2',
                        bullet1: 'Площадь объекта',
                        icon: <SquareIcon />,
                    },
                    {
                        num: '4124',
                        letters: 'человека',
                        bullet1: 'Вместимость',
                        icon: <PeopleIcon />,
                    },
                    {
                        num: '31',
                        letters: 'млрд руб.',
                        bullet1: 'Объем инвестиций  ',
                        icon: <MoneyIcon />,
                    },
                    {
                        num: '22',
                        letters: 'года',
                        bullet1: 'Срок реализации',
                        icon: <СlockIcon />,
                    },
                ]
            case ProjectsGalleryType.Shibai:
                return [
                    {
                        num: '215',
                        letters: 'тыс. м2',
                        bullet1: 'Площадь объекта',
                        icon: <SquareIcon />,
                    },
                    {
                        num: '21000',
                        letters: 'человек',
                        bullet1: 'Вместимость',
                        icon: <PeopleIcon />,
                    },
                    {
                        num: '3,5',
                        letters: 'млрд руб.',
                        bullet1: 'Объем инвестиций  ',
                        icon: <MoneyIcon />,
                    },
                    {
                        num: '12',
                        letters: 'лет',
                        bullet1: 'Срок реализации',
                        icon: <СlockIcon />,
                    },
                ]
            case ProjectsGalleryType.Bychiha:
                return [
                    {
                        num: '73',
                        letters: 'тыс. м2',
                        bullet1: 'Площадь объекта',
                        icon: <SquareIcon />,
                    },
                    {
                        num: '20000',
                        letters: 'человек',
                        bullet1: 'Вместимость',
                        icon: <PeopleIcon />,
                    },
                    {
                        num: '5,5',
                        letters: 'млрд руб.',
                        bullet1: 'Объем инвестиций  ',
                        icon: <MoneyIcon />,
                    },
                    {
                        num: '12',
                        letters: 'лет',
                        bullet1: 'Срок реализации',
                        icon: <СlockIcon />,
                    },
                ]
        }
    }, [galleryType])

    const imagesData = {
        [ProjectsGalleryType.Perm]: [
            perm1,
            perm2,
            perm3,
            perm4,
            perm5,
            permTitleImage,
        ],
        [ProjectsGalleryType.Ufa]: [ufa2, ufa3, ufa4, ufa5, ufaTitleImage],
        [ProjectsGalleryType.Tumen]: [tumen2, tumen3, tumen4, tumenTitleImage],
        [ProjectsGalleryType.Arhangelsk]: [
            arhangelskImage,
            arhangelskImage2,
            arhangelskTitleImage,
        ],
        [ProjectsGalleryType.Shibai]: [
            shibai1,
            shibai2,
            shibai3,
            shibai4,
            shibai5,
            shibaiTitleImage,
        ],
        [ProjectsGalleryType.Bychiha]: [
            BychihaTitleImage,
            bychiha1,
            bychiha2,
            bychiha3,
            bychiha4,
        ],
    }

    useEffect(() => {
        const preloadImages = () => {
            const imagesToPreload = imagesData[galleryType]
            if (!imagesToPreload) return

            imagesToPreload.forEach((imageSrc) => {
                const img = new Image()
                img.src = imageSrc
            })
        }

        preloadImages()
    }, [galleryType])

    const slides = useMemo(() => {
        const currentImages = imagesData[galleryType] || []
        return currentImages?.map((imageSrc, index) => (
            <SwiperSlide
                key={index}
                style={{
                    width: '100%',
                    height: isMobile ? '300px' : undefined,
                    borderRadius: '16px',
                }}
            >
                <Img
                    src={imageSrc}
                    style={{
                        borderRadius: '16px',
                    }}
                    fit={isMobile ? 'scale-down' : 'cover'}
                    w={'100%'}
                    h={'100%'}
                />
            </SwiperSlide>
        ))
    }, [galleryType, projectsData])

    if (isMobile) {
        return (
            <Flex
                id={'projects'}
                direction={'column'}
                w={'100%'}
                h={'fit-content'}
                justify={'center'}
                px={'40px'}
            >
                <Flex
                    justify={'space-between'}
                    align={'center'}
                    mb={{ base: '16px', lg: '40px' }}
                >
                    <SkyrimLeft />
                    <Text
                        c={'#012f6d'}
                        fz={{ base: '24px', lg: '30px' }}
                        fw={'700'}
                        lh={'130%'}
                        style={{ textAlign: 'center' }}
                    >
                        НАШИ ПРОЕКТЫ
                    </Text>
                    <SkyrimRight />
                </Flex>

                <Flex
                    direction={'column'}
                    w={'100%'}
                    m={'0 auto 24px'}
                    justify={'center'}
                    align={'center'}
                    gap={'16px'}
                >
                    {projectsNavBarData.map((project, index) => {
                        return (
                            <Flex
                                key={index}
                                onClick={() =>
                                    galleryTypeClickHandler(project.type)
                                }
                                style={{
                                    borderBottom:
                                        galleryType === project.type
                                            ? '3px solid rgb(35, 60, 145)'
                                            : '',
                                    transition: 'border-bottom 0.3s',
                                    textAlign: 'center',
                                }}
                                w={'fit-content'}
                            >
                                <Text
                                    c={'#012f6d'}
                                    fz={{ base: '22px', lg: '32px' }}
                                    fw={'400'}
                                    lh={'130%'}
                                    style={{
                                        textAlign: 'center',
                                    }}
                                >
                                    {project.title}
                                </Text>
                            </Flex>
                        )
                    })}
                </Flex>
                <Flex pos={'relative'}>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        pagination={{ clickable: true }}
                        navigation={{
                            nextEl: '.arrow-left',
                            prevEl: '.arrow-right',
                        }}
                        scrollbar={{ draggable: true }}
                        loop
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper
                        }}
                    >
                        {slides}
                    </Swiper>
                    <button
                        style={{
                            position: 'absolute',
                            left: '5px',
                            top: '45%',
                        }}
                        className="arrow-left arrow"
                    >
                        <MdArrowForwardIos
                            size={30}
                            color={'#fff'}
                            style={{
                                position: 'absolute',
                                left: '5px',
                                top: '45%',
                                zIndex: 1000,
                                transform: 'rotate(180deg)',
                            }}
                        />
                    </button>

                    <button
                        style={{
                            position: 'absolute',
                            right: '10px',
                            top: '45%',
                        }}
                        className="arrow-right arrow"
                    >
                        <MdArrowForwardIos
                            size={30}
                            color={'#fff'}
                            style={{
                                position: 'absolute',
                                right: '10px',
                                top: '45%',
                                zIndex: 1000,
                            }}
                        />
                    </button>
                </Flex>
                <Flex
                    direction={'column'}
                    w={'100%'}
                    gap={{ base: '16px', lg: '30px' }}
                    mt={'24px'}
                >
                    {projectsData.map((project, index) => {
                        return (
                            <Flex
                                key={index}
                                direction={'column'}
                                justify={'center'}
                                align={'center'}
                                w={'100%'}
                                h={'fit-content'}
                                p={'20px'}
                                style={{
                                    borderRadius: '16px',
                                    border: '1px solid rgb(188, 210, 235)',
                                    textAlign: 'center',
                                }}
                            >
                                <Flex
                                    w={'60px'}
                                    h={'60px'}
                                    justify={'center'}
                                    align={'center'}
                                >
                                    {project.icon}
                                </Flex>
                                <Flex direction={'column'}>
                                    <Text
                                        c={'#012f6d'}
                                        fz={30}
                                        fw={700}
                                        lh={'130%'}
                                    >
                                        {project.num + ' ' + project.letters}
                                    </Text>

                                    <Text
                                        c={'#012f6d'}
                                        fz={{ base: '14px', lg: '18px' }}
                                        fw={300}
                                        lh={'130%'}
                                    >
                                        {project.bullet1}
                                    </Text>
                                </Flex>
                            </Flex>
                        )
                    })}
                </Flex>
            </Flex>
        )
    }

    return (
        <Flex
            w={'100%'}
            bg={
                'linear-gradient(90deg, rgba(218, 225, 237, 0.10) 0%, rgba(188, 210, 235, 0.10) 100%)'
            }
            pt={'90px'}
        >
            <Flex
                id={'projects'}
                w={'1175px'}
                h={'fit-content'}
                direction={'column'}
                m={'0 auto'}
            >
                <Flex
                    ref={imagesRef}
                    direction={'column'}
                    w={'100%'}
                    justify={'center'}
                    align={'center'}
                    m={'0 auto'}
                    gap={'40px'}
                >
                    <Flex justify={'space-between'} align={'center'}>
                        <SkyrimLeft />
                        <Text
                            c={'#012f6d'}
                            fz={'42px'}
                            fw={'700'}
                            lh={'130%'}
                            m={'0 10px 0'}
                        >
                            НАШИ ПРОЕКТЫ
                        </Text>
                        <SkyrimRight />
                    </Flex>

                    <Flex w={'100%'} m={'0 auto'} justify={'space-between'}>
                        {projectsNavBarData.map((project, index) => {
                            return (
                                <Flex
                                    key={index}
                                    onClick={() =>
                                        galleryTypeClickHandler(project.type)
                                    }
                                    direction={'column'}
                                    style={{
                                        cursor: 'pointer',
                                    }}
                                >
                                    <Text
                                        c={'#012f6d'}
                                        fz={'24px'}
                                        fw={
                                            galleryType === project.type
                                                ? '700'
                                                : '400'
                                        }
                                        opacity={
                                            galleryType === project.type
                                                ? '1'
                                                : '0.5'
                                        }
                                        lh={'130%'}
                                    >
                                        {project.title}
                                    </Text>

                                    <Divider
                                        bg={'#012f6d'}
                                        w={
                                            galleryType === project.type
                                                ? '100%'
                                                : '0px'
                                        }
                                        h={'5px'}
                                        style={{
                                            transition: 'width 0.3s',
                                        }}
                                    />
                                </Flex>
                            )
                        })}
                    </Flex>
                </Flex>

                <Flex
                    m={'37px auto 24px'}
                    w={'100%'}
                    gap={'24px'}
                    justify={'space-between'}
                    align={'center'}
                >
                    <Flex direction={'column'} w={'30%'} gap={'24px'}>
                        {projectsData.map((project, index) => {
                            return (
                                <Flex
                                    key={index}
                                    direction={'column'}
                                    justify={'center'}
                                    align={'center'}
                                    w={'370px'}
                                    h={'156px'}
                                    p={'16px 24px 16px'}
                                    style={{
                                        borderRadius: '16px',
                                        border: '1px solid rgb(188, 210, 235)',
                                    }}
                                >
                                    <Flex
                                        w={'100%'}
                                        gap={'16px'}
                                        align={'center'}
                                    >
                                        <Flex
                                            w={'112px'}
                                            h={'112px'}
                                            justify={'center'}
                                            align={'center'}
                                        >
                                            {project.icon}
                                        </Flex>

                                        <Flex direction={'column'}>
                                            <Text
                                                c={'#012f6d'}
                                                fz={'56px'}
                                                fw={700}
                                                lh={'100%'}
                                            >
                                                {project.num}
                                            </Text>
                                            <Text
                                                c={'#012f6d'}
                                                fz={'28px'}
                                                fw={700}
                                                lh={'130%'}
                                            >
                                                {project.letters}
                                            </Text>
                                            <Text
                                                c={'#012f6d'}
                                                fz={'20px'}
                                                fw={300}
                                                lh={'130%'}
                                            >
                                                {project.bullet1}
                                            </Text>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            )
                        })}
                    </Flex>
                    <Flex
                        ref={ref}
                        w={'70%'}
                        h={'696px'}
                        style={{
                            maxWidth: '770px',
                            overflow: 'hidden',
                            borderRadius: '16px',
                            position: 'relative',
                        }}
                    >
                        <Swiper
                            modules={[Navigation, Pagination]}
                            pagination={{ clickable: true }}
                            navigation={{
                                nextEl: '.arrow-right',
                                prevEl: '.arrow-left',
                            }}
                            scrollbar={{ draggable: true }}
                            loop
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper
                            }}
                        >
                            {slides}
                        </Swiper>

                        <button
                            style={{
                                opacity: hovered ? '1' : '0',
                                position: 'absolute',
                                left: '10px',
                                top: '45%',
                                transition: '0.2s',
                            }}
                            className="arrow-left arrow"
                        >
                            <MdArrowForwardIos
                                size={50}
                                color={'#fff'}
                                style={{
                                    position: 'absolute',
                                    left: '10px',
                                    top: '45%',
                                    zIndex: 1000,
                                    transform: 'rotate(180deg)',
                                    cursor: 'pointer',
                                }}
                            />
                        </button>

                        <button
                            style={{
                                opacity: hovered ? '1' : '0',
                                position: 'absolute',
                                right: '10px',
                                top: '45%',
                                transition: '0.2s',
                            }}
                            className="arrow-right arrow"
                        >
                            <MdArrowForwardIos
                                size={50}
                                color={'#fff'}
                                style={{
                                    position: 'absolute',
                                    right: '10px',
                                    top: '45%',
                                    zIndex: 1000,
                                    cursor: 'pointer',
                                }}
                            />
                        </button>
                    </Flex>
                </Flex>
                {/* <Flex w={'100%'} gap={'30px'}>
                {projectsData
                    .slice(2, projectsData.length)
                    .map((project, index) => {
                        return (
                            <Flex
                                key={index}
                                justify={'center'}
                                align={'center'}
                                w={'52%'}
                                p={'55px 40px 55px'}
                                gap={'32px'}
                                style={{
                                    borderRadius: '16px',
                                    border: '1px solid rgb(188, 210, 235)',
                                }}
                            >
                                <Flex>
                                    <Flex
                                        w={'80px'}
                                        h={'80px'}
                                        justify={'center'}
                                        align={'center'}
                                        gap={'32px'}
                                    >
                                        {project.icon}
                                    </Flex>
                                    <Text
                                        c={'#012f6d'}
                                        fz={'50px'}
                                        fw={700}
                                        lh={'130%'}
                                    >
                                        {project.title}
                                    </Text>
                                </Flex>

                                <Flex direction={'column'}>
                                    <Text
                                        c={'#012f6d'}
                                        fz={'50px'}
                                        fw={700}
                                        lh={'130%'}
                                    >
                                        {project.title}
                                    </Text>
                                    <Text
                                        c={'#012f6d'}
                                        fz={'32px'}
                                        fw={300}
                                        lh={'130%'}
                                    >
                                        {project.bullet1}
                                    </Text>
                                </Flex>
                            </Flex>
                        )
                    })}
            </Flex> */}
            </Flex>
        </Flex>
    )
}
