import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { D as renderHead, T as renderTemplate } from "./sequence_BvMXc8IV.mjs";
import { t as createComponent } from "./compiler_CIF1_--p.mjs";
import { t as renderScript } from "./script_ClFEB-Eq.mjs";
//#region src/pages/login.astro
var login_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Login,
	file: () => $$file,
	url: () => $$url
});
var $$Login = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`<html lang="en" data-astro-cid-sjqh5bze><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${"Admin Login · Lime & Honey"}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">${renderHead($$result)}</head><body data-astro-cid-sjqh5bze><main class="login" data-astro-cid-sjqh5bze><div class="login__content" data-astro-cid-sjqh5bze><div class="login__brand" data-astro-cid-sjqh5bze><span data-astro-cid-sjqh5bze>Lime &amp; Honey</span></div><header class="login__header" data-astro-cid-sjqh5bze><h1 data-astro-cid-sjqh5bze>Welcome back.</h1><p data-astro-cid-sjqh5bze>Enter your password to access the admin.</p></header><form id="login-form" class="login__form" data-astro-cid-sjqh5bze><label for="password" data-astro-cid-sjqh5bze>Password</label><input id="password" name="password" type="password" autocomplete="current-password" placeholder="Enter password" required data-astro-cid-sjqh5bze><button type="submit" class="login__button" data-astro-cid-sjqh5bze>Login</button><p id="error" class="login__error" hidden data-astro-cid-sjqh5bze></p></form></div></main>${renderScript($$result, "/Users/imagelikeness/Documents/untitled folder/LH/lime/lime-honey/src/pages/login.astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "/Users/imagelikeness/Documents/untitled folder/LH/lime/lime-honey/src/pages/login.astro", void 0);
var $$file = "/Users/imagelikeness/Documents/untitled folder/LH/lime/lime-honey/src/pages/login.astro";
var $$url = "/login";
//#endregion
//#region \0virtual:astro:page:src/pages/login@_@astro
var page = () => login_exports;
//#endregion
export { page };
