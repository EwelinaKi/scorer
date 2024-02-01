export interface Colors {
  [key: string]: ColorDetail,
}

export interface ColorDetail {
  name: ColorName,
  text: string,
  background: string,
  avatar: string,
}

export enum ColorName {
  GOLD = 'GOLD',
  SILVER = 'SILVER',
  YELLOW = 'YELLOW',
  ORANGE = 'ORANGE',
  DARK_ORANGE = 'DARK_ORANGE',
  RED = 'RED',
  PINK = 'PINK',
  PURPLE = 'PURPLE',
  VIOLET = 'VIOLET',
  NAVY_BLUE = 'NAVY_BLUE',
  BLUE = 'BLUE',
  LIME = 'LIME',
  GREEN = 'GREEN',
  DARK_GREEN = 'DARK_GREEN',
  TEAL = 'TEAL',
  TURQUOISE = 'TURQUOISE',
  LIGHT_PINK = 'LIGHT_PINK',
  GRAY = 'GRAY',
  BROWN = 'BROWN',
  BLACK = 'BLACK',
  WHITE = 'WHITE',
};


export const GameColors: Colors = {
  GOLD: {
    name: ColorName.GOLD,
    background: '#FFB301',
    text: '#fff',
    avatar: 'FFB301',
  },
  SILVER: {
    name: ColorName.SILVER,
    background: '#546E7A',
    text: '#fff',
    avatar: '546E7A',
  },
  DARK_GREEN: {
    name: ColorName.DARK_GREEN,
    text: '#fff',
    background: '#43A048',
    avatar: '43A048'
  },
  GREEN: {
    name: ColorName.GREEN,
    text: '#fff',
    background: '#7CB343',
    avatar: '7CB343'
  },
  LIME: {
    name: ColorName.LIME,
    text: '#fff',
    background: '#C0CA33',
    avatar: 'C0CA33'
  },
  YELLOW: {
    name: ColorName.YELLOW,
    background: '#FDD835',
    text: '#fff',
    avatar: 'FDD835',
  },
  ORANGE: {
    name: ColorName.ORANGE,
    text: '#fff',
    background: '#FB8C01',
    avatar: 'FB8C01'
  },
  DARK_ORANGE: {
    name: ColorName.DARK_ORANGE,
    text: '#fff',
    background: '#F4511E',
    avatar: 'F4511E'
  },
  RED: {
    name: ColorName.RED,
    text: '#fff',
    background: '#E53934',
    avatar: 'E53934'
  },
  LIGHT_PINK: {
    name: ColorName.LIGHT_PINK,
    text: '#fff',
    background: '#f56298',
    avatar: 'f56298'
  },
  PINK: {
    name: ColorName.PINK,
    text: '#fff',
    background: '#D81A60',
    avatar: 'D81A60'
  },
  PURPLE: {
    name: ColorName.PURPLE,
    text: '#fff',
    background: '#8E24AA',
    avatar: '8E24AA'
  },
  VIOLET: {
    name: ColorName.VIOLET,
    text: '#fff',
    background: '#5E35B2',
    avatar: '5E35B2'
  },
  NAVY_BLUE: {
    name: ColorName.NAVY_BLUE,
    text: '#fff',
    background: '#3949AB',
    avatar: '3949AB'
  },
  BLUE: {
    name: ColorName.BLUE,
    text: '#fff',
    background: '#1F88E5',
    avatar: '1F88E5'
  },
  TURQUOISE: {
    name: ColorName.TURQUOISE,
    text: '#fff',
    background: '#00ACC1',
    avatar: '00ACC1'
  },
  TEAL: {
    name: ColorName.TEAL,
    text: '#fff',
    background: '#00897B',
    avatar: '00897B'
  },
  BROWN: {
    name: ColorName.BROWN,
    text: '#fff',
    background: '#6E4C41',
    avatar: '6E4C41'
  },
  BLACK: {
    name: ColorName.BLACK,
    text: '#fff',
    background: '#2D3748',
    avatar: '2D3748'
  },
  GRAY: {
    name: ColorName.GRAY,
    text: '#fff',
    background: '#A0AEC0',
    avatar: 'A0AEC0'
  },
  WHITE: {
    name: ColorName.WHITE,
    text: '#fff',
    background: '#EDF2F7',
    avatar: 'EDF2F7'
  },
};

