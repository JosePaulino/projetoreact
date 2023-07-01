const AnotherComponent = () => {

  const handleClick = () => {
    console.log("Clicou no botão")
  }

  return(
    <div>
      <p>Segundo componete</p>
      <button onClick={handleClick}>Evento de click</button>
    </div>
  );
};

export default AnotherComponent;