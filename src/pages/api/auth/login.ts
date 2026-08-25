import type { APIRoute } from "astro";

export const prerender = false;

const AUTH_COOKIE = "lh_admin_session";
const SESSION_VALUE = "authenticated";

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const body = await request.json();

    if (!body || typeof body.password !== "string") {
      return new Response(
        JSON.stringify({
          error: "Password is required.",
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    const adminPassword = import.meta.env.ADMIN_PASSWORD;

    if (!adminPassword) {
      console.error("ADMIN_PASSWORD is not configured.");

      return new Response(
        JSON.stringify({
          error: "Server configuration error.",
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    if (body.password !== adminPassword) {
      return new Response(
        JSON.stringify({
          error: "Incorrect password.",
        }),
        {
          status: 401,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    cookies.set(AUTH_COOKIE, SESSION_VALUE, {
      httpOnly: true,
      secure: import.meta.env.PROD,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    return new Response(
      JSON.stringify({
        success: true,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Login error:", error);

    return new Response(
      JSON.stringify({
        error: "Invalid request body.",
      }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};