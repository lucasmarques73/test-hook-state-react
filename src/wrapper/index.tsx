import { useCustomHook } from "./useCustomHook"

export const Component = () => {

    const { state } = useCustomHook()


    if (state) {
        return <p>state is true</p>
    }

    return <p>state is false</p>
}