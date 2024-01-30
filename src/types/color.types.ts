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
  RED = 'RED',
  GREEN = 'GREEN',
  LIGHT_GREEN = 'LIGHT_GREEN',
  BLUE = 'BLUE',
  LIGHT_BLUE = 'LIGHT_BLUE',
  GOLD = 'GOLD',
  SILVER = 'SILVER',
  BLACK = 'BLACK',
  WHITE = 'WHITE',
  YELLOW = 'YELLOW',
  ORANGE = 'ORANGE',
  TEAL = 'TEAL',
  PINK = 'PINK',
  PURPLE = 'PURPLE',
  GRAY = 'GRAY',
  BROWN = 'BROWN',
};


export const GameColors: Colors = {
  RED: {
    name: ColorName.RED,
    text: '#fff',
    background: '#ff0000',
    avatar: 'ff0000'
  },
  GREEN: {
    name: ColorName.GREEN,
    text: '#fff',
    background: '#00ff00',
    avatar: '00ff00'
  },
  BLUE: {
    name: ColorName.BLUE,
    text: '#fff',
    background: '#0000ff',
    avatar: '0000ff'
  },
  YELLOW: {
    name: ColorName.YELLOW,
    text: '#fff',
    background: '#ffc800',
    avatar: 'ffff00'
  },
  BLACK: {
    name: ColorName.BLACK,
    text: '#fff',
    background: '#000',
    avatar: '000'
  },
  PINK: {
    name: ColorName.PINK,
    text: '#fff',
    background: '#f300c4',
    avatar: 'f300c4'
  },
  PURPLE: {
    name: ColorName.PURPLE,
    text: '#fff',
    background: '#7e00f3',
    avatar: '7e00f3'
  },
  ORANGE: {
    name: ColorName.ORANGE,
    text: '#fff',
    background: '#ff6a00',
    avatar: 'ff6a00'
  },
  BROWN: {
    name: ColorName.BROWN,
    text: '#fff',
    background: '#522301',
    avatar: '522301'
  },
  TEAL: {
    name: ColorName.TEAL,
    text: '#fff',
    background: '#0d938b',
    avatar: '0d938b'
  },
  GRAY: {
    name: ColorName.GRAY,
    text: '#fff',
    background: '#797979',
    avatar: '797979'
  },
};

