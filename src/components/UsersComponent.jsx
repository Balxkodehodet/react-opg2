import { useState } from "react";
export default function UsersComponent() {
  const mockData = [
    { username: "Ola Normann", email: "ola.normann@norge.no" },
    { username: "Torleif", email: "torleif@kodehode.no" },
    { username: "Jan Egil", email: "jan.egil@kodehode.no" },
    { username: "Sander", email: "sander@kodehode.no" },
  ];

  function onSubmitUser() {
    const newUser = { username: username, email: email };
    setUserState([...userState, newUser]);
    console.log(`New user added: ${username}, ${email}`);
    setUserName("");
    setEmail("");
  }
  const [userState, setUserState] = useState(mockData);
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <>
      {userState.map((user, index) => (
        <div key={index} className="user">
          <h2>{user.username}</h2>
          <p>{user.email}</p>
        </div>
      ))}
      <h3>Add new user</h3>
      <form id="userForm">
        <label htmlFor="username">Enter username: </label>
        <input
          id="username"
          type="text"
          placeholder="username..."
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <label htmlFor="email">Enter email: </label>
        <input
          id="email"
          type="email"
          placeholder="email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </form>
      <button onClick={() => onSubmitUser()}>Submit</button>
    </>
  );
}
