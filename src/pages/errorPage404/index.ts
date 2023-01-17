import { ErrorPage } from "../../components/errorPage";
import { Page } from "../../components/page";

class ErrorPage404 extends Page {
  constructor() {
    const content = new ErrorPage({
      title: "404",
      subtitle: "Oops, sorry we can't find that page!",
      text: "Either something went wrong or the page doesnt'exist anymore",
      linkText: "Back to chats",
    });
    
    super({
      title: "404 Page",
      content: content,
    })
  }
}

export { ErrorPage404 };
