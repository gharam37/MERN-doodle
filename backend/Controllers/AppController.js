import { sign, verify } from "jsonwebtoken";
import * as jsonpatch from 'fast-json-patch/index.mjs';
import { applyOperation } from 'fast-json-patch/index.mjs';
class AppController {
  static login(req, res) {
    console.log(req)
    const { userName, password } = req.body;
    if (!userName || !password) {
      return res.status(401).json({
        message: "Mandatory params are missing!",
      });
    }

    const token = sign({ userName, password }, "this is a secret");

    return res.status(200).json({
      token: token,
    });
  }


   static  Hello(){
      console.log('hi')
  }
  static thumbnail(req, res) {
    const authorizationHeader = req.headers.authorization;

   let self=this;
   self.Hello();


    if (authorizationHeader) {
      const token = req.headers.authorization.split(" ")[1]; // Bearer <token>
      try {
        // verify makes sure that the token hasn't expired and has been issued by us
        const  result = verify(token, "this is a secret");

        console.log("result");
        // Let's pass back the decoded token to the request object
        req.decoded = result;
        // We call next to pass execution to the subsequent middleware
        return res.status(200).json({
          result: req.decoded
        });
      } catch (err) {
        // Throw an error just in case anything goes wrong with verification
        throw new Error(err);
      }
    } else {
      return res.status(401).json({
        error: `Authentication error. Token required.`,
      });
    }
  }

  static jsonPatch(req, res) {

    let document = { firstName: "Albert", contactDetails: { phoneNumbers: [] } };
let  operation = { op: "replace", path: "/firstName", value: "Joachim" };
document = jsonpatch.applyOperation(document, operation).newDocument;

return res.status(200).json({
    document,
  });

     


  }
}
export default AppController;
