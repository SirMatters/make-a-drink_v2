import CocktailView from '../../components/CocktailView';

export default function CocktailViewPage({query: {id}}) {
  return <CocktailView id={id}/>
}