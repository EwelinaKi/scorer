import { Grid, GridItem } from '@chakra-ui/react';
import { Dispatch, FC, SetStateAction } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { LeaderBoard } from '../components/LeaderBoard';
import { Moves } from '../components/Moves';
import { Players } from '../components/Players';


interface GameContainerProps {
  resetGameId: Dispatch<SetStateAction<void>>,
}

export const GameContainer: FC<GameContainerProps> = ({resetGameId}) => {
  return (
    <Grid
      templateAreas={[
        `
        'header'
        'leaderboard'
        'players'
        'moves'
        'footer'
        `,
        `
        'header'
        'leaderboard'
        'players'
        'moves'
        'footer'
        `,
        `
        'header header'
        'leaderboard moves'
        'players players'
        'footer footer'
        `,
        `
        'header header'
        'leaderboard moves'
        'players players'
        'footer footer'
        `,
        `
        'header header header'
        'leaderboard players moves'
        'footer footer footer'
        `,
      ]}
      gridTemplateColumns={['1fr', '1fr', '1fr 1fr', '1fr 1fr','1fr 1fr 1fr']}
      gap="4"
    >
      <GridItem area={'header'}>
        <Header resetGameId={resetGameId}/>
      </GridItem>
      <GridItem bg='pink.300' area={'leaderboard'} minW='360px'>
        <LeaderBoard/>
      </GridItem>
      <GridItem bg='green.300' area={'players'} minW='360px'>
        <Players/>
      </GridItem>
      <GridItem bg='blue.300' area={'moves'} minW='360px' >
        <Moves/>
      </GridItem>
      <GridItem bg={['yellow.300', 'orange.300', 'red.300', 'pink.300', 'purple.300']} area={'footer'}>
        <Footer/>
      </GridItem>
    </Grid>
  );
};