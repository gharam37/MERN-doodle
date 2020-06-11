import chai from "chai";
import chaiHttp from "chai-http";
import app from "../server";
// Configure chai
chai.use(chaiHttp);
chai.should();
let token =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImJhciIsInBhc3N3b3JkIjoiZm9vIiwiaWF0IjoxNTkxODM4MDk1fQ.SnNZgYEY9Hkf9f-GPbZ3FhL6p8sc7R2KZ_i5Vh084rk"
describe("App", () => {
  /*describe("POST /login", () => {
    // Test to check input
    it("Should return an error with missing parameters", (done) => {
      chai
        .request(app)
        .post("/login")
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
        .post("/login")
        .send({ userName: "Ahmed", password: "12345" })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("token");
          done();
        });
    });
  });*/

  describe("POST /patch", () => {
    // Test to check input
    it("Should return an error message requesting jwt token", (done) => {
      chai
        .request(app)
        .post("/patch")
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
          let document = { firstName: "Albert", contactDetails: { phoneNumbers: [] } };
         let  operation = { op: "replace", path: "/firstName", value: "Joachim" };
      //console.log(token);
      chai
        .request(app)
        .post("/patch")
        .set( 'Authorization', `Bearer ${ token }` )

        .send({document,operation})
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("newDoc");

          done();
        });
    });
    it("should request a correct body", (done) => {
      chai
        .request(app)
        .post("/patch")
        .set( 'Authorization', `Bearer ${ token }` )
        .send({})
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a("object");
          //console.log(res.body)
          //res.body.should.have.property("message");
          //res.body.should.have.property("message").eql("Mandatory params are missing! give a document and an operation ");

          done();
        });
    });
  });

  describe("POST /thumbnail", () => {
    // Test to check input
    it("Should return an error message requesting jwt token", (done) => {
      chai
        .request(app)
        .post("/thumbnail")
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
        .post("/thumbnail")
        .set( 'Authorization', `Bearer ${ token }` )
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
        .post("/thumbnail")
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
