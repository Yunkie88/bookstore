var assert = require ('assert');
describe ('Array',function(){
	describe ('#indexOf()', function(){
		it ('should return -1 when the value is not present', function(){
			assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});
describe('Sum', function() {
    it('2 + 2 = 4', function() {
      assert.equal(4, 2+2);
    });
});

var assert = require ('assert');
var chai = require ('chai');
var chaiHttp = require ('chai-http');
var should = chai.should();
var server = require ('../server.js');

// chai.use (chaiHttp);
// describe ('/GET book', function(){
// 	it('it should GET all the books', function (done){
// 		chai.request(server)
// 		.get('/api/book')
// 		.end (function(err,res){
// 			res.should.have.status(200);
// 			res.body.should.be.a('array');
// 			done();
// 		});
// 	}).timeout(10000)
// });

chai.use (chaiHttp);
describe ('/POST book', function(){
	it('it should not POST a book without pages field', function (done){
		var book = {
			title: "The Lord of the Rings",
			author: "J.R.R. Tolkien",
			year: 1954,
			pages: 216,
		}
		chai.request(server)
		.post('/api/book')
		.end (function(err,res){
			res.should.have.status(200);
			res.body.should.be.a('object');

			done();
		});
	}).timeout(10000)
});


describe ('/GET a book', function(){
	it('it should GET a book', function (done){
		chai.request(server)
		.get('/api/book/596789257f79021fc863f5a6')
		.end (function(err,res){
			res.should.have.status(200);
			res.body.should.be.a('object');
			res.body.result.should.have.property ('title');
			// res.body.result.title.should.eql ('nba legend');
			done();
		});
	}).timeout(10000)
});