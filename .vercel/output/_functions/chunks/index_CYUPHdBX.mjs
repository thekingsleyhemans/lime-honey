import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { D as renderHead, F as createAstro, O as addAttribute, T as renderTemplate } from "./sequence_BvMXc8IV.mjs";
import { t as createComponent } from "./compiler_CIF1_--p.mjs";
import { t as renderScript } from "./script_ClFEB-Eq.mjs";
//#region src/pages/admin/index.astro
var admin_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Index;
	if (Astro.cookies.get("admin_session")?.value !== "authenticated") return Astro.redirect("/login");
	return renderTemplate`<html lang="en" data-astro-cid-nsou3le4><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Admin · Lime &amp; Honey</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.googleapis.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">${renderHead($$result)}</head><body data-astro-cid-nsou3le4><main class="admin" data-astro-cid-nsou3le4><header class="admin__header" data-astro-cid-nsou3le4><h1 class="admin__title" data-astro-cid-nsou3le4>Welcome, Admin</h1><div class="admin__search" data-astro-cid-nsou3le4><input id="project-search" type="text" placeholder="Search projects" aria-label="Search projects" data-astro-cid-nsou3le4></div></header><section class="grid" id="project-grid" aria-label="Projects" data-astro-cid-nsou3le4>${[
		{
			title: "Melanin Medics",
			slug: "melanin-medics",
			category: "Brand Identity",
			year: 2025,
			description: ""
		},
		{
			title: "Complete Farmer",
			slug: "complete-farmer",
			category: "Web Design",
			year: 2025,
			description: ""
		},
		{
			title: "Ako Adjei Park",
			slug: "ako-adjei-park",
			category: "Editorial",
			year: 2026,
			description: ""
		},
		{
			title: "Uncontained",
			slug: "uncontained",
			category: "Brand Identity",
			year: 2026,
			description: ""
		},
		{
			title: "Nectar & Co",
			slug: "nectar-and-co",
			category: "Web Design",
			year: 2025,
			description: ""
		},
		{
			title: "Field Notes",
			slug: "field-notes",
			category: "Editorial",
			year: 2025,
			description: ""
		},
		{
			title: "Harmattan",
			slug: "harmattan",
			category: "Brand Identity",
			year: 2026,
			description: ""
		},
		{
			title: "Osu Market",
			slug: "osu-market",
			category: "Web Design",
			year: 2025,
			description: ""
		}
	].map((project) => renderTemplate`<article class="card"${addAttribute(project.title.toLowerCase(), "data-title")} data-astro-cid-nsou3le4><div class="card__thumb" aria-hidden="true" data-astro-cid-nsou3le4></div><div class="card__row" data-astro-cid-nsou3le4><span class="card__title" data-astro-cid-nsou3le4>${project.title}</span><button class="card__menu-btn" type="button" aria-haspopup="true" aria-expanded="false"${addAttribute(`Actions for ${project.title}`, "aria-label")}${addAttribute(project.slug, "data-slug")} data-astro-cid-nsou3le4><svg width="4" height="18" viewBox="0 0 4 18" fill="none" aria-hidden="true" data-astro-cid-nsou3le4><circle cx="2" cy="2" r="2" fill="currentColor" data-astro-cid-nsou3le4></circle><circle cx="2" cy="9" r="2" fill="currentColor" data-astro-cid-nsou3le4></circle><circle cx="2" cy="16" r="2" fill="currentColor" data-astro-cid-nsou3le4></circle></svg></button><div class="card__dropdown" role="menu" data-astro-cid-nsou3le4><button type="button" role="menuitem" data-astro-cid-nsou3le4>Edit</button><button type="button" role="menuitem" class="danger" data-astro-cid-nsou3le4>Delete</button></div></div></article>`)}</section><button class="fab" id="add-project-btn" type="button" data-astro-cid-nsou3le4><svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" data-astro-cid-nsou3le4><circle cx="9" cy="9" r="8" stroke="currentColor" stroke-width="1.4" data-astro-cid-nsou3le4></circle><path d="M9 5.5V12.5M5.5 9H12.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" data-astro-cid-nsou3le4></path></svg>Add New Project</button></main><!-- ADD PROJECT MODAL --><div class="modal-backdrop" id="modal-backdrop" hidden data-astro-cid-nsou3le4><div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-heading" data-astro-cid-nsou3le4><div class="modal__head" data-astro-cid-nsou3le4><h2 id="modal-heading" data-astro-cid-nsou3le4>Add New Project</h2><button class="modal__close" id="modal-close" type="button" aria-label="Close" data-astro-cid-nsou3le4>×</button></div><form id="project-form" class="modal__form" data-astro-cid-nsou3le4><label data-astro-cid-nsou3le4>Title<input type="text" name="title" required data-astro-cid-nsou3le4></label><label data-astro-cid-nsou3le4>Slug<span class="hint" data-astro-cid-nsou3le4>(auto-generated from title if left blank)</span><input type="text" name="slug" placeholder="auto" data-astro-cid-nsou3le4></label><label data-astro-cid-nsou3le4>Category<input type="text" name="category" required data-astro-cid-nsou3le4></label><label data-astro-cid-nsou3le4>Year<input type="number" name="year" min="2000" max="2100" required data-astro-cid-nsou3le4></label><label data-astro-cid-nsou3le4>Description<textarea name="description" rows="4" data-astro-cid-nsou3le4></textarea></label><div class="modal__actions" data-astro-cid-nsou3le4><button type="button" class="btn btn--ghost" id="modal-cancel" data-astro-cid-nsou3le4>Cancel</button><button type="submit" class="btn btn--primary" data-astro-cid-nsou3le4>Save Project</button></div></form></div></div></body>${renderScript($$result, "/Users/imagelikeness/Documents/untitled folder/LH/lime/lime-honey/src/pages/admin/index.astro?astro&type=script&index=0&lang.ts")}</html>`;
}, "/Users/imagelikeness/Documents/untitled folder/LH/lime/lime-honey/src/pages/admin/index.astro", void 0);
var $$file = "/Users/imagelikeness/Documents/untitled folder/LH/lime/lime-honey/src/pages/admin/index.astro";
var $$url = "/admin";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/index@_@astro
var page = () => admin_exports;
//#endregion
export { page };
