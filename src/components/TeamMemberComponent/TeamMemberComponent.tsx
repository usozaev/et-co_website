import { Flex, Text, Image, CloseIcon } from '@mantine/core'
import { ITeamMemberProps } from '../TeamComponent/TeamComponent'
import Markdown from 'react-markdown'

export const TeamMemberComponent = ({
    handleCardClick,
    teamMember,
}: ITeamMemberProps) => {
    console.log(teamMember, 'member')
    return (
        <Flex
            direction={{ base: 'column', md: 'row' }}
            w={'60%'}
            h={{ base: 'fit-content', md: '485px' }}
            gap={'30px'}
            mb={'36px'}
            pos={'relative'}
        >
            <CloseIcon
                width={'40px'}
                height={'40px'}
                size="40px"
                style={{
                    position: 'absolute',
                    top: '0',
                    right: '10px',

                    color: '#012F6D',
                    zIndex: 100,
                }}
                cursor={'pointer'}
                onClick={handleCardClick(undefined)}
            />
            <Image
                style={{ borderRadius: '12px', filter: 'grayscale(1)' }}
                w={{ base: '100%', md: '470px' }}
                h={{ base: '100%', lg: '485px' }}
                src={teamMember.image}
                fit="contain"
            />

            <Flex
                direction={'column'}
                gap={'16px'}
                style={{
                    WebkitMaskImage:
                        'linear-gradient(180deg, #000 90%, transparent)',
                }}
            >
                <Text
                    fz={{ base: '18px', lg: '32px' }}
                    fw={300}
                    lh={'130%'}
                    c={'#012F6D'}
                >
                    {teamMember.name}
                </Text>
                <Text
                    fz={{ base: '14px', lg: '20px' }}
                    fw={300}
                    lh={'130%'}
                    c={'#012F6D'}
                    style={{ overflow: 'scroll' }}
                    opacity={0.5}
                >
                    <Markdown>{teamMember.description}</Markdown>
                </Text>
            </Flex>
        </Flex>
    )
}
