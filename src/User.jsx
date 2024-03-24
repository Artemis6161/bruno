import { EditableText, InputGroup, Toaster } from "@blueprintjs/core";
import React, { useEffect, useState } from "react";

const toast = Toaster.create({
  position: "top",
});

function User() {
  const [user, setUser] = useState([]);
  const [newName, setNewName] = useState("");
  const [newWebsite, setNewWebsite] = useState("");
  const [newEmail, setNewEmail] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json()) // You need to return the parsed JSON data here
      .then((data) => {
        setUser(data);
      });
  }, []);
  function addUser() {
    const name = newName.trim();
    const email = newEmail.trim();
    const web = newWebsite.trim();
    if (name && email && web) {
      fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify({ name, email, website: web }),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json()) // POST
        .then((data) => {
          setUser([...user, data]);
          toast.show({
            message: "User Added Success..!",
            intent: "success",
            timeout: "3000",
          });
          setNewEmail("");
          setNewName("");
          setNewWebsite("");
        });
    }
  }
  function changeHandler(id, key, value) {
    setUser((users) => {
      return users.map((item) => {
        return item.id === id ? { ...item, [key]: value } : item;
      });
    });
  }
  function updateUser(id) {
    const userData = user.find((data) => data.id === id);
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "PUT",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json()) // POST
      .then((data) => {
        toast.show({
          message: "User Updated Success..!",
          intent: "success",
          timeout: "3000",
        });
      });
  }
  function deleteUser(id) {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json()) // POST
      .then((data) => {
        setUser((prev) => {
          return prev.filter((eachData) => eachData.id != id);
        });
        toast.show({
          message: "User Deleted Success..!",
          intent: "success",
          timeout: "3000",
        });
      });
  }
  return (
    <>
      <table className="bp4-html-table modifier ">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>WEBSITE</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                <EditableText
                  value={item.email}
                  onChange={(value) => changeHandler(item.id, "email", value)}
                />
              </td>
              <td>
                <EditableText
                  value={item.website}
                  onChange={(value) => changeHandler(item.id, "website", value)}
                />
              </td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => updateUser(item.id)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteUser(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>
              <InputGroup
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Enter new Name"
              />
            </td>
            <td>
              <InputGroup
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                placeholder="Enter new Email"
              />
            </td>
            <td>
              <InputGroup
                value={newWebsite}
                onChange={(e) => setNewWebsite(e.target.value)}
                placeholder="Enter New Website"
              />
            </td>
            <td>
              <button className="btn btn-success" onClick={addUser}>
                Add User
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}

export default User;
