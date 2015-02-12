describe("romanNum", function() {

  it('will return an I for 1', function() {
    expect(romanNum(1)).to.equal("I");
  });

  it('will return a V for 5', function() {
    expect(romanNum(5)).to.equal("V");
  });

  it('will return an X for 10', function() {
    expect(romanNum(10)).to.equal("X");
  });

  it('will return an L for 50', function() {
    expect(romanNum(50)).to.equal("L");
  });

  it('will return a C for 100', function() {
    expect(romanNum(100)).to.equal("C");
  });

  it('will return a D for 500', function() {
    expect(romanNum(500)).to.equal("D");
  });

  it("will return an M for 1000", function() {
    expect(romanNum(1000)).to.equal("M");
  });

  it("will return the new level letter for the first 3 numbers in the column", function() {
    expect(romanNum(3)).to.equal("III");
    expect(romanNum(30)).to.equal("XXX");
    expect(romanNum(300)).to.equal("CCC");
    expect(romanNum(3000)).to.equal("MMM");
  });

  it("will return new level letter followed by the midlevel letter ", function() {
    expect(romanNum(4)).to.equal("IV");
    expect(romanNum(40)).to.equal("XL");
    expect(romanNum(400)).to.equal("CD");
  });

  it("will return midlevel letter followed by the new level letter (up to 3 times) for numbers preceding the next level number minus 1", function() {
    expect(romanNum(8)).to.equal("VIII")
    expect(romanNum(80)).to.equal("LXXX");
    expect(romanNum(800)).to.equal("DCCC");
  });

});
