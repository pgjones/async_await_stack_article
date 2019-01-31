import React from 'react';


const Items = function(props) {
  const listItems = props.items.map(
    (item, index) => (<li key={index}>{item}</li>)
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

export default Items;
