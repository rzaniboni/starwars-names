const starWars = require('./index')

describe ('starwars-names', () => {
  it('should work', () => {
    expect(true).toBe(true)
  })

  describe('all', () => {
    let names;

    beforeEach(() => {
      names = starWars.all
    })

    it('should be an array', () => {
      expect(Array.isArray(names)).toBe(true)
      expect(names).toBeInstanceOf(Array)
    })

    it('should be an array of strings', () => {
      expect(Array.isArray(names)).toBe(true)
    })

    it('should contain `Luke Skywalker`', () => {
      expect(names).toContain('Luke Skywalker')
    })
  })

  describe('random', () => {
    it('should return a random item from the starWars.all', () => {
      let randomItem = starWars.random()
      console.log(randomItem)
      expect(starWars.all).toContain(randomItem)
    })

    it('should return an array of random items if passed a number', () => {
      const randomItems = starWars.random(3)
      expect(randomItems).toHaveLength(3)
      randomItems.forEach(item => {
        expect(starWars.all).toContain(item)
      })
    })
  })
})
