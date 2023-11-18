import { gpt } from './index'

describe('gpt', () => {
    test('SHOULD create gpt without arguments', async () => {
        const got = await gpt`Please echo the following to prove we can communicate: "hello"`
        console.log(got)
    }, 6000)
    test('SHOULD create gpt with one argument', async () => {
        const got = await gpt`Please echo the following to prove we can communicate: ${"hello"}`
        console.log(got)
    }, 6000)
    test('SHOULD create gpt with multiple arguments', async () => {
        const got = await gpt`Please echo the following to prove we can communicate: ${"hello"}, ${"world"}!`
        console.log(got)
    }, 6000)
})