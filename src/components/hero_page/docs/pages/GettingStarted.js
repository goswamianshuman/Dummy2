import React from 'react'
import styles from "../../styles/DocsContent.module.css"

function GettingStarted() {
  return (
     <ul className={styles.GettingStarted}>
        <li><a href="">Introduction</a></li>
        <li><a href="">Search API</a></li>
        <li><a href="">other Content</a></li>
     </ul>
  )
}

export default GettingStarted