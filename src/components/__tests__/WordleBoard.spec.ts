import { mount } from '@vue/test-utils'
import WordleBoard from '../WordleBoard.vue'

describe("WordleBoard", () => {
  test("a victory message appers when the user makes a guess that matches the word of the day", async() => {
    //ARRANGE
    const wrapper = mount(WordleBoard, {props: {wordOfTheDay: "TESTS"}})

    //ACT
    const guessInput = wrapper.find("input[type=text]")
    await guessInput.setValue("TESTS")
    await guessInput.trigger("keydown.enter")
  })
})
