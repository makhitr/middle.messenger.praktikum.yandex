import { ErrorPage } from "../../components/errorPage";
import { IndexLayout } from "../../layouts/IndexLayout";

const content = new ErrorPage({ title: 404,   subtitle: "Oops, sorry we can't find that page!",
text: "Either something went wrong or the page doesnt'exist anymore",
linkText: "Back to chats" });
export const errorPage404 = new IndexLayout({
  title: "404 Page",
  content: content,
});
