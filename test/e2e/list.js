import webdriver, {By, until} from 'selenium-webdriver';

// describe('list', () => {
  let driver = new webdriver.Builder().forBorwser('firefox').build()

//   let page;
//   beforeEach(() => {
//     page = driver.navigate().to('./index.html')
//   })

//   it('open home', () => {
//     page.then(() => console.log('hello'))
//   })
// })