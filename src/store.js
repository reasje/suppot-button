import { atom, useAtom } from 'jotai'

const showMessageAtom = atom(false)

const useShowMessage = () => useAtom(showMessageAtom)

export default useShowMessage
