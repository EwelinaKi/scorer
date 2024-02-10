import { Grid, GridItem } from '@chakra-ui/react';
import { Dispatch, FC, SetStateAction, useRef } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { LeaderBoard } from '../components/LeaderBoard';
import { Moves } from '../components/Moves';
import { Players } from '../components/Players';


interface GameContainerProps {
  resetGameId: Dispatch<SetStateAction<void>>,
}

export const GameContainer: FC<GameContainerProps> = ({resetGameId}) => {
  const leadersContainerRef = useRef<HTMLInputElement>(null);
  
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
      gridTemplateColumns={['1fr', '1fr', '1fr 1fr', '1fr 1fr', '1fr 1fr 1fr']}
      gap='4'
    >
      <GridItem area={'header'}>
        <Header resetGameId={resetGameId} />
      </GridItem>
      <GridItem area={'leaderboard'} minW='360px' ref={leadersContainerRef}>
        <LeaderBoard />
      </GridItem>
      <GridItem area={'players'} minW={['360px', '360px', '680px']}>
        <Players />
      </GridItem>
      <GridItem area={'moves'} minW='360px'>
        <Moves height={leadersContainerRef?.current?.offsetHeight || 100}/>
      </GridItem>
      <GridItem area={'footer'}>
        <Footer />
      </GridItem>
    </Grid>
  );
};