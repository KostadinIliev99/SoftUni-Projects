export class DashboardComponent {
    constructor(fruitService, renderHandler, templateFunction) {
      this.fruitService = fruitService;
      this.renderHandler = renderHandler;
      this.templateFunction = templateFunction;
      this.showView = this._showView.bind(this);
    }
  
    async _showView() {
      let fruits = await this.fruitService.getAll();
      let template = this.templateFunction(fruits);
      this.renderHandler(template);
    }
  }
  