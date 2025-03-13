import { Flex, Text } from '@mantine/core'
import styles from './styles.module.css'

export const Events = () => {
  return (
    <Flex
      id={'services'}
      w={'100%'}
      p={{ base: '40px 20px 40px', md: '90px 16% 90px' }}
      direction={'column'}
      justify={'center'}
      align={'center'}
      bg={'#F7F7F7'}
      mt={'90px'}
      gap={'40px'}
    ><Text className={styles.title} mb={{ base: '32px', md: '48px' }}>
       События
      </Text>
      
      
         <Text  w={'90%'} c={'#002F6D'} size="xl" fs={'bold'} style={{ textAlign: 'left', textDecoration: 'underline' }} >Совещание по вопросам создания сети современных кампусов</Text>

         <Text  w={'90%'}  c={'#002F6D'} size="xl" style={{ textAlign: 'justify' }}>В ходе посещения международной выставки-форума «Россия» на ВДНХ Президент осмотрел макет строящегося кампуса Московского государственного строительного университета и провёл в режиме видеоконференции совещание о ходе реализации федерального проекта по созданию сети современных кампусов.</Text>

        <video controls autoPlay={false} src="http://static.kremlin.ru/media/events/video/ru/video_high/Ds4JwljU5fiAcWPTklfGJM4USAOJU2fg.mp4" width="90%" height="40%" ></video>
      </Flex>
  )
}
