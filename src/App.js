/* src/App.js */
import React, { useEffect, useState } from "react";
import Amplify, { graphqlOperation } from "aws-amplify";
import { createTodo, deleteTodo } from "./graphql/mutations";
import { listTodos } from "./graphql/queries";
import { withAuthenticator } from "@aws-amplify/ui-react";
import {nanoid} from 'nanoid'

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const newLocationEntry = () => ({id: nanoid(), startTime: "" ,endTime: "" ,name:""})

const App = () => {
  const [locations, setLocations] = useState([
    {id: nanoid(), startTime:"",endTime:"",name:""}
  ])

  return (

    <div>
      {locations.map((location, index) => {
        return (
          <div key={location.id}>
            <button onClick={e => setLocations([...locations, newLocationEntry()])}>Add New Location</button>
            <input onChange={e => setLocations(locations.map(loc => loc.id == location.id ? {...loc, name:e.target.value} : loc))} placeholder="location name" />
            <input onChange={e => setLocations(locations.map(loc => loc.id == location.id ? {...loc, startTime:e.target.value} : loc))} placeholder="add a start time" type="time"/>
            <input onChange={e => setLocations(locations.map(loc => loc.id == location.id ? {...loc, endTime: e.target.value} : loc))} placeholder="add a finish time" type="time"/>
            <button onClick={() => setLocations(locations.filter(e => e.id != location.id))}>Remove Location</button> 
          </div>
        )
      })}
      <pre>
      {JSON.stringify(locations,null, 2)}
      </pre>
    </div>

  );
};

export default withAuthenticator(App);
