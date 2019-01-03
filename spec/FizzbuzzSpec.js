describe ('Fizzbuzz', function() {

  it("returns 'fizz' if the number is divisible by 3", function(){
    expect(Fizzbuzz(3)).toBe('fizz');
  });

  it("returns 'buzz' if the number is divisible by 5", function(){
    expect(Fizzbuzz(5)).toBe('buzz');
  });

  it("returns 'fizzbuzz' if the number is divisible by 15", function(){
    expect(Fizzbuzz(15)).toBe('fizzbuzz');
  });
});
