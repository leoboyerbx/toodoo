export default {
  img: {
    portrait: 'poki-portrait.svg',
    character: 'poki-character.png'
  },
  entity: {
    hp: 100,
    capabilities: [
      {
        name: 'Noie sel',
        cost: '',
        perform(state, options) {
          console.log('poki Noie sel !')
        }
      }
    ]
  }
}
