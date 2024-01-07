/* eslint-disable react/prop-types */
import Header from './components/Header';
import './global.css';
import styles from './App.module.css'
import Sidebar from "./components/Sidebar";
import Post from './components/Post';

const posts = [
  {
    id: 1,
    author: {
      avatar_url: 'https://avatars.githubusercontent.com/u/85141697?v=4',
      name: 'David Fernandes',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-12-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatar_url: 'https://avatars.githubusercontent.com/u/85141697?v=4',
      name: 'Mateus Barbosa',
      role: '.NET Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-12-10 20:00:00')
  }
]

function App() {


  return (
    <>

      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>

          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}

        </main>
      </div>

    </>
  )
}

export default App
