export const convertPenceToString = (priceAsPence: number): string => {
  const priceAsString = priceAsPence.toString()
  const pence = priceAsString.substring(priceAsString.length - 2)
  const pounds = Number(
    priceAsString.substring(priceAsString.length - 2, 0),
  ).toLocaleString()

  return `£${pounds}.${pence}`
}
