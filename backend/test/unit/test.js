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
	describe('/POST null user_name', () => {
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
	describe('/POST null password', () => {
		it('this should not POST a user if the pass field is empty', (done) => {
			let user = {
				user_name: "hello",
				password: null
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
	describe('/POST valid user', () => {
		it('this should POST a valid user', (done) => {
			let user = {
				user_name: "michael",
				password: "<3ndicy"
			}
			chai.request(server)
			    .post('/users')
			    .send(user)
			    .end((err,res) => {
				res.should.have.status(200);
			    done();
			});
		});
	});
	describe('/POST duplicate user', () => {
		it('this should POST a duplicate user', (done) => {
			let user = {
				user_name: "michael",
				password: "<3ndicy"
			}
			chai.request(server)
			    .post('/users')
			    .send(user)
			    .end((err,res) => {
				res.should.have.status(400);
				res.body.should.be.a('string');
				res.body.should.eql('existing user');
			    done();
			});
		});
	});
});
