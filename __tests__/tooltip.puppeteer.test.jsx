const puppeteer = require('puppeteer');

it('launches browser', async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
});
