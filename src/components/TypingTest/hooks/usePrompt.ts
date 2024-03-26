import { RootState } from '@/app/_redux/store'
import { useSelector } from 'react-redux'

export const usePrompt = () => {
  const { prompt } = useSelector((state: RootState) => state.typingTest)
  return prompt
}
