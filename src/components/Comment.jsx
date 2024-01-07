import React, { useState } from 'react'
import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';
import Avatar from './Avatar';


const Comment = ({ content, onDeleteComment }) => {

    const [likes, setLikes] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    const urlImg = 'https://avatars.githubusercontent.com/u/85141697?v=4';

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src={urlImg} />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>David Fernandes</strong>
                            <time>Cerca de 1hr atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={() => setLikes(likes + 1)}>
                        <ThumbsUp />
                        Aplaudir <span>{likes}</span>
                    </button>
                </footer>

            </div>
        </div>
    )
}

export default Comment