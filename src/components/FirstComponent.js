import AnotherComponent from "./AnotherComponent";

function FirstComponent(){
  // Algum comentário
  /* Comentário */
  const name = "Junior";

  return (
<div className="firstcomponent">
  <p>Primeiro Componente</p>
  {2 + 2}
  <p>Nome: {name}</p>
  <AnotherComponent />
</div>
  );
}

export default FirstComponent;