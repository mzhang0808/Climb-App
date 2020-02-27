process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../app');
let should = chai.should();


chai.use(chaiHttp);

describe('Users', () => {
	/*beforeEach((done) =>{
		
	});*/
	describe('/GET users', () => {
		it('this should GET all users', (done) => {
			chai.request(server)
			    .get('/users')
			    .end((err,res) => {
				res.should.have.status(200);
				res.body.should.be.a('array');
				res.body.length.should.be.above(0);
			    done();
			});
		});
	});

});
