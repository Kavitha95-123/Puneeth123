import { test,expect } from "@playwright/test";
test('flipkart',async({page})=>{
    await page.goto("https://www.flipkart.com/")
    await page.getByText('Flight Bookings').click()
    await page.locator('#ONE_WAY').check()
    //await page.getByRole('textbox',{name:"From",exact:true}).click()
    await page.locator('//input[@class="afiehA ZvxNMK ZzRAN5 Eej6mw dIPldQ QRzexE"]').fill("Mumbai")
    await page.waitForTimeout(2000)
    await page.locator('//input[@class="afiehA ZvxNMK ZzRAN5 Eej6mw rPbh97 QRzexE"]').fill("Hyderabad")
    await page.waitForTimeout(2000)
    //await page.getByRole('textbox',{name:"21 Jan, Wed"}).fill("23 Jan,Fri")
})  