import { Flex } from '@mantine/core';
import classes from './style.module.css';
import { Achievment } from '../Achievment/Achievment';


const data = [
  {
    title: 'Page views',
    stats: '456,133',
    description: '24% more than in the same month last year, 33% more that two years ago',
  },
  {
    title: 'New users',
    stats: '2,175',
    description: '13% less compared to last month, new user engagement up by 6%',
  },
  {
    title: 'Completed orders',
    stats: '1,994',
    description: '1994 orders were completed this month, 97% satisfaction rate',
  },
];

export function StatsGroup() {
  const stats = data.map((stat) => (
    <Flex key={stat.title} className={classes.stat} >
        <Flex gap={'24px'}>
                    <Achievment
                        title={'1'}
                        text={'млн рублей'}
                        description={'российских и иностранных инвестиций '}
                        classes={classes}
                    />
                    <Achievment
                        title={'500'}
                        text={'проектов'}
                        description={'во всех регионах России'}
                        classes={classes}
                    />
                    <Achievment
                        title={'100'}
                        text={'сотрудников'}
                        description={'по всему миру'}
                        classes={classes}
                    />
                </Flex>
    </Flex>
  ));
  return <Flex m={'auto'} w={'90vw'} h={'400px'} className={classes.root}>{stats}</Flex>;
}


