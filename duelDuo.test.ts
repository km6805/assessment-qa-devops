import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Draw button returns an array of cards', async () => {
    const drawButton = await driver.findElement(By.id('choices'))
    const displayed = await drawButton.isDisplayed()
    expect(displayed).toBe(true)
})

test('See All Bots Button display bot cards correctly', async () => {
    await driver.findElement(By.id('see-all')).click()
    const botCardContainer = await driver.findElement(By.id('all-bots'))
    const displayed = await botCardContainer.isDisplayed()

    expect(displayed).toBe(true)

})
function beforeEach(arg0: () => Promise<void>) {
    throw new Error("Function not implemented.")
}

function afterAll(arg0: () => Promise<void>) {
    throw new Error("Function not implemented.")
}

function expect(displayed: any) {
    throw new Error("Function not implemented.")
}

