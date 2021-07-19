const sql = require("./db.js");

const Project = function(project) {
    this.image = project.image;
    this.title = project.title;
    this.description = project.description;
    this.url = project.url;
};

Project.create = (newProject, result) => {
    sql.query("INSERT INTO projects SET ?", newProject, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created project: ", {id: res.insertId, ...newProject});
        result(null, {id: res.insertId, ...newProject});
    });
};

Project.findById = (projectId, result) => {
    sql.query(`SELECT * FROM projects WHERE projectid = ${projectId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found project: ", res[0]);
            result(null, res[0]);
            return;
        }

        result({ kind: "not_found"}, null);
    });
};

Project.getAll = result => {
    sql.query("SELECT * FROM projects", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("projects: ", res);
        result(null, res);
    });
};

Project.updateById = (projectid, project, result) => {
    sql.query(
        "UPDATE projects SET image = ?, title = ?, description = ?, url =? WHERE projectid = ?",
        [project.image, project.title, project.description, project.url, projectid],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }

            if (res.affectRows == 0) {
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("updated project: ", { id: projectid, ...project });
            result(null, {id: projectid, ...project });
        }
    );
};

Project.remove = (projectid, result) => {
    sql.query("DELETE FROM projects WHERE projectid = ?", projectid, (err,res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.affectRows == 0) {
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted project with id: ", projectid);
        result(null, res);
    });
};

Project.removeAll = result => {
    sql.query("DELETE FROM projects", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log(`deleted ${res.affectedRows} projects`);
        result(null, res);
    });
};

module.exports = Project;