selenium = require 'selenium-webdriver'
chai = require 'chai'
chai.use require 'chai-as-promised'
expect = chai.expect

before ->
  @timeout 10000
  @driver = new selenium.Builder()
    .withCapabilities(selenium.Capabilities.chrome())
    .build()
  @driver.getWindowHandle()

after ->
  @driver.quit()

describe 'Test Excuse-Me App', ->
  beforeEach ->
    @timeout 50000
    @driver.get 'localhost:9000'

  it 'has the title \'Excuser\' in the window\'s title', ->
    @timeout 50000
    expect(@driver.getTitle()).to.eventually.contain 'Excuser'
