describe('Tests for the BlackJack Game', () => {
	it('should calculate the score of a hand without Aces', () => {
		const hand = [
			{ displayVal: 'ten', val: 10, suit: 'hearts' },
			{ displayVal: 'Seven', val: 7, suit: 'hearts' },
		]
		const result = calcPoints(hand);
		expect(result.total).toEqual(17);
		expect(result.isSoft).toEqual(false);
	})

	it('should calculate the score of a hand with 1 ace (soft)', () => {
		const hand = [
			{ displayVal: 'Ace', val: 1, suit: 'hearts' },
			{ displayVal: 'Seven', val: 7, suit: 'hearts' },
		]
		const result = calcPoints(hand);
		expect(result.total).toEqual(18);
		expect(result.isSoft).toEqual(true);
	})

	it('should calculate the score of a hand with 1 ace (not soft)', () => {
		const hand = [
			{ displayVal: 'Ace', val: 1, suit: 'hearts' },
			{ displayVal: 'Ten', val: 10, suit: 'hearts' },
			{ displayVal: 'King', val: 10, suit: 'spades' },
		]
		const result = calcPoints(hand);
		expect(result.total).toEqual(21);
		expect(result.isSoft).toEqual(false);
	})

	it('should calculate the score of a hand with multiple aces (soft)', () => {
		const hand = [
			{ displayVal: 'Ace', val: 1, suit: 'hearts' },
			{ displayVal: 'Ace', val: 1, suit: 'spades' },
			{ displayVal: 'Seven', val: 7, suit: 'hearts' },
		]
		const result = calcPoints(hand);
		expect(result.total).toEqual(19);
		expect(result.isSoft).toEqual(true);
	})

	it('should calculate the score of a hand with multiple aces (not soft)', () => {
		const hand = [
			{ displayVal: 'Ace', val: 1, suit: 'hearts' },
			{ displayVal: 'Ace', val: 1, suit: 'spades' },
			{ displayVal: 'Ten', val: 10, suit: 'hearts' },
		]
		const result = calcPoints(hand)
		expect(result.total).toEqual(12)
		expect(result.isSoft).toEqual(false)
	})

})

