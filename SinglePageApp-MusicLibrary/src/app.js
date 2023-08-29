import page from '../node_modules/page/page.mjs'
import {render} from "../node_modules/lit-html/lit-html.js"
import { NavComponent } from './components/nav/nav.js';
import { navTemplate } from './components/nav/navTemplate.js';
import { AuthService } from './services/AuthService.js';
import { BaseApiService } from './services/BaseApiService.js';
import { SessionService } from './services/SessionService.js';
import { HomeComponent } from './components/home/home.js';
import { homeTemplate } from './components/home/homeTemplate.js';
import { DashboardComponent } from './components/dashboard/dashboard.js';
import { dashboardTemplate } from './components/dashboard/dashboardTemplate.js';
import { BaseCrudApiService } from './services/BaseCrudApiService.js';
import { LoginComponent } from './components/login/login.js';
import { loginTemplate } from './components/login/loginTemplate.js';
import { RegisterComponent } from './components/register/register.js';
import { registerTemplate } from './components/register/registerTemplate.js';
import { DetailsComponent } from './components/details/details.js';
import { detailsTemplate } from './components/details/detailsTemplate.js';
import { CreateComponent } from './components/create/create.js';
import { createTemplate } from './components/create/createTemplate.js';
import { EditComponent } from './components/edit/edit.js';
import { editTemplate } from './components/edit/editTemplate.js';


//DOM elements
const main = document.querySelector("#wrapper main");
const nav = document.querySelector("#wrapper header");

//ROUTER
let router = {
    navigate: page.show,
    redirect: page.redirect
}

//BASE URL
const baseUrl = 'http://localhost:3030';

//Render Handlers
let renderBody = (template) => render(template, main);
let renderNav = (template) => render(template, nav);


//Service
let sessionService = new SessionService();
let authService = new AuthService(baseUrl, sessionService);
//EDIT HERE
let albumsService = new BaseCrudApiService(baseUrl, '/data/albums', sessionService);

//Components
let navComponent = new NavComponent(authService, renderNav, navTemplate, router);
let homeComponent = new HomeComponent(renderBody, homeTemplate);
let dashboardComponent = new DashboardComponent(albumsService, renderBody, dashboardTemplate);
let loginComponent = new LoginComponent(authService, renderBody, loginTemplate, router)
let registerComponent = new RegisterComponent(authService, renderBody, registerTemplate, router);
let detailsComponent = new DetailsComponent(authService, albumsService, renderBody, detailsTemplate, router)
let createComponent = new CreateComponent(albumsService, renderBody, createTemplate, router)
let editComponent = new EditComponent(albumsService, renderBody, editTemplate, router)


//PAGE
page("/index.html", "/");
page(navComponent.showView)

page('/', homeComponent.showView);
page('/dashboard', dashboardComponent.showView)
page('/login', loginComponent.showView)
page('/register', registerComponent.showView)
page('/create', createComponent.showView)
page('/details/:id', detailsComponent.showView)
page('/edit/:id', editComponent.showView)


page.start()