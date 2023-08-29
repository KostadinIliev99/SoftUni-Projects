export class EditComponent {
    constructor(fruitService, renderHandler, templateFunction, router) {
      this.fruitService = fruitService;
      this.renderHandler = renderHandler;
      this.templateFunction = templateFunction;
      this.router = router;
      this.showView = this._showView.bind(this);
      this.editHandler = this._editHandler.bind(this);
    }
  
    async _showView(ctx) {
      let id = ctx.params.id;
      let fruit = await this.fruitService.getById(id);
      let template = this.templateFunction(fruit, this.editHandler);
      this.renderHandler(template);
    }
  
    async _editHandler(e, id) {
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
  
      let result = await this.fruitService.edit(id, fruit);
      this.router.navigate(`/details/${id}`);
      return result;
    }
  }
  