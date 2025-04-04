import styles from "./styles.module.scss";

const Button = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <button
      type="button"
      className={styles.container}
      onClick={handleClick}
      title="Click me!"
    >
      Click me!
    </button>
  );
};

export default Button;
