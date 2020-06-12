import { sign, verify } from "jsonwebtoken";
import * as jsonpatch from "fast-json-patch/index.mjs";
import { applyOperation } from "fast-json-patch/index.mjs";
import path from "path";
import Resize from "../Middlewares/Resize.js";

class AppController {
  static login(req, res) {
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

  static async thumbnail(req, res) {
    let url = req.protocol + "://" + req.get("host");

    const authorizationHeader = req.headers.authorization;
    if (authorizationHeader) {
      const token = req.headers.authorization.split(" ")[1]; // Bearer <token>
      try {
        // verify makes sure that the token hasn't expired and has been issued by us
        const result = verify(token, "this is a secret");

        // Let's pass back the decoded token to the request object
        req.decoded = result;
        // We call next to pass execution to the subsequent middleware
      } catch (err) {
        // Throw an error just in case anything goes wrong with verification
        return res.status(401).json({
          error: `Invalid token provided`,
        });
      }
    } else {
      return res.status(401).json({
        error: `Authentication error. Token required.`,
      });
    }

    const imagePath = path.join(__dirname, "../public/images");
    const fileUpload = new Resize(imagePath);
    if (!req.file) {
      return res.status(400).json({ message: "Please provide an image" });
    }
    const filename = await fileUpload.save(req.file.buffer);
    return res.status(200).json({ url: `${url}/images/${filename}` });
  }

  static jsonPatch(req, res) {
    const authorizationHeader = req.headers.authorization;
    if (authorizationHeader) {
      const token = req.headers.authorization.split(" ")[1]; // Bearer <token>
      try {
        // verify makes sure that the token hasn't expired and has been issued by us
        const result = verify(token, "this is a secret");

        // Let's pass back the decoded token to the request object
        req.decoded = result;
        // We call next to pass execution to the subsequent middleware
      } catch (err) {
        // Throw an error just in case anything goes wrong with verification
        throw new Error(err);
      }
    } else {
      return res.status(401).json({
        error: `Authentication error. Token required.`,
      });
    }
    //console.log(req.body);
    const { document, operation } = req.body;

    if (!document || !operation) {
      return res.status(400).json({
        message:
          "Mandatory params are missing! give a document and an operation ",
      });
    }

    //let document = { firstName: "Albert", contactDetails: { phoneNumbers: [] } };
    //let  operation = { op: "replace", path: "/firstName", value: "Joachim" };
    var newDoc = jsonpatch.applyOperation(document, operation).newDocument;

    return res.status(200).json({
      newDoc,
    });
  }
}
export default AppController;
