import { Container, Flex, Grid, Image, Text } from '@mantine/core'
import buildingsImage from '../images/buildings.jpg'
import AnimatedLines from '../AnimatedLines/AnimatedLines'
import { useScroll, animated } from "react-spring";
import { useState } from 'react'



export const GridSection = () => {
    const [scrollVal, setScrollVal] = useState(0);

    const { scrollYProgress } = useScroll({
        onChange: ({ value: { scrollYProgress } }) => {
            setScrollVal(scrollYProgress + 1);
        }
    });

    console.log(scrollYProgress)

    return (
        <Container
            w={'100%'}
            style={{ justifyContent: 'center' }}
            m={0}
            my="xl"
            h={'fit-content'}
        >
            <AnimatedLines />
            <Grid w={'97vw'} gutter="md" bg={'grainsboro'}>
                {/* First column with 1 row */}
                <Grid.Col span={6}>
                    <Flex direction={'column'} gap={'20px'}
                        style={{
                            height: 'fit-content',
                            background: 'transparent',
                            borderRight: '1px solid #1f1f1f',
                            padding: '24px',
                        }}
                    >
                        <Image w={'100%'} h={'200px'} src={buildingsImage} />
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel sapien mi. Aliquam erat volutpat. Maecenas efficitur imperdiet auctor. Sed efficitur dignissim urna, quis vehicula risus porttitor sit amet. Aenean sed lacinia felis. Donec sed ipsum purus. Donec et tortor sed est gravida scelerisque id sit amet felis. Proin ultrices ex eget velit vulputate, sit amet dapibus nisi pretium. Aenean egestas metus sit amet dignissim accumsan. </Text>

                        <Text>При этом подобные элементы «самобытности» края встроены в общую архитектурную концепцию кампуса максимально гармонично, не в ущерб современных зданий и уютными пространственными решениями.
                        </Text>
                    </Flex>
                </Grid.Col>

                <Grid.Col span={6}>

                    <Flex direction={'column'} gap={'20px'}
                        style={{
                            width: '100%',
                            height: '100%',
                            background: 'transparent',
                            borderRight: '1px solid #1f1f1f',
                            padding: '24px',
                        }}
                    >
                        <animated.div
                            style={{
                                position: "fixed",
                                top: "50%",
                                right: "-100%",
                                transform: `rigth (${scrollVal}) translate(-70%, -70%)`,
                                background: "red",
                                height: '100%',
                                width: '100%',
                            }}
                        >
                            <iframe width="100%" height="700px" src="https://www.youtube.com/embed/lequ7JhwFqo?si=moWiwamCW_Lmsu30" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

                        </animated.div>


                    </Flex>
                </Grid.Col>

            </Grid>
        </Container>
    )
}
