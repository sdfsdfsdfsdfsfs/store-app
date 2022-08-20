import aot from '../assets/collections/aot.webp';
import dsl from '../assets/collections/dsl.jpg';
import jba from '../assets/collections/jba.jpeg';
import jjk from '../assets/collections/jjk.webp';
import nar from '../assets/collections/nar.jpeg';
import opi from '../assets/collections/opi.webp';
import sxf from '../assets/collections/sxf.webp';
import sgh from '../assets/collections/sgh.jpg';
import sel from '../assets/collections/sel.jpg';

const collections = {
  aot: { 
    name: 'Attack on Titan', 
    img: aot,
    slug: 'attack-on-titan',
    items: [
      'aot-01',
      'aot-02',
    ]
  },
  dsl: { 
    name: 'Demon Slayer', 
    img: dsl,
    slug: 'demon-slayer',
    items: [
      'dsl-01',
      'dsl-02',
      'dsl-03',
    ]
  },
  jba: { 
    name: "Jojo's Bizarre Adventures", 
    img: jba,
    slug: 'jojos',
    items: [
      'jba-01',
      'jba-02',
    ]
  },
  jjk: { 
    name: 'Jujutsu Kaisen', 
    img: jjk,
    slug: 'jujutsu-kaisen',
    items: [
      'jjk-01',
      'jjk-02',
    ]
  },
  nar: { 
    name: 'Naruto', 
    img: nar,
    slug: 'naruto',
    items: [
      'nar-01',
      'nar-02',
      'nar-03',
    ]
  },
  opi: { 
    name: 'One Piece', 
    img: opi,
    slug: 'one-piece',
    items: [
      'opi-01',
    ]
  },
  sxf: { 
    name: 'Spy x Family', 
    img: sxf,
    slug: 'spy-family',
    items: [
      'sxf-01',
    ]
  },
  sgh: { 
    name: 'Studio Ghibli', 
    img: sgh,
    slug: 'studio-ghibli',
    items: [
      'sgh-01',
      'sgh-02',
    ]
  },
  sel: { 
    name: 'Serial Experiments Lain', 
    img: sel,
    slug: 'lain',
    items: [
      'sel-01',
      'sel-02',
      'sel-03',
    ]
  },
}

export default collections;
