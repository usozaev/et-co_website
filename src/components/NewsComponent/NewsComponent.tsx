import { Accordion, Flex, Image, Text } from '@mantine/core'
import { useHover } from '@mantine/hooks'
import { useState } from 'react'
import { MdArrowBack } from 'react-icons/md'
import Markdown from 'react-markdown'
import { useNavigate } from 'react-router-dom'
import { NEWS_DATA } from '../../constants/constants'

// interface INewsRow {
//     title: string
//     calendarDate: string
//     link: string
//     image?: string
//     description?: string
// }

// const YEARS = [
//     {
//         year: '2024',
//     },
//     {
//         year: '2023',
//     },
// ]

// const NewsRow = ({
//     title,
//     description,
//     calendarDate,
//     link,
//     image,
// }: INewsRow) => {
//     const { hovered, ref } = useHover()

//     const handleLinkClick = (link: string) => () => {
//         window.open(link)
//     }
//     return (
//         <Flex w={'100%'} justify={'space-between'}>
//             <Flex
//                 flex={1}
//                 ref={ref}
//                 w={'100%'}
//                 gap={'40px'}
//                 pb={'36px'}
//                 style={{
//                     borderBottom: hovered ? '2px solid #233C91' : '',
//                     cursor: 'pointer',
//                 }}
//                 onClick={handleLinkClick(link)}
//                 direction={{ base: 'column', md: 'row' }}
//             >
//                 <Image w={{ base: '100%', md: '20%' }} h={'100%'} src={image} />
//                 <Flex direction={'column'} gap={'16px'}>
//                     <Text
//                         c={'#012F6D'}
//                         fz={'24px'}
//                         fw={hovered ? 700 : 300}
//                         lh={'130%'}
//                     >
//                         {title}
//                     </Text>
//                     <Text
//                         c={'#012F6D'}
//                         fz={'18px'}
//                         opacity={0.5}
//                         fw={hovered ? 700 : 300}
//                         lh={'130%'}
//                     >
//                         {description}
//                     </Text>
//                     <Text
//                         c={'#012F6D'}
//                         fz={'18px'}
//                         opacity={0.5}
//                         fw={300}
//                         lh={'130%'}
//                     >
//                         {calendarDate}
//                     </Text>
//                 </Flex>
//             </Flex>
//         </Flex>
//     )
// }

export const NewsComponent = () => {
    const sortedNEWS_DATA = NEWS_DATA.sort((a, b) => b.date.localeCompare(a.date))

    const [data] = useState(sortedNEWS_DATA)
    const { hovered, ref } = useHover()
    const navigate = useNavigate()

    // const handleYearClick = (year: string) => () => {
    //     setActiveYear(year)
    // }

    // useEffect(() => {
    //     setData(NEWS_DATA.filter((item) => item.date.includes(activeYear)))
    // }, [activeYear])

    return (
        <Flex
            direction={{ base: 'column', lg: 'row' }}
            m={{ base: '120px auto', lg: '0 auto' }}
            w={{ base: '90%', lg: '100%' }}
            gap={'39px'}
        >
            <Flex
                w={'fit-content'}
                direction={{ base: 'row', lg: 'column' }}
                gap={'24px'}
                m={{ base: '0', lg: '0 auto' }}
                style={{ cursor: 'pointer' }}
                wrap={'wrap'}
            >
                <Flex
                    ref={ref}
                    w={'170px'}
                    p={'10px'}
                    style={{
                        border: hovered
                            ? '1px solid #233C91'
                            : '1px solid #D7DBE4',
                        cursor: 'pointer',
                    }}
                    justify={'center'}
                    align={'center'}
                    onClick={() => navigate('/')}
                    gap={'20px'}
                >
                    <MdArrowBack size={'30px'} color={'#012f6d'} />
                    <Text fz={'32px'} fw={300} lh={'130%'} c={'#012f6d'}>
                        Назад
                    </Text>
                </Flex>
                {/* {YEARS.map((year, key) => (
                    <Flex
                        key={key}
                        w={'170px'}
                        p={'10px'}
                        style={{
                            border:
                                year.year === activeYear
                                    ? '1px solid #233C91'
                                    : '1px solid #D7DBE4',
                        }}
                        onClick={handleYearClick(year.year)}
                    >
                        <Text fz={'32px'} fw={300} lh={'130%'}>
                            {year.year}
                        </Text>
                    </Flex>
                ))} */}
            </Flex>
            <Flex direction={'column'} w={'100%'} gap={'36px'}>
                {data.map((item) => {
                    console.log(item)
                    return (
                        <Accordion>
                            <Accordion.Item key={item.title} value={item.title}>
                                <Accordion.Control icon={null}>
                                    <Text fw={'bold'}>{item.title}</Text>
                                </Accordion.Control>
                                <Accordion.Panel
                                    onClick={() =>
                                        item.linkProps.href !== ''
                                            ? window.open(item.linkProps.href)
                                            : null
                                    }
                                >
                                    <Flex
                                        gap={'24px'}
                                        w={'100%'}
                                        h={'100%'}
                                        style={{
                                            textWrap: 'balance',
                                            textAlign: 'justify',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        <Image
                                            style={{
                                                scale: 0.1,
                                                width: '30%',
                                                height: '100%',
                                            }}
                                            src={item.image}
                                        />
                                        <Markdown>{item.description}</Markdown>
                                    </Flex>
                                </Accordion.Panel>
                            </Accordion.Item>
                        </Accordion>
                        // <NewsRow
                        //     key={key}
                        //     title={item.title}
                        //     calendarDate={item.calendarDate}
                        //     link={item.linkProps.href}
                        //     image={item.image}
                        //     description={item.description}
                        // />
                    )
                })}
            </Flex>
        </Flex>
    )
}
