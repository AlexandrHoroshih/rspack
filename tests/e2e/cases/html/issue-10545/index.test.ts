import { test, expect } from "@/fixtures";

test("Issue 10545", async ({
	page
}) => {
	const scripts = await page.$$("script");

	console.log("SCRIPTS", scripts);

	const crossOrigins = await Promise.all(
		scripts.map(script => script.getAttribute("crossorigin"))
	);

	const srcPaths = await Promise.all(
		scripts.map(script => script.getAttribute("src"))
	);

	const integritys = (await Promise.all(
		scripts.map(script => script.getAttribute("integrity"))
	)).filter(Boolean);

	expect(integritys.length > 0).toBe(true);
	expect(crossOrigins).toEqual([null, "anonymous"]);
});
