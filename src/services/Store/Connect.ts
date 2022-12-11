import Store from "./Store";

const Connect = (Block, mapStateToProps: (arg0: object) => object) => {
  //callback mapStateToProps -  (state) => state.user ?? {}
  // mapStateToProps((store.getState() = {auth:..., user:...})

  return class extends Block {
    constructor(props = {}) {
      const store = new Store();

      super({ ...props, ...mapStateToProps(store.getState()) });
      // { ...props, ...state.user}

      store.on(Store.EVENT_UPDATE, () => {
        this.setProps({ ...mapStateToProps(store.getState()) });
        /*
        const newState = mapStateToProps(store.getState());


        // если что-то из используемых данных поменялось, обновляем компонент
        if (!isEqual(state, newState)) {
          console.log('not Equal!!!', !isEqual(state, newState))
          console.log(this, 'this')
          this.setProps({ ...newState });
        }

        // не забываем сохранить новое состояние
        state = newState;
        */
      });
    }
  };
};

export { Connect };
