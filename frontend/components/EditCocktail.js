import { useMutation, useQuery } from '@apollo/client'
import { gql } from 'graphql-tag'
import styled from 'styled-components'
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

const EditCocktailStyles = styled.form`
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  background: rgba(0, 0, 0, 0.02);
  border: 5px solid white;
  padding: 20px;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  label {
    display: block;
    margin-bottom: 1rem;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid black;
    &:focus {
      outline: 0;
      border-color: var(--red);
    }
  }

  button,
  input[type='submit'] {
    width: auto;
    background: red;
    color: white;
    border: 0;
    font-size: 2rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
  }

    width: 100%;
    max-width: 100%;
    min-height: 40rem;

    fieldset {
      height: 35rem;
      border: none;

      &[disabled] {
        opacity: 0.5;
      }

      display: grid;
      grid-template-columns: 1.5fr 2fr;
      grid-template-rows: 4rem 2rem auto 1fr;
      grid-template-areas:
      "img name"
      "img description"
      "img steps";
      grid-column-gap: 2rem;
    }

  .cocktail-image {
    grid-area: img;
    width: 100%;
    height: 100%;

    background-image: ${(props) => `url(${props.img})`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .cocktail-name {
    grid-area: name;
    align-self: start;
    margin: 0;
  }

  .cocktail-description {
    margin-top: 1rem;
    grid-area: description;

    textarea {
      display: block;
    }
  }

  .cocktail-steps {
    margin-top: 1rem;
    grid-area: steps;

    ol {
      margin: 0;
      padding-top: 0;
      padding-left: 1.6rem;
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
    <EditCocktailStyles
      className="cocktail-section"
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
          <div className="cocktail-image">IMAGE upload</div>
          <label htmlFor="name" className="cocktail-name">
            Name
            <input
              id="name"
              name="name"
              value={inputs.name}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="description" className="cocktail-description">
            Description
            <textarea
              id="description"
              name="description"
              value={inputs.description}
              onChange={handleChange}
            />
          </label>
          {/* <label htmlFor="cocktail-steps">
            <input type="text"/>
          </label> */}
        </fieldset>
        <button type="submit">Save cocktail</button>
    </EditCocktailStyles>
  )
}