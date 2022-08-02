import { Header } from "./Components/Header"
import { Post } from "./Post"

import styles from './App.module.css'

import './global.css'
import { Sidebar } from "./Components/Sidebar"

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Alfredo Pamplona"
            content="Lorem dsyhas asunebsh asknas ebksnh"
          />
          <Post
            author="Diego Fernandez"
            content="Novo post de diego fernandez"
          />
        </main>
      </div>
    </div>
  )
}
