selenium = require 'selenium-webdriver'
chai = require 'chai'
chai.use require 'chai-as-promised'
expect = chai.expect

before ->
  @timeout 50000
  @driver = new selenium.Builder()
    .withCapabilities(selenium.Capabilities.chrome())
    .build()
  @driver.getWindowHandle()

after ->
  @driver.quit()

describe 'Test Excuse-Me App Load', ->
  beforeEach ->
    @timeout 50000
    @driver.get 'localhost:9000'

  it 'Has the title \'Excuser\' in the window\'s title', ->
    @timeout 50000
    expect(@driver.getTitle()).to.eventually.contain 'Excuser'

describe 'Test Navigation links', ->
  beforeEach ->
    @timeout 2000
    @driver.get 'localhost:9000'

  it '\'Submit\' button in navigation menu goes to Submit page', ->
    @driver.findElement(linkText: 'Submit').click()
    expect(@driver.getCurrentUrl()).to.eventually.equal 'http://localhost:9000/submit'

  it '\'Home\' button in navigation menu goes back to the home page', ->
    @driver.findElement(linkText: 'Home').click()
    expect(@driver.getCurrentUrl()).to.eventually.equal 'http://localhost:9000/'

  it '\'Excuser\' button in navigation menu goes back to the home page', ->
    @driver.findElement(linkText: 'Excuser').click()
    expect(@driver.getCurrentUrl()).to.eventually.equal 'http://localhost:9000/'

describe 'Test Home page Category links and subcategories', ->
  beforeEach ->
    @timeout 2000
    @driver.get 'localhost:9000'

  categoryList = ['School', 'Work', 'Social', 'Events', 'Funny', 'Love']
  categoryList.forEach (element, index, array) ->
    it 'Testing Category link \'' + element + '\'', ->
      @driver.findElement(linkText: element).click()
      expect(@driver.getCurrentUrl()).to.eventually.equal 'http://localhost:9000/' + element.toLowerCase()

describe 'Test All Subcategory pages for School', ->
  beforeEach ->
    @timeout 2000
    @driver.get 'localhost:9000'

  subCatList = ['Homework', 'Absence', 'Tardiness', 'Tests', 'Late']
  subCatList.forEach (element, index, array) ->
    it 'Testing Subcategory link \'' + element + '\'', ->
      @driver.findElement(linkText: 'School').click()
      @driver.findElement(linkText: element).click()
      expect(@driver.getCurrentUrl()).to.eventually.equal 'http://localhost:9000/school/' + element.toLowerCase()

describe 'Test All Subcategory pages for Work', ->
  beforeEach ->
    @timeout 2000
    @driver.get 'localhost:9000'

  subCatList = ['Missed Deadlines', 'Absence', 'Tardiness', 'Meeting', 'Leaving Early']
  subCatList.forEach (element, index, array) ->
    it 'Testing Subcategory link \'' + element + '\'', ->
      @driver.findElement(linkText: 'Work').click()
      @driver.findElement(linkText: element).click()
      expect(@driver.getCurrentUrl()).to.eventually.equal 'http://localhost:9000/work/' + element.toLowerCase().replace(' ', '')

describe 'Test All Subcategory pages for Social', ->
  beforeEach ->
    @timeout 2000
    @driver.get 'localhost:9000'

  subCatList = ['Party', 'Dance']
  subCatList.forEach (element, index, array) ->
    it 'Testing Subcategory link \'' + element + '\'', ->
      @driver.findElement(linkText: 'Social').click()
      @driver.findElement(linkText: element).click()
      expect(@driver.getCurrentUrl()).to.eventually.equal 'http://localhost:9000/social/' + element.toLowerCase()

describe 'Test All Subcategory pages for Events', ->
  beforeEach ->
    @timeout 2000
    @driver.get 'localhost:9000'

  subCatList = ['Funeral', 'Family', 'School', 'Performance', 'Sports']
  subCatList.forEach (element, index, array) ->
    it 'Testing Subcategory link \'' + element + '\'', ->
      @driver.findElement(linkText: 'Events').click()
      @driver.findElement(linkText: element).click()
      expect(@driver.getCurrentUrl()).to.eventually.equal 'http://localhost:9000/events/' + element.toLowerCase()

describe 'Test All Subcategory pages for Funny', ->
  beforeEach ->
    @timeout 2000
    @driver.get 'localhost:9000'

  subCatList = ['Pop Culture', 'Political', 'Ridiculous']
  subCatList.forEach (element, index, array) ->
    it 'Testing Subcategory link \'' + element + '\'', ->
      @driver.findElement(linkText: 'Funny').click()
      @driver.findElement(linkText: element).click()
      expect(@driver.getCurrentUrl()).to.eventually.equal 'http://localhost:9000/funny/' + element.toLowerCase().replace(' ', '')

describe 'Test All Subcategory pages for Love', ->
  beforeEach ->
    @timeout 2000
    @driver.get 'localhost:9000'

  subCatList = ['Date', 'Break Up', 'Forget Anniversary', 'In Laws']
  subCatList.forEach (element, index, array) ->
    it 'Testing Subcategory link \'' + element + '\'', ->
      @driver.findElement(linkText: 'Love').click()
      @driver.findElement(linkText: element).click()
      expect(@driver.getCurrentUrl()).to.eventually.equal 'http://localhost:9000/love/' + element.toLowerCase().replace(' ', '')
