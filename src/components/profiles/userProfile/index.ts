import { Block } from "../../../services/Block";
import store, { StoreEvents } from "../../../store/store";
import { connect } from "../../../utils/connect";

class UserProfile extends Block {
  constructor(...args: any) {
    super(...args);
    // запрашиваем данные у контроллера
    UserController.getUser();

    // подписываемся на событие
    store.on(StoreEvents.Updated, () => {
      // вызываем обновление компонента, передав данные из хранилища
      this.setProps(store.getState());
    });
  }

  render() {
    // внутри рендер в this.props будут достпны данные из хранилища
  }
}

export connect(UserProfile);

