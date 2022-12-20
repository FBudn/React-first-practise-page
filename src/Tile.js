import TileDiv from "./TileSectionDiv";

const Tile = () => {
  return (
    <div className="flex flex-col w-4/5  align-center justify-start items-center bg-white rounded-lg py-8 px-2 max-w-sm  ">
      <TileDiv />
    </div>
  );
};

export default Tile;

/* sfc na początku
jak zrobić on-click:

funkcja do jego obsługi nad "return" w komponencie 
function handleClick() {
  console.log(`siema`)
}

<div>
<button onClick={handleClick}> </button>  <-- tu nie handleClick() bo działałoby bez klieknięcia od razu. Chcemy tylko referencje
 jeśli chodzi o przekazywanie argumentów to handleClick(`siema2`) tez nie z tego samego powodu. Trzeba wrap w 1 funkcję drugą czyli:

 handleClickArgument = (message) => {
  console.log(`elo` + message)
 }

 <button onClick = {
  () => {
    handleClickArgument(`teraz ta wiadomość`)
  }
 }> </button>  

 Jeszcze eventy. Możemy przekazać event parameter do ktorego automatycznie mamy dostep w funkcjach kiedy event wystąpi
 onClick={handleClick} - tu automatycznie przyjmuje jako 1 parametr event object. Więc można zrobić tak:
 
 function handleClick(e) {
  console.log(`siema`, e)
}
handleClickArgument = (message, e ) => {
  console.log(`elo` + message + e.name)
 }

 <button onClick={handleClick}> </button>

  <button onClick = {(e) =>   handleClickArgument(`teraz ta wiadomość`, e)}> </button> 

</div>

tworzenie zmiennej, ktorej zmiana wartosci bedzie widoczna w przegladarce

import {useState} from 'react'; <-- na gorze komponentu
i np. 
const [name, setName] = useState(`mario`)  <- 1 element tabeli to `mario`. Moze to byc tabela,obiekt,boolean, number, nie ma znaczenia

i teraz mozemy z domyslnego mario za pomoca setName zmieniac -? setName(`luigi`) np na onClicku jak wyzej. 

*/
