async function runTests() {
  const baseUrl = "http://localhost:3000";

  console.log("--- STARTING ENDPOINT VERIFICATION ---");

  // 1. Home Page
  const homeRes = await fetch(`${baseUrl}/`);
  console.log(`[GET /] Status: ${homeRes.status} (Expected: 200)`);
  const homeHtml = await homeRes.text();
  console.log(`[GET /] Contains 'Md. Hanif': ${homeHtml.includes("Md. Hanif")}`);
  console.log(`[GET /] Contains 'Full-Stack Web Developer': ${homeHtml.includes("Full-Stack Web Developer")}`);
  console.log(`[GET /] Contains 'Develop By Md. Hanif': ${homeHtml.includes("Develop By Md. Hanif")}`);

  // 2. Resume Page
  const resumeRes = await fetch(`${baseUrl}/resume`);
  console.log(`[GET /resume] Status: ${resumeRes.status} (Expected: 200)`);
  const resumeHtml = await resumeRes.text();
  console.log(`[GET /resume] Contains PDF link: ${resumeHtml.includes("Md-Hanif-Resume.pdf")}`);

  // 3. Static PDF Asset
  const pdfRes = await fetch(`${baseUrl}/resume/Md-Hanif-Resume.pdf`);
  console.log(`[GET /resume/Md-Hanif-Resume.pdf] Status: ${pdfRes.status} (Expected: 200), Length: ${pdfRes.headers.get("content-length")} bytes`);

  // 4. Logo Asset
  const logoRes = await fetch(`${baseUrl}/images/logo2.jpg`);
  console.log(`[GET /images/logo2.jpg] Status: ${logoRes.status} (Expected: 200)`);

  // 5. Portrait Asset
  const portraitRes = await fetch(`${baseUrl}/images/myImage.jpg`);
  console.log(`[GET /images/myImage.jpg] Status: ${portraitRes.status} (Expected: 200)`);

  // 6. Case Study Page: Cabbage
  const caseRes = await fetch(`${baseUrl}/projects/cabbage-grocery-ecommerce`);
  console.log(`[GET /projects/cabbage-grocery-ecommerce] Status: ${caseRes.status} (Expected: 200)`);
  const caseHtml = await caseRes.text();
  console.log(`[GET /projects/...] Contains 'Grocery E-Commerce': ${caseHtml.includes("Grocery E-Commerce")}`);

  // 7. Case Study Page: Graphics Landing
  const caseRes2 = await fetch(`${baseUrl}/projects/graphics-design-landing-page`);
  console.log(`[GET /projects/graphics-design-landing-page] Status: ${caseRes2.status} (Expected: 200)`);

  // 8. Contact API Route: POST valid payload
  const contactRes = await fetch(`${baseUrl}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "Alex Vance",
      email: "alex@techstart.io",
      subject: "Full-Stack Opportunity",
      message: "Hello Md. Hanif, we have an open full-stack role and would love to connect."
    })
  });
  const contactJson = await contactRes.json();
  console.log(`[POST /api/contact] Status: ${contactRes.status}, Response:`, contactJson);

  // 9. Contact API Route: POST honeypot spam attempt
  const spamRes = await fetch(`${baseUrl}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "SpamBot",
      email: "bot@spam.com",
      subject: "Buy links",
      message: "Spam message here",
      honeypot: "i am a bot"
    })
  });
  console.log(`[POST /api/contact Honeypot] Status: ${spamRes.status} (Expected: 400 rejection)`);

  // 10. Sitemap & Robots
  const sitemapRes = await fetch(`${baseUrl}/sitemap.xml`);
  console.log(`[GET /sitemap.xml] Status: ${sitemapRes.status}`);

  const robotsRes = await fetch(`${baseUrl}/robots.txt`);
  console.log(`[GET /robots.txt] Status: ${robotsRes.status}`);

  console.log("--- ALL ENDPOINT VERIFICATION TESTS COMPLETE ---");
}

runTests().catch(console.error);
