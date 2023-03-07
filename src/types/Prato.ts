import cardapio from 'data/cardapio.json';
// sendo um arquivo para typos, para a melhor organização das tipagens

export type Cardapio = typeof cardapio;

export type Prato = typeof cardapio[0];