process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();
let expect = chai.expect();


chai.use(chaiHttp);

// UNIT TESTS: /users
describe('Users', () => {
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
		it('this should not POST a user if the password field is empty', (done) => {
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
		it('this attempts to POST a duplicate user and returns an error', (done) => {
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
	describe('/GET specific users', () => {
		it('this should GET a specific user', (done) => {
			chai.request(server)
			    .get('/users/michael')
			    .end((err,res) => {
				res.should.have.status(200);
				res.body.should.be.a('array');
				res.body.length.should.eql(1);
			    done();
			});
		});
	});
	describe('/DELETE specific user', () => {
		it('this should DELETE a specific user', (done) => {
			let user = {
				user_name: "michael",
				password: "<3ndicy"
			}
			chai.request(server)
			    .delete('/users')
			    .send(user)
			    .end((err,res) => {
				res.should.have.status(200);
			    done();
			});
		});
	});
	describe('/DELETE non-existing user', () => {
		it('this attempts to DELETE a non-existing user', (done) => {
			let user = {
				user_name: "michael",
				password: "<3ndicy"
			}
			chai.request(server)
			    .delete('/users')
			    .send(user)
			    .end((err,res) => {
				res.should.have.status(400);
				res.body.should.be.a('string');
				res.body.should.eql('no such user');
			    done();
			});
		});
	});
});

// UNIT TESTS: /competitions
describe('Competitions', () => {
	describe('/GET competitions', () => {
		it('this should GET all competitions', (done) => {
			chai.request(server)
				.get('/competitions')
				.end((err,res) =>{
				res.should.have.status(200);
				res.body.should.be.a('array');
				res.body.length.should.be.above(0);
				done();
				});
		});
	});
	describe('/POST null comp_name', () => {
		it('this should not POST a comp if the comp_name field is empty', (done) => {
			let comp = {
				comp_name: null,
				num_of_problems: 40
			}
			chai.request(server)
			    .post('/competitions')
			    .send(comp)
			    .end((err,res) => {
				res.should.have.status(400);
				res.body.should.be.a('string');
				res.body.should.eql('empty fields');
			    done();
			});
		});
	});
	describe('/POST null num_of_problems', () => {
		it('this should not POST a comp if the num_of_problems field is empty', (done) => {
			let comp = {
				comp_name: "UCSB2020GANGGANG",
				num_of_problems: null
			}
			chai.request(server)
			    .post('/competitions')
			    .send(comp)
			    .end((err,res) => {
				res.should.have.status(400);
				res.body.should.be.a('string');
				res.body.should.eql('empty fields');
			    done();
			});
		});
	});
	describe('/POST valid comp', () => {
		it('this should POST a valid comp', (done) => {
			let comp = {
				comp_name: "UCSB2020GANGGANG",
				num_of_problems: 45
			}
			chai.request(server)
			    .post('/competitions')
			    .send(comp)
			    .end((err,res) => {
				res.should.have.status(200);
			    done();
			});
		});
	});
	describe('/DELETE null comp', () => {
		it('this should not DELETE a comp if the comp_name field is empty', (done) => {
			let comp = {
				comp_name: null
			}
			chai.request(server)
				.delete('/competitions')
				.send(comp)
				.end((err,res) => {
				res.should.have.status(400);
				res.body.should.be.a('string');
				res.body.should.eql('empty fields')
				done();
				});
		});
	});
	describe('/DELETE valid comp', () => {
		it('this should DELETE a valid comp', (done) => {
			let comp = {
				comp_name: "UCSB2020GANGGANG",
			}
			chai.request(server)
				.delete('/competitions')
				.send(comp)
				.end((err,res) => {
				res.should.have.status(200);
				done();
				});
		});
	});
	describe('/DELETE non-existing comp', () => {
		it('this attempts to DELETE a non-existing comp and fails', (done) => {
			let comp = {
				comp_name: "UCSB2020GANGGANG"
			}
			chai.request(server)
				.delete('/competitions')
				.send(comp)
				.end((err,res) => {
				res.should.have.status(400);
				res.body.should.be.a('string');
				res.body.should.eql('no such competition')
				done();
				});
		});
	});
});
