import { db } from "../db.js";

export function getUsers(_, res) {
  const query = "SELECT * FROM users";

  db.query(query, (err, data) => {
    if (err) return res.status(400).json(err);

    return res.status(200).json(data);
  });
}

export function addUser(req, res) {
  const query = "INSERT INTO users (name, email, phone, birth) values (?)";

  const body = req.body;

  const values = [body.name, body.email, body.phone, body.bith];

  db.query(query, [values], (err) => {
    if (err) return res.status(400).json(err);

    return res.status(201).json("User created successfully!");
  });
}

export function updateUser(req, res) {
  const query =
    "UPDATE users SET name = ?, email = ?, phone = ?, birth = ? WHERE id = ?";

  const body = req.body;
  const values = [body.name, body.email, body.phone, body.birth];

  db.query(query, [...values, req.params.id], (err) => {
    if (err) return res.status(400).json(err);

    return res.status(200).json("User updated successfully!");
  });
}

export function deleteUser(req, res) {
  const query = "DELETE FROM users WHERE id = ?";

  db.query(query, [req.params.id], (err) => {
    if (err) return res.status(400).json(err);

    return res.status(200).json("User deleted successfully!");
  });
}
