import fs from "fs";

export default (req, res) => {
	if(req.method === "POST") {
		let body = JSON.parse(req.body);
		console.log(body)
		fs.writeFile(`../store/${body.fileName}`, body.content, e => {
			if(e) return res.status(500).json({ok: false});
			res.status(200).json({ok: true});
		})
	}
}