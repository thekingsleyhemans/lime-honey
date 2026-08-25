import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { D as renderHead, F as createAstro, O as addAttribute, T as renderTemplate } from "./sequence_BvMXc8IV.mjs";
import { t as createComponent } from "./compiler_CIF1_--p.mjs";
/* empty css                                                          */
import { t as projects_default } from "./projects_B5yBnMqV.mjs";
//#region src/pages/projects/[slug].astro
var _slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Slug,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://astro.build");
function getStaticPaths() {
	return projects_default.projects.map((project) => ({
		params: { slug: project.slug },
		props: { project }
	}));
}
var $$Slug = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Slug;
	const { project } = Astro.props;
	const relatedProjects = projects_default.projects.filter((item) => item.slug !== project.slug).slice(0, 2);
	return renderTemplate`<html data-astro-cid-yq2gsstb><head><meta charset="utf-8"><title>${project.title}</title><meta name="viewport" content="width=device-width, initial-scale=1"><link href="https://fonts.googleapis.com" rel="preconnect"><link href="https://fonts.gstatic.com" rel="preconnect"><link href="https://fonts.googleapis.com/css2?family=Abril+Fatface:wght@300;400;500;600;700&display=swap" rel="stylesheet"><link href="/favicon.png" rel="shortcut icon" type="image/x-icon"><link href="/images/webclip.png" rel="apple-touch-icon">${renderHead($$result)}</head><body class="body-3 dark" data-astro-cid-yq2gsstb><!-- MENU --><div class="menu" data-astro-cid-yq2gsstb><div class="container" data-astro-cid-yq2gsstb><div class="menu-wrapper dark" data-astro-cid-yq2gsstb><a href="/" class="brand dark w-inline-block" data-astro-cid-yq2gsstb></a><div class="div-block-23" data-astro-cid-yq2gsstb><div class="dark-toggle dark" data-astro-cid-yq2gsstb></div><div class="light-toggle dark" data-astro-cid-yq2gsstb></div><a href="#" class="menu-button back w-inline-block" data-astro-cid-yq2gsstb><div class="menu-bar top dark" data-astro-cid-yq2gsstb></div><div class="menu-bar bottom dark" data-astro-cid-yq2gsstb></div></a></div></div></div></div><!-- FULL MENU --><div class="menu-wrapper full light" data-astro-cid-yq2gsstb><div class="menu-content dark" data-astro-cid-yq2gsstb><div class="menu-fulls" data-astro-cid-yq2gsstb><div class="container" data-astro-cid-yq2gsstb><div class="menu-wrapper dark" data-astro-cid-yq2gsstb><a href="/" class="brand nav dark w-inline-block" data-astro-cid-yq2gsstb></a></div></div></div><div class="container" data-astro-cid-yq2gsstb><div class="flex-container left" data-astro-cid-yq2gsstb><div class="div-block-59" data-astro-cid-yq2gsstb><h1 class="heading h1 menu-link light" data-astro-cid-yq2gsstb><a href="/services" class="menu-link dark" data-astro-cid-yq2gsstb>skillset</a></h1><h1 class="heading h1 menu-link dark" data-astro-cid-yq2gsstb><a href="/projects" class="menu-link dark" data-astro-cid-yq2gsstb>juice</a></h1><h1 class="heading h1 menu-link dark" data-astro-cid-yq2gsstb><a href="/about" class="menu-link dark" data-astro-cid-yq2gsstb>honeys</a></h1><h1 class="heading h1 menu-link dark" data-astro-cid-yq2gsstb><a href="/contact" class="menu-link dark" data-astro-cid-yq2gsstb>contact</a></h1><h1 class="heading h1 menu-link dark" data-astro-cid-yq2gsstb><a href="/store" class="menu-link dark" data-astro-cid-yq2gsstb>store</a></h1></div></div></div><div class="full-nav-img dark" data-astro-cid-yq2gsstb></div></div></div><!-- PROJECT DETAILS --><div class="section-10" data-astro-cid-yq2gsstb><div class="container" data-astro-cid-yq2gsstb><div class="flex-container wrap" data-astro-cid-yq2gsstb><div class="div-block-51" data-astro-cid-yq2gsstb><div class="div-block-52" data-astro-cid-yq2gsstb><h1 class="heading h1 title dark" data-astro-cid-yq2gsstb>${project.title}</h1><p class="p description project dark" data-astro-cid-yq2gsstb>${project.description}</p><div class="subtext h6 project-label dark" data-astro-cid-yq2gsstb>${project.categories.map((category) => category.charAt(0).toUpperCase() + category.slice(1)).join(", ")}</div></div><!-- PROJECT MEDIA --><div class="portfolio-img-wrapper" data-astro-cid-yq2gsstb>${project.media.map((media) => {
		if (media.type === "image" || media.type === "gif") return renderTemplate`<img${addAttribute(media.src, "src")}${addAttribute(project.title, "alt")} loading="lazy" data-astro-cid-yq2gsstb>`;
		if (media.type === "video") return renderTemplate`<video${addAttribute(media.src, "src")} autoplay muted loop playsinline controls data-astro-cid-yq2gsstb></video>`;
		if (media.type === "vimeo") return renderTemplate`<iframe${addAttribute(media.src, "src")}${addAttribute(project.title, "title")} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen data-astro-cid-yq2gsstb></iframe>`;
		return null;
	})}</div></div></div></div></div><!-- RELATED PROJECTS --><div class="section-11" data-astro-cid-yq2gsstb><div class="container" data-astro-cid-yq2gsstb><div class="flex-container left" data-astro-cid-yq2gsstb><h1 class="heading-6 dark" data-astro-cid-yq2gsstb>Want more oliver?</h1><div class="div-block-53" data-astro-cid-yq2gsstb>${relatedProjects[0] && renderTemplate`<div class="div-block-54" data-astro-cid-yq2gsstb><a${addAttribute(`/projects/${relatedProjects[0].slug}`, "href")} class="project-box dark w-inline-block" data-astro-cid-yq2gsstb><h2 class="heading h2 dark" data-astro-cid-yq2gsstb>${relatedProjects[0].title}</h2><h4 class="heading h4 dark" data-astro-cid-yq2gsstb>${relatedProjects[0].categories.map((category) => category.charAt(0).toUpperCase() + category.slice(1)).join(", ")}</h4><img${addAttribute(relatedProjects[0].thumbnail, "src")}${addAttribute(relatedProjects[0].title, "alt")} class="image-87" data-astro-cid-yq2gsstb></a></div>`}<!-- ALL PROJECTS --><a href="/projects" class="div-block-54 w-inline-block" data-astro-cid-yq2gsstb><p class="p description-back project dark" data-astro-cid-yq2gsstb>All projects</p></a>${relatedProjects[1] && renderTemplate`<div class="div-block-54" data-astro-cid-yq2gsstb><a${addAttribute(`/projects/${relatedProjects[1].slug}`, "href")} class="project-box dark w-inline-block" data-astro-cid-yq2gsstb><h2 class="heading h2 dark" data-astro-cid-yq2gsstb>${relatedProjects[1].title}</h2><h4 class="heading h4 dark" data-astro-cid-yq2gsstb>${relatedProjects[1].categories.map((category) => category.charAt(0).toUpperCase() + category.slice(1)).join(", ")}</h4><img${addAttribute(relatedProjects[1].thumbnail, "src")}${addAttribute(relatedProjects[1].title, "alt")} class="image-87" data-astro-cid-yq2gsstb></a></div>`}</div></div></div></div><!-- CTA --><div class="section-5" data-astro-cid-yq2gsstb><div class="container" data-astro-cid-yq2gsstb><div class="flex-container got-story" data-astro-cid-yq2gsstb><div class="div-block-14" data-astro-cid-yq2gsstb><h1 class="heading-5 dark" data-astro-cid-yq2gsstb>Got a story?</h1><div class="div-block-13" data-astro-cid-yq2gsstb><a href="/contact" class="button w-button" data-astro-cid-yq2gsstb>let’s get talking</a><div class="image-5 dark" data-astro-cid-yq2gsstb></div></div></div><div class="div-block-15" data-astro-cid-yq2gsstb><div class="image-12 dark" data-astro-cid-yq2gsstb></div></div></div></div></div><!-- FOOTER --><div class="section-7" data-astro-cid-yq2gsstb><div class="footer-line-wrapper" data-astro-cid-yq2gsstb><div class="footer-line light" data-astro-cid-yq2gsstb></div></div><div class="container" data-astro-cid-yq2gsstb><div class="flex-container no-t" data-astro-cid-yq2gsstb><div class="footer desktop" data-astro-cid-yq2gsstb><div class="div-block-19" data-astro-cid-yq2gsstb><p class="p fs-20 static dark" data-astro-cid-yq2gsstb>London | Accra<br data-astro-cid-yq2gsstb><br data-astro-cid-yq2gsstb>T<a href="tel:+44(0)7552494741" class="link-4 dark" data-astro-cid-yq2gsstb>: +44 (0) 7552 494741</a><br data-astro-cid-yq2gsstb></p><p class="p fs-20 static dark" data-astro-cid-yq2gsstb><a href="https://wa.link/44rrev" class="link-4 dark" data-astro-cid-yq2gsstb>W: +233 (0) 20 909 8272</a><br data-astro-cid-yq2gsstb></p><div class="div-block-17" data-astro-cid-yq2gsstb><a href="https://web.facebook.com/limexhoney/" target="_blank" rel="noopener noreferrer" class="image-6 dark w-inline-block" data-astro-cid-yq2gsstb></a><a href="https://twitter.com/limexhoney" target="_blank" rel="noopener noreferrer" class="image-7 dark w-inline-block" data-astro-cid-yq2gsstb></a><a href="https://www.instagram.com/limexhoney/" target="_blank" rel="noopener noreferrer" class="image-8 dark w-inline-block" data-astro-cid-yq2gsstb></a><a href="https://www.behance.net/limexhoney" target="_blank" rel="noopener noreferrer" class="image-101 dark w-inline-block" data-astro-cid-yq2gsstb></a></div><div class="p copyright dark" data-astro-cid-yq2gsstb>2020 LIME AND HONEY. All Rights Reserved.</div></div><div class="div-block-24" data-astro-cid-yq2gsstb><div class="div-block-18" data-astro-cid-yq2gsstb><a href="/services" class="p link block footer-link no-tp dark" data-astro-cid-yq2gsstb>skillset</a><a href="/projects" class="p link block footer-link fs-20 dark" data-astro-cid-yq2gsstb>juice</a><a href="/about" class="p link block footer-link fs-20 dark" data-astro-cid-yq2gsstb>honeys</a><a href="/store" class="p link block footer-link no-tp dark for--merch" data-astro-cid-yq2gsstb>store</a><a href="https://medium.com/lime-honey" target="_blank" rel="noopener noreferrer" class="p link block footer-link fs-20 dark" data-astro-cid-yq2gsstb>blog</a><a href="/contact" class="p link block footer-link fs-20 dark" data-astro-cid-yq2gsstb>contact</a></div><div class="div-block-20" data-astro-cid-yq2gsstb><div class="div-block-21 _2" data-astro-cid-yq2gsstb><p class="p fs-20 subtext dark" data-astro-cid-yq2gsstb>Ready to talk...</p><div class="div-block-13" data-astro-cid-yq2gsstb><a href="/contact" class="button w-button" data-astro-cid-yq2gsstb>let’s get crazy</a><div class="image-5 dark" data-astro-cid-yq2gsstb></div></div></div></div></div></div><!-- MOBILE FOOTER --><div class="footer mobile" data-astro-cid-yq2gsstb><div class="div-block-19" data-astro-cid-yq2gsstb><p class="p fs-20 dark" data-astro-cid-yq2gsstb>London | Accra<br data-astro-cid-yq2gsstb><br data-astro-cid-yq2gsstb>P<a href="tel:+44(0)7552494741" class="link-4 dark" data-astro-cid-yq2gsstb>: +44 (0) 7552 494741</a><br data-astro-cid-yq2gsstb></p><p class="p fs-20 static dark" data-astro-cid-yq2gsstb><a href="https://wa.link/44rrev" class="link-4 dark" data-astro-cid-yq2gsstb>W: +233 (0) 20 909 8272</a><br data-astro-cid-yq2gsstb></p><div class="div-block-17" data-astro-cid-yq2gsstb><a href="https://www.facebook.com/limexhoney/" target="_blank" rel="noopener noreferrer" class="image-6 dark w-inline-block" data-astro-cid-yq2gsstb></a><a href="https://www.twitter.com/limexhoney" target="_blank" rel="noopener noreferrer" class="image-7 dark w-inline-block" data-astro-cid-yq2gsstb></a><a href="https://www.instagram.com/limexhoney" target="_blank" rel="noopener noreferrer" class="image-8 dark w-inline-block" data-astro-cid-yq2gsstb></a><a href="https://www.behance.net/limexhoney" target="_blank" rel="noopener noreferrer" class="image-101 dark w-inline-block" data-astro-cid-yq2gsstb></a></div></div><div class="div-block-24" data-astro-cid-yq2gsstb><div class="div-block-18" data-astro-cid-yq2gsstb><a href="/services" class="p link block footer-link no-tp dark" data-astro-cid-yq2gsstb>skillset</a><a href="/projects" class="p link block footer-link fs-20 dark" data-astro-cid-yq2gsstb>juice</a><a href="/about" class="p link block footer-link fs-20 dark" data-astro-cid-yq2gsstb>honeys</a><a href="https://medium.com/lime-honey" target="_blank" rel="noopener noreferrer" class="p link block footer-link fs-20 dark" data-astro-cid-yq2gsstb>blog</a><a href="/contact" class="p link block footer-link fs-20 dark" data-astro-cid-yq2gsstb>contact</a></div></div><div class="div-block-20 no-t" data-astro-cid-yq2gsstb><div class="div-block-21" data-astro-cid-yq2gsstb><p class="p fs-20 subtext dark" data-astro-cid-yq2gsstb>If you ready to talk, then...</p><div class="div-block-13" data-astro-cid-yq2gsstb><a href="/contact" class="button w-button" data-astro-cid-yq2gsstb>let’s get crazy</a><div class="image-5 dark" data-astro-cid-yq2gsstb></div></div><div class="p copyright dark" data-astro-cid-yq2gsstb>2020 LIME AND HONEY. All Rights Reserved.</div></div></div></div></div></div></div><!-- PRELOADER --><div id="preloader-short" class="preloader-short" data-astro-cid-yq2gsstb><div class="div-block-166" data-astro-cid-yq2gsstb></div></div><script src="/scripts/webflow.js"><\/script><script>
      document.addEventListener("DOMContentLoaded", function () {

        let themeMode = localStorage.getItem("themeMode");

        if (themeMode === null) {
          localStorage.setItem("themeMode", "dark");
          themeMode = "dark";
        }

        if (themeMode === "light") {
          document.querySelectorAll(".dark").forEach((element) => {
            element.classList.add("light");
            element.classList.remove("dark");
          });
        }

        document
          .querySelector(".dark-toggle")
          ?.addEventListener("click", function () {

            document.querySelectorAll(".light").forEach((element) => {
              element.classList.add("dark");
              element.classList.remove("light");
            });

            localStorage.setItem("themeMode", "dark");
          });

        document
          .querySelector(".light-toggle")
          ?.addEventListener("click", function () {

            document.querySelectorAll(".dark").forEach((element) => {
              element.classList.add("light");
              element.classList.remove("dark");
            });

            localStorage.setItem("themeMode", "light");
          });

        document
          .querySelector(".menu-button")
          ?.addEventListener("click", function () {
            document.body.classList.toggle("no-scroll");
          });

      });
    <\/script></body></html>`;
}, "/Users/imagelikeness/Documents/untitled folder/LH/lime/lime-honey/src/pages/projects/[slug].astro", void 0);
var $$file = "/Users/imagelikeness/Documents/untitled folder/LH/lime/lime-honey/src/pages/projects/[slug].astro";
var $$url = "/projects/[slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/projects/[slug]@_@astro
var page = () => _slug__exports;
//#endregion
export { page };
