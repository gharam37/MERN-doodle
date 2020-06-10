import chai from "chai";
import chaiHttp from "chai-http";
import app from "../server";
// Configure chai
chai.use(chaiHttp);
chai.should();
describe("App", () => {
  describe("GET /login", () => {
    // Test to check input
    it("Should return an error with missing parameters", (done) => {
      chai
        .request(app)
        .get("/login")
        .send({})
        .end((err, res) => {
          res.should.have.status(401);
          res.body.should.be.a("object");
          res.body.should.have.property("message");
          res.body.should.have
            .property("message")
            .eql("Mandatory params are missing!");

          done();
        });
    });
    it("Should return an Access token", (done) => {
      chai
        .request(app)
        .get("/login")
        .send({ userName: "Ahmed", password: "12345" })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("token");
          done();
        });
    });
  });

  describe("POST /patch", () => {
    // Test to check input
    it("Should return an error message requesting jwt token", (done) => {
      chai
        .request(app)
        .get("/patch")
        .send({})
        .end((err, res) => {
          res.should.have.status(401);
          res.body.should.be.a("object");
          res.body.should.have.property("error");
          res.body.should.have.property("error").eql("Authentication error. Token required.");

          done();
        });
    });
    it("Should return input json object and patch format", (done) => {
      chai
        .request(app)
        .get("/patch")
        .send({})
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a("object");
          res.body.should.have.property("message");
          res.body.should.have.property("message").eql("Add an image");

          done();
        });
    });
    it("should return a patched json object", (done) => {
      chai
        .request(app)
        .get("/patch")
        .send({ userName: "Ahmed", password: "12345" })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("token");
          done();
        });
    });
  });

  describe("POST /thumbnail", () => {
    // Test to check input
    it("Should return an error message requesting jwt token", (done) => {
      chai
        .request(app)
        .get("/thumbnail")
        .send({})
        .end((err, res) => {
          res.should.have.status(401);
          res.body.should.be.a("object");
          res.body.should.have.property("error");
          res.body.should.have.property("error").eql("Authentication error. Token required.");

          done();
        });
    });
    it("Should return an error message requesting image", (done) => {
      chai
        .request(app)
        .get("/thumbnail")
        .send({})
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a("object");
          res.body.should.have.property("message");
          res.body.should.have.property("message").eql("Add an image");

          done();
        });
    });
    it("should return a resized image", (done) => {
      chai
        .request(app)
        .get("/thumbnail")
        .send({ userName: "Ahmed", password: "12345" })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("token");
          done();
        });
    });
  });
});
