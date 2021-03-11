import EditCocktail from "../../../components/EditCocktail";

export default function editCocktail({query: {id}}) {
  return(
    <div>
      <EditCocktail id={id}/>
    </div>
  )
}