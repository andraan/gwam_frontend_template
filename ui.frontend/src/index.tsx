import { createRoot } from "react-dom/client";

import Button from "./components/Button";
import Image from "./components/Image";
import Container from "./components/Container";
import "../src/styles/main.scss";

const container: HTMLElement = document.getElementById(
  "spa-root"
) as HTMLElement;
const root = createRoot(container);

root.render(
  <Container>
    <h1 className="title">GWAM React template - modified</h1>
    <Image />
    <Button />
  </Container>
);
