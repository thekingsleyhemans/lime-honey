import { createHmac, timingSafeEqual } from "node:crypto";

const COOKIE_NAME = "lh_admin_session";

function getSecret() {
  const secret = import.meta.env.AUTH_SECRET;

  if (!secret) {
    throw new Error("AUTH_SECRET is not configured.");
  }

  return secret;
}

function createSignature(value: string) {
  return createHmac("sha256", getSecret())
    .update(value)
    .digest("hex");
}

export function createSession() {
  const value = "authenticated";
  const signature = createSignature(value);

  return `${value}.${signature}`;
}

export function isValidSession(cookieValue: string | undefined) {
  if (!cookieValue) return false;

  const [value, signature] = cookieValue.split(".");

  if (!value || !signature) return false;

  const expectedSignature = createSignature(value);

  if (signature.length !== expectedSignature.length) {
    return false;
  }

  return timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  );
}

export function getSessionCookie(request: Request) {
  const cookieHeader = request.headers.get("cookie");

  if (!cookieHeader) return undefined;

  const cookies = cookieHeader.split(";").map((cookie) => cookie.trim());

  const sessionCookie = cookies.find((cookie) =>
    cookie.startsWith(`${COOKIE_NAME}=`)
  );

  return sessionCookie?.split("=")[1];
}

export function getSessionCookieName() {
  return COOKIE_NAME;
}