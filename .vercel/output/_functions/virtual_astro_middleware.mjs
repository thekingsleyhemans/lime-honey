import { rt as defineMiddleware, t as sequence } from "./chunks/sequence_BvMXc8IV.mjs";
//#region src/middleware.ts
var onRequest$1 = defineMiddleware(async ({ cookies, url, redirect }, next) => {
	if (!(url.pathname === "/admin" || url.pathname.startsWith("/admin/"))) return next();
	const session = cookies.get("admin_session")?.value;
	if (!session || false) return redirect("/login");
	if (session.length !== 64) {
		cookies.delete("admin_session", { path: "/" });
		return redirect("/login");
	}
	return next();
});
//#endregion
//#region \0virtual:astro:middleware
var onRequest = sequence(onRequest$1);
//#endregion
export { onRequest };
