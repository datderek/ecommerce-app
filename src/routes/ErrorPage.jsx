import { Link } from "react-router-dom";
import styles from "./ErrorPage.module.css";
import errorImage from "../assets/404-error.svg";

function ErrorPage() {
  return (
    <div className={styles['error-wrapper']}>
      <div className={styles['error-content']}>
        <div className={styles['error-body']}>
          <h1>Oops!</h1>
          <h2>Looks like this page doesn't exist... yet!</h2>
          <Link to="/">Go Back Home</Link>
        </div>
        <div className={styles['error-image']}>
          <img src={errorImage} alt=''></img>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
