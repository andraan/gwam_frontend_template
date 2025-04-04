import { createRoot } from "react-dom/client";
import Button from "./components/Button";
import Image from "./components/Image";
import Container from "./components/Container";
import "../src/styles/main.scss";

const container: HTMLElement = document.getElementById(
  "spa-root"
) as HTMLElement;
const root = createRoot(container);

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  console.log("window.propsTemplate: ", window?.propsTemplate);
  root.render(
    <Container>
      <h1 className="title">
        GWAM React template: {window?.propsTemplate?.property1}
      </h1>
      <Image />
      <Button />
    </Container>
  );
});
