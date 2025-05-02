import { useMutation, useQueryClient } from '@tanstack/react-query'
import { signup } from '../lib/api.js'

const useSignin = () => {
  const queryClient = useQueryClient()
  const {mutate,error,isPending} = useMutation({
    mutationFn: signup,
    onSuccess: ()=> queryClient.invalidateQueries({queryKey:["authUser"]})
  })
  return {isPending,error,signupMutation:mutate}
}

export default useSignin