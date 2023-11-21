import { convertPenceToString } from './convertPenceToString'

describe('convertPenceToString', () => {
  it('should convert pence to a string', () => {
    expect(convertPenceToString(12345)).toEqual('£123.45')
  })
})
