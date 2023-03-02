import {
  DivHeader,
  DivTitle,
  DivButtons,
  DivSearch,
  MainHeader,
} from "./styles";

export function Home() {
  return (
    <MainHeader>
      <DivHeader>
        <DivTitle>
          <h1>The Blog</h1>
        </DivTitle>
        <DivButtons>
          <button>Home</button>
          <button>Sobre</button>
          <button>Categorias</button>
          <button>Contato</button>
        </DivButtons>

        <DivSearch>
          <input type="text" placeholder="Buscar" />
          <button></button>
        </DivSearch>
      </DivHeader>
    </MainHeader>
  );
}
