import { useMutation } from "@tanstack/react-query"


export const useMutationHook = async (fnCallback) => {
    const mutation = await useMutation({
        mutationFn: fnCallback
    })

    return mutation
}