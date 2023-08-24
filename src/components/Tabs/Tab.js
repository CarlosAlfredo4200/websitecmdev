 
const Tab = ({handleIndex, index,  titulo} ) => {

 

  return (
    <div>
      <div className="comp-titulo-tabs">
        <div className={ 'titulo-tabs'} onClick={() => handleIndex(index)}>
          {" "}
          {titulo}
        </div>
      </div>

     

    </div>
  );
};

export default Tab;
