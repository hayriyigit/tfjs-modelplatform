export default function App() {
  return (
    <div>
      <h1>Hello React!</h1>
      <p>{process.env.ENV_VARIABLE}</p>
    </div>
  );
}
