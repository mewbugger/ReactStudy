function AppContent() {
  const [text, SetText] = React.useState("");
  return (
    <main>
      <input onChange={(event) => SetText(event.target.value)} />
      <p>{text}</p>
    </main>
  );
}

const appEl = document.querySelector("#app");
const root = ReactDOM.createRoot(appEl);

root.render(<AppContent />);
