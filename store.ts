export const useStore = () => {
    return useState('store', () => {
        return {
            scrolled: false
        }
    })
}