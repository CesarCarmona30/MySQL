//MODEL

const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function create(language) {
  const result = await db.query(
    `INSERT INTO languages
    (position, name, year)
    VALUES(
      ${language.position},
      "${language.name}",
      ${language.year}
    );`
  );

  let message = "Error al crear lenguaje de programacion";
  if (result.affectedRows) {
    message = "El lenguaje se ha creado con exito";
  }
  return message;
}

async function read(page = 1) {
  const offSet = helper.getOffSet(page, config.listPerPage);
  const rows = await db.query(
    `SELECT * FROM languages;`
  );

  const data = helper.emptyOrRows(rows);
  const metadata = { page };

  return {
    data,
    metadata,
  };
}


async function update(position, language) {
  const result = await db.query(
    `UPDATE languages SET 
      position = ${language.position},
      name = "${language.name}",
      year = ${language.year}
    WHERE position = ${position};`
  );

  let message = "Error al actualizar lenguaje de programacion";
  if (result.affectedRows) {
    message = "El lenguaje se ha actualizado con exito";
  }
  return message;
}

async function delete_(position){
  const result = await db.query(
    `DELETE FROM languages WHERE position = ${position}`
  )

  let message = "Error al borrar lenguaje de programacion";
  if(result.affectedRows){
    message = "El lenguaje ha sido borrado con exito";
  }
  return message;
}

module.exports = {
  create,
  read,
  update,
  delete_
};
