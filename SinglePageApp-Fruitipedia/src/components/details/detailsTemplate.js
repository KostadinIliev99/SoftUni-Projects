import { html } from "../../../node_modules/lit-html/lit-html.js";

export const detailsTemplate = (fruit, isOwner, deleteHandler) => html`
  <section id="details">
    <div id="details-wrapper">
      <img id="details-img" src="${fruit.imageUrl}" alt="example1" />
      <p id="details-title">${fruit.name}</p>
      <div id="info-wrapper">
        <div id="details-description">
          <p>${fruit.description}</p>
          <p id="nutrition">Nutrition</p>
          <p id="details-nutrition">${fruit.nutrition}</p>
        </div>
        ${isOwner
          ? html`
              <div id="action-buttons">
                <a href="${`/edit/${fruit._id}`}" id="edit-btn">Edit</a>
                <a href="javascript:void(0)" id="delete-btn" @click=${(e) => deleteHandler(fruit._id)}>Delete</a>
              </div>
            `
          : ""}
      </div>
    </div>
  </section>
`;
