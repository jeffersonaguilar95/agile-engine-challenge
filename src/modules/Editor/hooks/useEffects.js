import { useEffect, useCallback } from 'react'
import { getMockText } from '../services'

export function useGetMockText(setText) {
  useEffect(
    useCallback(() => {
      const getText = async () => {
        setText(await getMockText())
      }
      getText()
    }, [getMockText]),
    []
  )
}
