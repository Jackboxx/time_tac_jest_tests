describe("Logs into TimeTac", () => {
  beforeAll(async () => {
    await page.goto("https://go-sandbox.timetac.com/qatest");
    await page.type("#userName", "username");
    await page.type("#userPass", "password");
    await page.click(".LoginSubmitForm");
    await page.waitForNetworkIdle({ idleTime: 3000 });

    await page.click("#tt-header-button-1018-btnIconEl");
    await page.click("#tt-header-button-1023-btnIconEl");
    await page.waitForNetworkIdle({ idleTime: 500 });

    // 06 stop time-tracking
    // 07 don't stop time-tracking
    await page.click("#button-1007-btnInnerEl");
    await page.waitForNetworkIdle({ idleTime: 3000 });
  });

  it("should match the page login url", async () => {
    await expect(page.url()).toMatch("https://go-sandbox.timetac.com/qatest");
  });
});
