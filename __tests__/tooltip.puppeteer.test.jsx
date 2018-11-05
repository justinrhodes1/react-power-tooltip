const puppeteer = require('puppeteer');
const path = require('path');

const testURL = path.join(__dirname, '/../puppeteer/index.html');

it('launches browser', async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  await page.goto(testURL);

  const styleTop = await page
    .$eval('.test-arrow-top .rct-textbox-container', el => el.style.top);
  const styleCenter = await page
    .$eval('.test-arrow-center .rct-textbox-container', el => el.style.top);
  const styleBottom = await page
    .$eval('.test-arrow-bottom .rct-textbox-container', el => el.style.top);

  expect(styleTop).toEqual('calc(((50% - 0px) - 24.5px) + 0px)');
  expect(styleCenter).toEqual('calc(50% - 73px)');
  expect(styleBottom).toEqual('calc(((50% - 146px) - -24.5px) + 0px)');
});
