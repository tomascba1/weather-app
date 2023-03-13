import Spinner from 'react-spinners/SyncLoader'
import styles from './Loading.module.css'

export default function Loading(){
    return (
        <div className={styles.loadingContainer}>
            <Spinner />
        </div>
        )
}