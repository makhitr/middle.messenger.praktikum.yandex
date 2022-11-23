import { ErrorPage } from "../../components/errorPage";
import { IndexLayout } from "../../layouts/indexLayout";

class ErrorPage500 extends IndexLayout {
  constructor() {
    const content = new ErrorPage({
      title: "500",
      subtitle: "Sorry, unexpected error",
      text: "We are working on fixing the problem!",
      linkText: "Back to chats",
    });

    super({
      title: "500 Page",
      content: content,
    });
  }
}

export { ErrorPage500 };
