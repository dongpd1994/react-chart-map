import * as React from 'react'
import styles from './styles.module.css'

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}</div>
}


export { default as WorldMap } from './component/WorldMap';
export type { IWorldMapProps } from './component/WorldMap';
