import { ErrorPage } from "../../components/errorPage";
import { IndexLayout } from "../../layouts/IndexLayout";

const content = new ErrorPage({
  title: 500,
  subtitle: "Sorry, unexpected error",
  text: "We are working on fixing the problem!",
  linkText: "Back to chats",
});

export const errorPage500 = new IndexLayout({
  title: "500 Page",
  content: content,
});
