import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';

myData = [{
  name: 'Mary',
  age: 24,
  id:1
},
{
  name: 'Ivo',
  age: 30,
  id:2
},
{
  name: 'Ivan',
  age: 33,
  id:3
},
]


export const Info = () => {
  const links = useTracker(() => {
    return myData;
  });


  return (
    <div>
      <ul>{links.map(data => 
      <li key={data.id}>
          {data.name} {data.age}
        </li>
      )}</ul>
    </div>
  );
};
