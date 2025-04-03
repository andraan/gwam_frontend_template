import styles from "./styles.module.scss";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode[];
}

const Container = ({ children }: ContainerProps) => (
  <div className={styles.container}>{children}</div>
);

export default Container;
