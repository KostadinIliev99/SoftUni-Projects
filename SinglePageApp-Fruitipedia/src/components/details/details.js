export class DetailsComponent {
    constructor(
      authService,
      fruitService,
      renderHandler,
      templateFunction,
      router
    ) {
      this.authService = authService;
      this.fruitService = fruitService;
      this.renderHandler = renderHandler;
      this.templateFunction = templateFunction;
      this.showView = this._showView.bind(this);
      this.router = router;
      this.deleteHandler = this._deleteHandler.bind(this);
    }
  
    async _showView(ctx) {
      let id = ctx.params.id;
      let fruit = await this.fruitService.getById(id);
      let currentUserId = this.authService.getUserId();
      let isOwner = currentUserId === fruit._ownerId;
      let template = this.templateFunction(fruit, isOwner, this.deleteHandler);
      this.renderHandler(template);
    }
  
    async _deleteHandler(id) {
      let result = confirm("Are you sure you want to delete this item?");
  
      if (result == false) {
        return;
      }
  
      let deleteResult = await this.fruitService.deleteItem(id);
      this.router.navigate("/dashboard");
    }
  }
  