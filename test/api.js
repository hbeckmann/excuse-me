var should = require('should'),
    request = require('supertest'),
    app = require('../server.js'),
    agent = request.agent(app);



describe('server functionality', function() {
  it('Should get an excuse',
  function(done) {
    agent.get('/excuse')
      .expect(200)
      .end(function(err,results){
        console.log(results.body);
        results.body.should.have.property('school');
        done();
      })
  });
});
