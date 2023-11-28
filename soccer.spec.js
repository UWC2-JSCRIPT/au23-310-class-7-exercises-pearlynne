describe('Tests for the Soccer Game', () => {
	describe('Tests for getTotalPoints function', () => {
		it('should return an accurate total score for a string input', () => {
			const result = getTotalPoints('wwdlw')
			expect(result).toEqual(10);
		})
	})
	describe('Tests for orderTeams function', () => {
		it('should accept a string of results and return total score of teams', () => {
			const result = orderTeams({name: 'Sounders', results: 'wwlwdd'}, 
			{name: 'Galaxy', results: 'wlldld'})
			expect(result).toEqual(`Sounders: 11\nGalaxy: 5`);
		})
	})

})