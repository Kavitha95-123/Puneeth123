import { test,expect } from "@playwright/test";
// test.skip('drpodown',async({page})=>{
//     await page.goto('https://testautomationpractice.blogspot.com/')
//    const rows = await page.locator('#country').all();
//    console.log(rows)
//    for(const row of rows){
//     const alltext = await row.textContent()
//     console.log(alltext)
//     if(alltext.includes('India')){
//         await row.click()
//     }
//      break;
//    }
//    await page.waitForTimeout(3000)
// })
// test('drp1',async({page})=>{
// await page.goto('https://www.flipkart.com/travel/flights?param=Vijeth&otracker=clp_bannerads_6_4.bannerAdCard.BANNERADS_Vijeth_travel%2Fflights_WCPOWSFQULX6')

//     await page.locator('//input[@class = "afiehA ZvxNMK ZzRAN5 Eej6mw dIPldQ QRzexE"]').click()
//     const options = await page.locator('//div[@class="fgU7Kf DxUEFR"]/div').all()
//     let city = "Hyderabad"
//     for(const option of options){
//         const alltext = await option.textContent()
//         //onsole.log(alltext)
//         if(alltext.includes(city)){
//             await option.click()
//             await page.waitForTimeout(2000)
//             br
// });
test('123',async({page})=>{
await page.goto('https://www.flipkart.com/travel/flights?param=Vijeth&otracker=clp_bannerads_6_4.bannerAdCard.BANNERADS_Vijeth_travel%2Fflights_WCPOWSFQULX6')

    await page.locator('//input[@class = "afiehA ZvxNMK ZzRAN5 Eej6mw rPbh97 QRzexE"]').click()
    const alltext = (await page.locator('//div[@class="fgU7Kf DxUEFR"]/div').last()).all()
    let tocity = "Mumbai"
    for(let text of alltext){
        const allcity = await text.textContent()
        if(allcity.includes(tocity)){
            await text.click()
            await page.waitForTimeout(2000)
            break;
        }
    }

    
})