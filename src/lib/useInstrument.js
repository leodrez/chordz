import instrumentLibrary from '../lib/instruments.json'

const useGuitar = () => {

    const { guitar } = instrumentLibrary

    if (!guitar) throw new Error('Invalid data source')

    const guitarConfig = {
        strings: guitar?.strings,
        fretsOnChord: guitar?.fretsOnChord,
        name: guitar?.name,
        keys: [],
        tunings: {
            standard: ['E', 'A', 'D', 'G', 'B', 'E']
        }
    }


    return guitarConfig
}

export default useGuitar