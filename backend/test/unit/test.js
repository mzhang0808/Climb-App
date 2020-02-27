process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../app');
let should = chai.should();
let expect = chai.expect();


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
	describe('/POST user', () => {
		it('this should not POST a user if the user_name field is empty', (done) => {
			let user = {
				user_name: null,
				password: "hello"
			}
			chai.request(server)
			    .post('/users')
			    .send(user)
			    .end((err,res) => {
				res.should.have.status(400);
				res.body.should.be.a('string');
				res.body.should.eql('empty fields');
			    done();
			});
		});
	});
});
