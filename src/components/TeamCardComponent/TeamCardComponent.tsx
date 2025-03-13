import { Flex, Text, Image } from '@mantine/core'
import { TeamMember } from '../TeamComponent/TeamComponent'
import styles from './styles.module.css'
import { useMediaQuery } from '@mantine/hooks'

interface ITeamCardComponentProps {
    teamMember: TeamMember
    handleCardClick: (id: number) => () => void
}

export const TeamCardComponent = ({
    teamMember,
    handleCardClick,
}: ITeamCardComponentProps) => {
    const isMobile = useMediaQuery(`(max-width: 640px)`)
    const { id, image, name, position } = teamMember

    return (
        <Flex
            w={{ base: '100%', md: teamMember.size }}
            h={'fit-content'}
            m={0}
            direction={'column'}
            justify={'center'}
            gap={{ base: '8px', lg: '16px' }}
            style={{
                borderRadius: '12px',
                backdropFilter: 'grayscale(90%)',
                cursor: 'pointer',
                alignItems: 'flex-start',
                textAlign: 'left',
            }}
            onClick={handleCardClick(id)}
        >
            {isMobile ? (
                <Image
                    src={teamMember.image}
                    style={{ borderRadius: '12px' }}
                />
            ) : (
                <Flex
                    w={'100%'}
                    h={{
                        base: '200px',
                        lg:
                            teamMember.id === 1 ||
                            teamMember.id === 2 ||
                            teamMember.id === 3
                                ? '500px'
                                : '270px',
                    }}
                    className={styles.teamImage}
                    style={{
                        borderRadius: '12px',

                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                    }}
                />
            )}
            <Text
                fz={{ base: '18px', lg: '28px' }}
                fw={300}
                lh={'130%'}
                c={'#012F6D'}
            >
                {name}
            </Text>
            <Text
                fz={{ base: '14px', lg: '20px' }}
                fw={300}
                lh={'130%'}
                c={'#012F6D'}
                opacity={0.5}
            >
                {position}
            </Text>
        </Flex>
    )
}
