import { useMutation, useQuery } from '@apollo/client'
import { gql } from 'graphql-tag'
import useForm from '../lib/useForm'
import {SINGLE_COCKTAIL_QUERY} from './CocktailView'

const UPDATE_COCKTAIL_MUTATION = gql`
  mutation UPDATE_COCKTAIL_MUTATION(
    $id: ID!
    $name: String
    $description: String
  ) {
    updateCocktail(
      id: $id
      data: {name: $name, description: $description, price: $price}
    ) {
      id
      name
      description
      steps
    }
  }
`

export default function EditCocktail({id}) {
  const {data, error, loading} = useQuery(SINGLE_COCKTAIL_QUERY, {variables: { id }})
  const {inputs, handleChange} = useForm(data?.Cocktail);

  const [
    updateCocktail,
    { data: updateData, error: updateError, loading: updateLoading }
  ] = useMutation(UPDATE_COCKTAIL_MUTATION)

  if (loading) return <p>Loading...</p>

  return (
    <div>
      <form
        onSubmit={ async (e) => {
          e.preventDefault();
          await updateCocktail({
            variables: {
              id,
              name: inputs.name,
              description: inputs.description,
              // TODO: add steps update
            }
          })
        }}
      > 
        {/* TODO: add image upload */}
        {(error || updateError) && <p>Error !!!</p>}
        <fieldset disabled={updateLoading || loading}>
          <label htmlFor="name">
            Name
            <input
              id="name"
              name="name"
              value={inputs.name}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="description">
            Description
            <textarea
              id="description"
              name="description"
              value={inputs.description}
              onChange={handleChange}
            />
          </label>
        </fieldset>
        <button type="submit">Save cocktail</button>
      </form>
    </div>
  )
}