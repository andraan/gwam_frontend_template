import styles from "./styles.module.scss";

const Button = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <button className={styles.container} onClick={handleClick}>
      Click me!
    </button>
  );
};

export default Button;
