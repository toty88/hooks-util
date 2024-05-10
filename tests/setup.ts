import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react-hooks'

afterEach(async () => {
  await cleanup()
})
