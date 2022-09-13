// JSX: JavaScript + XML (HTML)`

//Componentes / Propriedades

// interface ButtonProps {
//   title: string;
// }

// function Button(props: ButtonProps) {
//   return <button>{props.title}</button>;
// }

import "./styles/main.css";
import logo from "./assets/logo-nlw-esports.svg";

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logo} alt="" />

      <h1 className="text-6xl text-white font-black m-20">
        Seu{" "}
        <span className="bg-nlw-gradient bg-clip-text text-transparent">
          duo
        </span>{" "}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="">
          <img src="/game1.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 "></div>
        </a>
        <a href="">
          <img src="/game2.png" alt="" />
        </a>
        <a href="">
          <img src="/game3.png" alt="" />
        </a>
        <a href="">
          <img src="/game4.png" alt="" />
        </a>
        <a href="">
          <img src="/game5.png" alt="" />
        </a>
        <a href="">
          <img src="/game6.png" alt="" />
        </a>
      </div>
    </div>
  );
}

export default App;
