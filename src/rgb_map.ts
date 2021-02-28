import { RGB } from './types'

const rgbMap: { [s: string]: RGB[] } = {

  'red': [
    { r: 10, g: 0, b: 0 },
    { r: 180, g: 0, b: 0 },
    { r: 255, g: 50, b: 50 }
  ],

  'green': [
    { r: 0, g: 40, b: 0 },
    { r: 0, g: 170, b: 0 },
    { r: 50, g: 255, b: 50 }
  ],

  'blue': [
    { r: 0, g: 29, b: 50 },
    { r: 0, g: 91, b: 161 },
    { r: 45, g: 162, b: 255 }
  ],

  'pink': [
    { r: 50, g: 0, b: 29 },
    { r: 170, g: 0, b: 103 },
    { r: 255, g: 50, b: 168 }
  ],

  'lavender': [
    { r: 53, g: 35, b: 59 },
    { r: 110, g: 70, b: 120 },
    { r: 199, g: 125, b: 220 }
  ],

  'gold': [
    { r: 45, g: 45, b: 0 },
    { r: 120, g: 120, b: 0 },
    { r: 255, g: 221, b: 0 }
  ],

  'orange': [
    { r: 52, g: 32, b: 1 },
    { r: 144, g: 86, b: 3 },
    { r: 255, g: 153, b: 8 }
  ],

  'teal': [
    { r: 0, g: 43, b: 17 },
    { r: 0, g: 142, b: 56 },
    { r: 0, g: 255, b: 110 }
  ],

  'white': [
    { r: 55, g: 55, b: 55 },
    { r: 255, g: 255, b: 255 }
  ],

  'purple': [
    { r: 20, g: 0, b: 31 },
    { r: 89, g: 0, b: 135 }
  ],

  'dark': [{ r: 0, g: 0, b: 0 }]
}

export default rgbMap