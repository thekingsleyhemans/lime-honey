import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
//#region src/pages/api/auth/login.ts
var login_exports = /* @__PURE__ */ __exportAll({
	POST: () => POST,
	prerender: () => false
});
var AUTH_COOKIE = "lh_admin_session";
var SESSION_VALUE = "authenticated";
var POST = async ({ request, cookies }) => {
	try {
		const body = await request.json();
		if (!body || typeof body.password !== "string") return new Response(JSON.stringify({ error: "Password is required." }), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
		if (body.password !== "testtest") return new Response(JSON.stringify({ error: "Incorrect password." }), {
			status: 401,
			headers: { "Content-Type": "application/json" }
		});
		cookies.set(AUTH_COOKIE, SESSION_VALUE, {
			httpOnly: true,
			secure: true,
			sameSite: "lax",
			path: "/",
			maxAge: 86400
		});
		return new Response(JSON.stringify({ success: true }), {
			status: 200,
			headers: { "Content-Type": "application/json" }
		});
	} catch (error) {
		console.error("Login error:", error);
		return new Response(JSON.stringify({ error: "Invalid request body." }), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
	}
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/auth/login@_@ts
var page = () => login_exports;
//#endregion
export { page };
