const db = require("../config/database");

exports.getRecord = async(req, res) => {
    const response = await db.query('SELECT * FROM "tblRecord" ORDER BY id ASC');
    res.status(200).send(response);
};

exports.addRecord = async(req, res) => {
    let {contributor, identity, content, lat, lng} = req.body;

    await db.query(
        'INSERT INTO "tblRecord"(contributor, identity, content, lat, lng) VALUES ($1, $2, $3, $4, $5)',
        [contributor, identity, content, lat, lng]
    );

    res.status(200).send({
        message: "record added",
        body: {contributor, identity, content, lat, lng}
    });
};
