/*
 * @Author: jiangqm
 * @Date: 2023-09-14 16:58:22
 * @Description: 
 */
// sum.test.js
import { expect, test } from 'vitest'

function sum(a,b){
    return a+b
}

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})