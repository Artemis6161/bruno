import { useState } from "react";

function MyForm() {
  const [user, setUser] = useState({});
  function handleSubmit(e) {
    e.preventDefault();
    console.log(user);
  }
  function handleChange(e) {
    const userName = e.target.name;

    setUser((prev) => {
      return { ...prev, [userName]: e.target.value };
    });
  }
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <br />
        <input type="text" name="name" onChange={handleChange} />
        <br />
        <br />
        <label htmlFor="lastName">SureName</label>
        <br />
        <input type="text" name="Last" onChange={handleChange} />
        <br />
        <br />
        <label htmlFor="country">Select Country</label>
        <select name="country" id="" onChange={handleChange}>
          <option value="india">INDIA</option>
          <option value="usa">USA</option>
          <option value="uk">UK</option>
        </select>
        <input type="submit" value="Submit Form" />
      </form>
    </>
  );
}

export default MyForm;
