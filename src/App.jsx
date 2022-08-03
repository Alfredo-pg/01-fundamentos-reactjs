import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'

import './global.css'

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
