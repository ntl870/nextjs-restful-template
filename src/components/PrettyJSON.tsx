import React, { FC } from 'react'

interface Props {
  data: any
  replacer: any
  space: number
}
export const PrettyJSON: FC<Props> = ({ data, replacer, space }) => {
  return <pre>{JSON.stringify(data, replacer, space)}</pre>
}
