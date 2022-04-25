import "./App.css";
import Content from "./components/content";

const text1 =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, impedit quaerat eius dolorem cum expedita hic, sint facere mollitia dolores eos natus, tempora sequi quibusdam doloribus officiis modi adipisci repudiandae?";
const title1 = "Lorem";
const title2 = "Ipsum";
const text2 =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam cumque voluptatibus nihil cum sed, accusamus ducimus exercitationem adipisci, ea quaerat molestias quia? Atque, quasi nihil optio maiores doloremque facilis ducimus? Quos natus, ipsam, aliquam accusamus aut voluptatum dolorum suscipit architecto iste, ipsa ut labore. Eveniet nemo praesentium quam explicabo, quia laborum debitis, architecto nisi odio libero quod saepe animi deserunt.";
function App() {
  return (
    <div className="fondDePage">
      <div className="feuille">
        <h2>Etape 1</h2>
        <div className="page">
          <Content text={text1} name={title1} />
        </div>
      </div>
      <div className="feuille">
        <h2>Etape 1</h2>
        <div className="page">
          <Content text={text1} name={title1} />
          <Content text={text2} name={title2} />
        </div>
      </div>
    </div>
  );
}

export default App;
