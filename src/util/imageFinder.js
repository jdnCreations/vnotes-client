import astra from '../assets/images/astra.png';
import breach from '../assets/images/breach.png';
import brimstone from '../assets/images/brimstone.png';
import chamber from '../assets/images/chamber.png';
import cypher from '../assets/images/cypher.png';
import jett from '../assets/images/jett.png';
import kayo from '../assets/images/kayo.png';
import killjoy from '../assets/images/killjoy.png';
import neon from '../assets/images/neon.png';
import omen from '../assets/images/omen.png';
import phoenix from '../assets/images/phoenix.png';
import raze from '../assets/images/raze.png';
import reyna from '../assets/images/reyna.png';
import sage from '../assets/images/sage.png';
import skye from '../assets/images/skye.png';
import sova from '../assets/images/sova.png';
import viper from '../assets/images/viper.png';
import yoru from '../assets/images/yoru.png';

import bind from '../assets/images/bind.png';
import breeze from '../assets/images/breeze.png';
import icebox from '../assets/images/icebox.png';
import ascent from '../assets/images/ascent.png';
import split from '../assets/images/split.png';
import haven from '../assets/images/haven.png';
import fracture from '../assets/images/fracture.png';

export function getNoteAgent(note) {
  switch (note.agent.toLowerCase()) {
    case 'astra':
      return astra;
    case 'breach':
      return breach;
    case 'brimstone':
      return brimstone;
    case 'chamber':
      return chamber;
    case 'cypher':
      return cypher;
    case 'jett':
      return jett;
    case 'kayo':
      return kayo;
    case 'killjoy':
      return killjoy;
    case 'neon':
      return neon;
    case 'omen':
      return omen;
    case 'phoenix':
      return phoenix;
    case 'raze':
      return raze;
    case 'reyna':
      return reyna;
    case 'sage':
      return sage;
    case 'skye':
      return skye;
    case 'sova':
      return sova;
    case 'viper':
      return viper;
    case 'yoru':
      return yoru;
    default:
      return breach;
  }
}

export function getNoteMap(note) {
  switch (note.map.toLowerCase()) {
    case 'bind':
      return bind;
    case 'breeze':
      return breeze;
    case 'icebox':
      return icebox;
    case 'ascent':
      return ascent;
    case 'split':
      return split;
    case 'haven':
      return haven;
    case 'fracture':
      return fracture;
    default:
      return breach;
  }
}
