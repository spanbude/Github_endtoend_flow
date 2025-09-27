const{test,expect}= require('@playwright/test')


test('TC001',async({page})=>{

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await page.locator("//input[@placeholder='Username']").fill("Admin")
await page.locator("//input[@placeholder='Password']").fill("admin123")
await page.locator("//button[@type='submit']").click();



});

test('TC002',async({page})=>{

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await page.locator("//input[@placeholder='Username']").fill("Admin")
await page.locator("//input[@placeholder='Password']").fill("admin123")
await page.locator("//button[@type='submit']").click();
const ttitleofpage=await page.title()
console.log(ttitleofpage);




});


test('TC003',async({page})=>{

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await page.locator("//input[@placeholder='Username']").fill("Admin")
await page.locator("//input[@placeholder='Password']").fill("admin123")
await page.locator("//button[@type='submit']").click();
const ttitleofpage=await page.title()
console.log(ttitleofpage);




});
