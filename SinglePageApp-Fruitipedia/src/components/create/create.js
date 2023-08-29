export class CreateComponent {
    constructor(fruitService, renderHandler, templateFunction, router) {
      this.fruitService = fruitService;
      this.renderHandler = renderHandler;
      this.templateFunction = templateFunction;
      this.router = router;
      this.showView = this._showView.bind(this);
      this.createHandler = this._createHandler.bind(this);
    }
  
    async _showView() {
      let template = await this.templateFunction(this.createHandler);
      this.renderHandler(template);
    }
  
    async _createHandler(e) {
      e.preventDefault();
  
      let form = e.target;
      let formData = new FormData(form);
  
      let fruit = {
        name: formData.get("name"),
        imageUrl: formData.get("imageUrl"),
        description: formData.get("description"),
        nutrition: formData.get("nutrition"),
      };
  
      if (
        fruit.name == "" ||
        fruit.description == "" ||
        fruit.imageUrl == "" ||
        fruit.nutrition == ""
      ) {
        alert("Input fields must not be empty");
        return;
      }
  
      let result = await this.fruitService.create(fruit);
      this.router.navigate('/dashboard')
      return result
    }
  }
  