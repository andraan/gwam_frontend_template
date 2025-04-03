import reactImage from "../../assets/logo192.png";
import styles from "./styles.module.scss";

const Image = () => {
  return <img className={styles.container} src={reactImage} alt="React logo" />;
};

export default Image;
