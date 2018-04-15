import insertionSort from './insertionSort';


describe('insertion sort', () => {
  it('should sort correctly', () =>{
    var a = [5, 2, 4, 6, 1, 3]
    expect(insertionSort(a)).toEqual([1, 2, 3, 4, 5, 6]);
  })
})

