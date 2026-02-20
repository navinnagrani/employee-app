import { useState } from "react";
import { addEmployee } from "../services/api";

function AddEmployee({ refresh }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Sending:", { name, email });
    await addEmployee({ name, email });
    setName("");
    setEmail("");
    refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Employee</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddEmployee;