describe('Context: My First Test Group', () => {
  before(() => {
    cy.log('runs once before all test cases in this describe block');
  });
  after(() => {
    cy.log('runs once after all test cases in this describe block');
  });

  beforeEach(() => {
    cy.log('runs before each test case');
  });

  afterEach(() => {
    cy.log('runs after each test case');
  });

  it('Opening a web application', () => {
    cy.visit('/registration_form');
  });

  it('Test 2', () => {
    expect(false).to.equal(false);
  });

  xit('Test 3', () => {
    expect(true).to.equal(true);
  });

  it('Test 4', () => {
    expect(false).not.to.equal(true);
  });

  it('Test 5', () => {
    expect(5).to.equal(5);
  });

  it.skip('Test 6', () => {
    expect(true).to.equal('5' === 5);
  });
});
