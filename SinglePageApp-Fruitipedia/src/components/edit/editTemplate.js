import { html } from "../../../node_modules/lit-html/lit-html.js";

export const editTemplate = (fruit, submitHandler) => html`
  <section id="edit">
    <div class="form">
      <h2>Edit Fruit</h2>
      <form class="edit-form" @submit=${(e) => submitHandler(e, fruit._id)}>
        <input type="text" name="name" id="name" placeholder="Fruit Name" .value = ${fruit.name}/>
        <input
          type="text"
          name="imageUrl"
          id="Fruit-image"
          placeholder="Fruit Image URL"
          .value = ${fruit.imageUrl}
        />
        <textarea
          id="fruit-description"
          name="description"
          placeholder="Description"
          rows="10"
          cols="50"
          .value = ${fruit.description}
        ></textarea>
        <textarea
          id="fruit-nutrition"
          name="nutrition"
          placeholder="Nutrition"
          rows="10"
          cols="50"
          .value = ${fruit.nutrition}
        ></textarea>
        <button type="submit">post</button>
      </form>
    </div>
  </section>
`;
