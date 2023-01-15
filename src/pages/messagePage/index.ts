import { AsideList } from "../../components/asideList";
import  Messages  from "../../components/messages";
import { Connect } from "../../services/Store/Connect";
import { IState } from "../../types/stateTypes";
import { MessagePage } from "./MessagePage";


export default Connect(MessagePage, (state: IState) => {

  return {
    asideList: new AsideList({}),
    messages: new Messages({}),
  }

});
