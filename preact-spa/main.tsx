import { render } from "preact/compat";
import Router from "preact-router";
import "./src/app.scss";
import debug from "debug";
import { NotFoundPage } from "./pages/404";
import { IndexPage } from "./pages";

const logger = debug("app:main");

function RootRouter() {
  return (
    <Router>
      <IndexPage path="/" />
      <NotFoundPage default />
    </Router>
  );
}
render(<RootRouter />, document.getElementById("app")!);

logger("app loaded");
