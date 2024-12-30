function AppContent() {
  const [username, setUsername] = React.useState("");
  const [password, SetPassword] = React.useState("");

  const handleSubmit = (event) => {
    // 阻止事件触发后的刷新
    event.preventDefault();

    alert(`Username: ${username}`);
    alert(`Password: ${password}`);
  };

  return (
    <main>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

        <input
          className="input"
          type="password"
          value={password}
          onChange={(event) => SetPassword(event.target.value)}
        />

        <br />
        <button type="submit">Login</button>
      </form>
    </main>
  );
}

const appEl = document.querySelector("#app");
const root = ReactDOM.createRoot(appEl);

root.render(<AppContent />);
