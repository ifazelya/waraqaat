const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('file:///Users/ilyas/Documents/arabproj/usoolcopy.html', { waitUntil: 'networkidle0' });
  await page.pdf({
    path: 'output.pdf',
    format: 'A4',
    printBackground: true,
    displayHeaderFooter: true,
    margin: {
      top: '1px',
      bottom: '1px', // leave space for footer
    },
    footerTemplate: `
      <div style="font-size:14px; width:100%; text-align:center; color:gray; padding-top:5px;">
       <span class="pageNumber"></span>
      </div>
    `,
    headerTemplate: `<div></div>` // Empty header
  });
  await browser.close();
})();
