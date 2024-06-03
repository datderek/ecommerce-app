import { Link } from 'react-router-dom';
import styles from './Post.module.css';

function Post({ title, subtitle, imageUrl, imageDescription, children }) {
  return (
    <div className={styles['post-wrapper']}>
      <img className={styles['post-image']} src={imageUrl} alt={imageDescription}/>
      <div className={styles['post-details']}>
        <h4>{subtitle}</h4>
        <h3>{title}</h3>
        <p>{children}</p>
        <Link className={styles['read-more-button']} to='/post'>Read more</Link>
      </div>
    </div>
  )
}

export default Post;