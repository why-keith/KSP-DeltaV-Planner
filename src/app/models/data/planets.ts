import { Kerbin } from './kerbin';
import { Planet } from '../planet.model';

export const planets: Planet[] = [
  {
    name: 'Moho',
    isPlanet: true,
    hasAtmosphere: false,
    canLand: true,
    imageUrl: 'assets/planets/moho.webp',
    dvGL: 870,
    dvLI: 2410,
    dvK: 760,
    dvPlaneChange: 2520,
    satellites: [],
    color: '#D38D5F',
  },
  {
    name: 'Eve',
    isPlanet: true,
    hasAtmosphere: true,
    canLand: true,
    imageUrl: 'assets/planets/eve.webp',
    dvGL: 8000,
    dvLE: 1330,
    dvEI: 80,
    dvK: 90,
    dvPlaneChange: 430,
    color: '#7137c7',
    satellites: [
      {
        name: 'Gilly',
        isPlanet: false,
        hasAtmosphere: false,
        canLand: true,
        imageUrl: 'assets/planets/gilly.webp',
        parent: 'Eve',
        dvGL: 30,
        dvLI: 410,
        dvPE: 60,
        dvPlaneChange: 0,
        color: '#8a5cd1',
      }
    ]
  },
  new Kerbin(),
  {
    name: 'Duna',
    isPlanet: true,
    hasAtmosphere: true,
    canLand: true,
    imageUrl: 'assets/planets/duna.webp',
    dvGL: 1450,
    dvLE: 360,
    dvEI: 250,
    dvK: 130,
    dvPlaneChange: 10,
    color: '#fd4001',
    satellites: [
      {
        name: 'Ike',
        isPlanet: false,
        hasAtmosphere: false,
        canLand: true,
        imageUrl: 'assets/planets/ike.webp',
        parent: 'Duna',
        dvGL: 390,
        dvLI: 180,
        dvPE: 30,
        dvPlaneChange: 0,
        color: '#fd612c',
      }
    ]
  },
  {
    name: 'Dres',
    isPlanet: true,
    hasAtmosphere: false,
    canLand: true,
    imageUrl: 'assets/planets/dres.webp',
    dvGL: 430,
    dvLI: 1290,
    dvK: 610,
    dvPlaneChange: 1010,
    satellites: [],
    color: '#989898',
  },
  {
    name: 'Jool',
    isPlanet: true,
    hasAtmosphere: true,
    canLand: false,
    imageUrl: 'assets/planets/jool.webp',
    dvGL: 14000,
    dvLE: 2810,
    dvEI: 160,
    dvK: 980,
    dvPlaneChange: 270,
    color: '#71c737',
    satellites: [
      {
        name: 'Laythe',
        isPlanet: false,
        hasAtmosphere: true,
        canLand: true,
        imageUrl: 'assets/planets/laythe.webp',
        parent: 'Jool',
        dvGL: 2900,
        dvLI: 1070,
        dvPE: 930,
        dvPlaneChange: 0,
        color: '#87c75d',
      },
      {
        name: 'Vall',
        isPlanet: false,
        hasAtmosphere: false,
        canLand: true,
        imageUrl: 'assets/planets/vall.webp',
        parent: 'Jool',
        dvGL: 860,
        dvLI: 910,
        dvPE: 620,
        dvPlaneChange: 0,
        color: '#6aae3c',
      },
      {
        name: 'Tylo',
        isPlanet: false,
        hasAtmosphere: false,
        canLand: true,
        imageUrl: 'assets/planets/tylo.webp',
        parent: 'Jool',
        dvGL: 2270,
        dvLI: 1100,
        dvPE: 400,
        dvPlaneChange: 0,
        color: '#5a9333',
      },
      {
        name: 'Bop',
        isPlanet: false,
        hasAtmosphere: false,
        canLand: true,
        imageUrl: 'assets/planets/bop.webp',
        parent: 'Jool',
        dvGL: 230,
        dvLI: 900,
        dvPE: 220,
        dvPlaneChange: 2440,
        color: '#416a24',
      },
      {
        name: 'Pol',
        isPlanet: false,
        hasAtmosphere: false,
        canLand: true,
        imageUrl: 'assets/planets/pol.webp',
        parent: 'Jool',
        dvGL: 130,
        dvLI: 820,
        dvPE: 160,
        dvPlaneChange: 700,
        color: '#2d4a19',
      },
    ]
  },
  {
    name: 'Eeloo',
    isPlanet: true,
    hasAtmosphere: false,
    canLand: true,
    imageUrl: 'assets/planets/eeloo.webp',
    dvGL: 620,
    dvLI: 1370,
    dvK: 1140,
    dvPlaneChange: 1330,
    satellites: [],
    color: '#a9a9a9',
  },
  {
    name: 'Kerbol',
    isPlanet: true, // ok not really
    hasAtmosphere: true,
    canLand: false,
    imageUrl: 'assets/planets/kerbol.webp',
    dvGL: 67000,
    dvLI: 13700,
    dvK: 6000,
    dvPlaneChange: 0,
    satellites: [],
    color: '#EFAB01',
  }
];
