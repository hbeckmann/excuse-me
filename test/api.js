var should = require('should'),
    request = require('supertest-as-promised'),
    app = require('../server.js'),
    agent = request.agent(app);



describe('server functionality', function() {
  var categories = [];

  it('Should get all 6 categories',
  function(done) {
    agent.get('/excuse')
      .expect(200)
      .end(function(err,results){
        if (err) return done(err);

        var excuses = results.body;
        //console.log(excuses);

        var excuses = results.body;
        var categoryCounter = 0;
        var totalEx = 0;

        console.log('List of all categories: ');
        for (var category in excuses) {
          categoryCounter++;
          categories.push(category);
          console.log(`${categoryCounter}. ${category}`);
          //console.log(excuses[category]);


          for(var sub in excuses[category]) {
            var counterEx = 0;
            for(var ex in excuses[category][sub]){
              counterEx++;
            }
            totalEx = totalEx + counterEx;
            console.log(`     ${sub}: ${counterEx} excuses`);

            //console.log(counter);
          }
        }
        console.log(`Total Excuses: ${totalEx}`)
        // for (var sub in categories) {
        //     console.log(`   this is the subgenre:  ${categories[sub]}`)
        // }
        //console.log(categories);
        //console.log('This is the categories array: ' + categories);

        excuses.should.have.property('school' && 'events' && 'funny' && 'love' && 'social' && 'work');
        done();
      })// end of end
  });// end of it


  it('Should test each category endpoint',
  function() {
    const promises = categories.map((category) => {
      console.log(`Testing Category: ${category}...`);
      return agent.get(`/excuse/${category}`).expect(200);
    })
    return Promise.all(promises);
  });// end of it


});// end of describe
