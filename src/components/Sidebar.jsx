import styles from './Sidebar.module.css'
import imgCover from '../assets/cover-main.png';

import { PencilLine } from 'phosphor-react';
import Avatar from './Avatar';

function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src={imgCover} />

            <div className={styles.profile}>

                <Avatar src="https://avatars.githubusercontent.com/u/85141697?v=4" />

                <strong>David Fernandes</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}

export default Sidebar