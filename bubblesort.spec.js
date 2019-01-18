beforeAll(function () {
    spyOn(swap).and.callThrough();
});



describe('Bubble Sort', function () {
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
});
describe('Bubble Sort', function(){
    it('handles an array of 1 element', function(){
      expect( bubbleSort([3]) ).toEqual( [3] );
    });
});
describe('Bubble Sort', function(){
    it('handles an array of 2 elements', function(){
        expect(bubbleSort([2, 1])).toEqual([1, 2]);
        
    });
    it('only 1 swap is rrequired', function () {
        expect(swap.count()).toEqual(1);
    });
    //spyOn(swap).and.callThrough();
});
describe('Bubble Sort', function(){
    it('handles an  array of many elements', function(){
      expect( bubbleSort([4, 6, 7, 2, 0]) ).toEqual( [0, 2, 4, 6, 7] );
    });
});