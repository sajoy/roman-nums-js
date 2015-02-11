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

  it("will return an 'I' for ones up to 3", function() {
    expect(romanNum(3)).to.equal("III");
  });

  it("will return IV for 4", function() {
    expect(romanNum(4)).to.equal("IV");
  });

  it("will return continue pattern after mid level", function() {
    expect(romanNum(8)).to.equal("VIII")
  })
});
