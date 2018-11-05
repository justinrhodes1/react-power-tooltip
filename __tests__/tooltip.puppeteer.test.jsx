const puppeteer = require('puppeteer');
const path = require('path');

const testURL = path.join(__dirname, '/../puppeteer/index.html');

it('launches browser', async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  await page.goto(testURL);

  const textboxTop = await page.evaluate(() => {
    const textbox = document.querySelector('.rct-test-target:nth-child(1) .rct-textbox-container');
    return getComputedStyle(textbox).top;
  });
  expect(textboxTop).toEqual('75.5px');
});
