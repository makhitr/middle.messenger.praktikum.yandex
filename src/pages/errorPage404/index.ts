import { ErrorPage } from "../../components/errorPage";
import { IndexLayout } from "../../layouts/indexLayout";

class ErrorPage404 extends IndexLayout {
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
