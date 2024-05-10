import * as React from 'react'

const isDomOk = typeof window !== 'undefined'

export const useSafeLayout = isDomOk ? React.useLayoutEffect : React.useEffect
