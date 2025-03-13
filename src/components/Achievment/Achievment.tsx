import { Flex, Title, Text } from '@mantine/core'

interface IAchievmentProps {
    classes: CSSModuleClasses
    title: string
    text: string
    description: string
}
export const Achievment = ({
    title,
    text,
    description,
}: IAchievmentProps) => {
    return (
        <Flex
            direction={'column'}
            justify={'flex-start'}
            align={'flex-start'}
            w={'300px'}
        >
            <Flex justify={'center'}>
                <Title c={'#00AAFF'} fz={'120px'} fw={900} lh={'120px'}>
                    {title}
                </Title>
                <Flex justify={'center'} direction={'column'}>
                    <Text c={'#00AAFF'}>{text}</Text>
                </Flex>
            </Flex>
            <Flex justify={'center'}>
                <Text c={'#fff'}>{description}</Text>
            </Flex>
        </Flex>
    )
}
