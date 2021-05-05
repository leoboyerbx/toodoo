export default {
  name: 'Poki',
  img: {
    portrait: 'poki-portrait.svg',
    character: 'poki-character.png'
  },
  entity: {
    hp: 100,
    capabilities: [
      {
        name: 'Noie sel',
        cost: 12,
        perform(state, options) {
          console.log('poki Noie sel !')
        }
      }
    ]
  }
}
