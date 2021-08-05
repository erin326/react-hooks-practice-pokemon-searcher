import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm() {

 const [formData, setFormData] = useState({

    name: '',
    hp: 0,
    sprites: {
      front: '',
      back: ''
    }
 })

  function handleSubmit(e) {
    e.preventDefault();
    
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(resp => resp.json())
    .then(data => {
      // return addPokemon(data);
      console.log(data)
     
    } )

  }
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={
          handleSubmit
        }
      >
        <Form.Group widths="equal">
          <Form.Input value={formData.name} onChange={e => setFormData({...formData, [e.target.name] : e.target.value})} fluid label="Name" placeholder="Name" name="name" />
          <Form.Input value={formData.hp} onChange={e => setFormData({...formData, [e.target.name] : e.target.value})} fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input value={formData.sprites.front} onChange={e => setFormData({...formData, [e.target.name] : e.target.value})} 
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input value={formData.sprites.back} onChange={e => setFormData({...formData, [e.target.name] : e.target.value})}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button >Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
