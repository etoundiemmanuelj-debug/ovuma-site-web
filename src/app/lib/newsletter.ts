/** Envoie une inscription au formulaire Netlify « newsletter » (déclaré dans index.html). */
export async function subscribeNewsletter(email: string, source: string) {
  const body = new URLSearchParams({ "form-name": "newsletter", email, source }).toString();
  const res = await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
  if (!res.ok) throw new Error(`newsletter ${res.status}`);
}
