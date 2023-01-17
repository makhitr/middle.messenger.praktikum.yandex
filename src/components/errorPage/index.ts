import { Block } from "../../services/Block";
import template from "./index.hbs";
interface ErrorPageProps {
  title: string;
  subtitle: string;
  text: string;
  linkText: string;
}
class ErrorPage extends Block<ErrorPageProps> {
  
  constructor(props: ErrorPageProps, className = "section-wrapper") {
    super("section", className, props);
  }

  render() {
    return this.compile(template);
  }
}

export { ErrorPage };
