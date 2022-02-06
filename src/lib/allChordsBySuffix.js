import guitarData from './guitar.json'

const allChordsBySuffix = (suffix) => {

    if (!suffix) throw new Error('No suffix provided')

    const chords = guitarData?.chords
    const values = Object.values(chords)

    let res = values?.map(value => (
        value?.filter(v => v?.suffix === suffix)
    ))

    return res
}

export default allChordsBySuffix