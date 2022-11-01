
const tmpl: string = `
  <form class="page-form">
      {{#each formInputs}}
      <div class="input-wrapper">
        <input type={{this.type}} name={{this.text}} required={{this.required}} value={{this.value}}>
        <label> {{this.text}}</label>
      </div>
      {{/each}}

  </form>
 `;
