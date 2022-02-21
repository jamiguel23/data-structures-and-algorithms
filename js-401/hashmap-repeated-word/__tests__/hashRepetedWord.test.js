'use strict';

const hashRepeatWord = require('../hashRepeatedWord')

let sampleArr = "Once upon a time, there was a brave princess who..."

let otherSample = "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only..."

let something = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York'

let noRepeat = 'quick brown fox jumped over the lazy dog'



describe('first repeat word check', () => {

  it('should return the string a', () => {

    let result = hashRepeatWord(sampleArr)

    expect(result).toBe('a')
  })

  it('should return the string it', () => {

    let result = hashRepeatWord(otherSample)

    expect(result).toBe('it')
  })

  it('should return the string summer', () => {

    let result = hashRepeatWord(something)

    expect(result).toBe('summer')
  })


  it('should return the string no repeat', () => {

    let result = hashRepeatWord(noRepeat)

    expect(result).toBe('no repeat')
  })


})
