import { defineMiddleware } from "astro:middleware";
import crypto from "node:crypto";

export const onRequest = defineMiddleware(async ({ cookies, url, redirect }, next) => {
  const isAdminPage = url.pathname === "/admin" || url.pathname.startsWith("/admin/");

  if (!isAdminPage) {
    return next();
  }

  const session = cookies.get("admin_session")?.value;
  const adminPassword = import.meta.env.ADMIN_PASSWORD;

  if (!session || !adminPassword) {
    return redirect("/login");
  }

  /*
   * The session token is derived from the password.
   * We don't store the password in the cookie.
   */
  if (session.length !== 64) {
    cookies.delete("admin_session", {
      path: "/",
    });

    return redirect("/login");
  }

  return next();
});