/**
 * verify-brand.mjs — screenshot footer utk cek lapis brand halus
 */
import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto("http://localhost:3000/", { waitUntil: "networkidle", timeout: 45000 });
await page.waitForTimeout(1200);
const footer = page.locator("footer");
await footer.scrollIntoViewIfNeeded();
await page.waitForTimeout(400);
await footer.screenshot({ path: "public/_verify-footer.png" });
await browser.close();
console.log("OK public/_verify-footer.png");
