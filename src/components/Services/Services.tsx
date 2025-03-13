import {
    Accordion,
    Box,
    Flex,
    List,
    SimpleGrid,
    Text,
    Timeline,
    Title,
} from '@mantine/core'
import styles from './styles.module.css'
import { useMediaQuery } from '@mantine/hooks'
import {
    MdCurrencyRuble,
    MdManageAccounts,
    MdOutlineConstruction,
} from 'react-icons/md'
import { BsFillPeopleFill } from 'react-icons/bs'
import { AiOutlineStock } from 'react-icons/ai'
import { RxRulerSquare } from 'react-icons/rx'
import { IconChevronDown } from '@tabler/icons-react'
import { useState } from 'react'

const concessionProjectStages = [
    {
        id: 0,
        stage: 'Подготовительный этап',
        bullet1:
            'Определение потребности в проекте, его целей и ожидаемых результатов.',
        bullet2: 'Анализ рынка, экономическая оценка проекта, оценка рисков.',
        bullet3: '',
    },
    {
        id: 1,
        stage: 'Финансирование проекта',
        bullet1:
            'Разработка и утверждение документов, необходимых для проведения тендера.',
        bullet2:
            'Организация процесса подачи заявок, оценка предложений участников.',
        bullet3: '',
    },
    {
        id: 2,
        stage: 'Разработка и проектирование',
        bullet1: 'Обсуждение и согласование ключевых аспектов соглашения.',
        bullet2:
            'Заключение официального документа, определяющего права и обязанности сторон.',
        bullet3: '',
    },
    {
        id: 3,
        stage: 'Строительство и реализация',
        bullet1:
            'Выполнение необходимых работ по созданию или обновлению инфраструктуры',
        bullet2:
            'Осуществление деятельности по управлению и обслуживанию объекта концессии.',
        bullet3: '',
    },
    {
        id: 4,
        stage: 'Эксплуатация объекта',
        bullet1: 'Отслеживание выполнения условий концессионного соглашения.',
        bullet2:
            'Принятие мер по управлению рисками и внесение изменений в проект при необходимости.',
        bullet3: '',
    },
    {
        id: 5,
        stage: 'Мониторинг и отчетность',
        bullet1:
            'Возврат объекта государству или другому органу в соответствии с условиями соглашения.',
        bullet2:
            'Анализ достигнутых результатов и оценка эффективности проекта.',
        bullet3: '',
    },
]

