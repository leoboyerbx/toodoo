export default {
    name: 'Boss',
    entity: {
        hp: 500,
        energy: 400,
        capabilities: [
            {
                name: 'Paf',
                cost: 12,
                perform(context, options) {
                    console.log('poki Noie sel !')
                }
            }
        ]
    }
}
