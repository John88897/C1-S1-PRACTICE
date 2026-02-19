import { VINLAND_SAGA } from "./data";
import { Character } from "./components/Character";
function App() {
  return <>{
    /* Your code  here */
    <>
    <header>
      <h1>Vinland Saga</h1>
    </header>

    <main>
      {VINLAND_SAGA.map(p =>(
        <Character image={p.image} name= {p.name} status={p.status}
        occupation={p.occupation}  />
      ))}
    </main>
    </>
    }</>;
}

export default App;