export const Services = () => {
    const isMobile = useMediaQuery('(max-width: 36em)')
    const [active, setActive] = useState<number>(1)

    const data = [
        {
            icon: <MdCurrencyRuble size={isMobile ? 16 : 32} />,
            title: `Инвестиции в инфраструктуру`,
            description:
                'Холдинг является наиболее опытным инвестором в инфраструктуру на российском рынке и владеет обширным инструментарием для решения полного спектра задач на всех этапах реализации инфраструктурных проектов – от консультирования по созданию концепции проекта и организации конкурса до привлечения финансирования, строительства и последующей эксплуатации.',
        },
        {
            icon: <BsFillPeopleFill size={isMobile ? 16 : 32} />,
            title: 'Предпроектная подготовка',
            description:
                'Оценка возможности реализовать проект исходя из требований и имеющихся возможностей. Включает разработку финансовой модели, анализ возможных условий финансирования и сроков реализации проекта, подачу конкурсного предложения или частной инициативы.',
        },
        {
            icon: <AiOutlineStock size={isMobile ? 16 : 32} />,
            title: 'Финансирование',
            description:
                'Структурирование финансирования в соответствии с международными стандартами, выбор подходящих видов акционерного и долгового финансирования в зависимости от параметров проекта, получение наилучших условий на рынке.',
        },
        {
            icon: <RxRulerSquare size={isMobile ? 16 : 32} />,
            title: 'Техническое консультирование',
            description:
                'Строительное и инженерное консультирование, анализ и учёт трафика на автодорогах, разработка систем управления дорожным движением и взимания платы.',
        },
        {
            icon: <MdOutlineConstruction size={isMobile ? 16 : 32} />,
            title: 'Девелопмент',
            description:
                'Девелопмент «под ключ» с привлечением внешнего финансирования, включая развитие прилегающих к объектам инфраструктуры территорий, а также организация службы заказчика и осуществление надзора за ходом строительства с целью обеспечения завершения строительства в срок и в рамках бюджета.',
        },
        {
            icon: <MdManageAccounts size={isMobile ? 16 : 32} />,
            title: 'Эксплуатация объектов',
            description:
                'Организация эксплуатации инфраструктурных объектов на мировом уровне и с учетом накопленного российского опыта.',
        },
    ]

    const items = data.map((item) => (
        <Flex
            className={styles.card}
            key={item.title}
            gap={{ base: '16px' }}
            m={'0 auto'}
        >
            <Flex gap={'12px'}>
                <Box w={'28px'} h={'28px'}>
                    {item.icon}
                </Box>
                <Text className={styles.cardTitle} mb={0}>
                    {item.title}
                </Text>
            </Flex>

            <Text className={styles.cardDescription}>{item.description}</Text>
        </Flex>
    ))
    return (
        <Flex
            id={'services'}
            w={'100%'}
            direction={'column'}
            justify={'center'}
            align={'center'}
            bg={'#F7F7F7'}
        >
            <Text className={styles.title} mb={{ base: '32px', md: '48px' }}>
                Наши услуги
            </Text>

            <Flex
                w={'100%'}
                m={'0 auto'}
                direction={'column'}
                justify={'center'}
                gap={'56px'}
            >
                <SimpleGrid
                    cols={{ base: 1, xs: 2 }}
                    verticalSpacing={20}
                    spacing={20}
                >
                    {items}
                </SimpleGrid>
            </Flex>

            <Flex
                w={'100%'}
                direction={{ base: 'column', md: 'row' }}
                gap={{ base: '16px', lg: '24px' }}
                p={{ base: '40px 13% 0', md: '90px 0 0' }}
                bg={'transparent'}
                m={'auto'}
                justify={'space-between'}
            >
                <Flex m={'auto'}>
                    <Title c={'#002F6D'} fz={'48px'}>
                        Этапы реализации проекта
                    </Title>
                </Flex>
                <Timeline
                    mt={{ base: '24px', lg: '48px' }}
                    pt={'10px'}
                    w={{ base: '100%', lg: '50%' }}
                    active={active}
                    bulletSize={24}
                    lineWidth={2}
                    styles={{
                        root: {
                            padding: '10px',
                        },
                    }}
                >
                    {concessionProjectStages.map((stage) => {
                        return (
                            <Timeline.Item
                                key={stage.id}
                                h={'auto'}
                                c={'#002F6D'}
                                mb={'20px'}
                                style={{
                                    position: 'relative',
                                }}
                                title={stage.stage}
                                fz={'28px'}
                            >
                                <Accordion
                                    style={{
                                        padding: 0,
                                    }}
                                    chevron={null}
                                >
                                    <Accordion.Item
                                        key={stage.stage}
                                        value={stage.stage}
                                        className={styles.accordionItem}
                                        onClick={() => setActive(stage.id)}
                                    >
                                        <Accordion.Control
                                            w={'fit-content'}
                                            className={styles.accordionControl}
                                            fz={'12px'}
                                            style={{
                                                display: 'flex',
                                                textAlign: 'start',
                                                marginBottom: '20px',
                                                color: '#002F6D',
                                                alignContent: 'flex-start',
                                                padding: 0,
                                                alignItems: 'flex-start',
                                            }}
                                            styles={{
                                                chevron: {},
                                            }}
                                            chevron={<IconChevronDown />}
                                        ></Accordion.Control>
                                        <Accordion.Panel fz={'24px'}>
                                            <List spacing="xs">
                                                <List.Item>
                                                    {stage.bullet1}
                                                </List.Item>
                                                <List.Item>
                                                    {stage.bullet2}
                                                </List.Item>
                                                <List.Item
                                                    style={{
                                                        display:
                                                            stage.bullet3
                                                                .length > 0
                                                                ? 'flex'
                                                                : 'none',
                                                    }}
                                                >
                                                    {stage.bullet3}
                                                </List.Item>
                                            </List>
                                        </Accordion.Panel>
                                    </Accordion.Item>
                                </Accordion>
                            </Timeline.Item>
                        )
                    })}
                </Timeline>
            </Flex>
        </Flex>
    )
}
