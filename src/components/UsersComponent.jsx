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
      <input
        type="text"
        placeholder="username..."
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="email"
        placeholder="email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={() => onSubmitUser()}>Submit</button>
    </>
  );
}
