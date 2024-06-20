import { useState } from "react";

function DetailsWrapper(DetailsComponent) {
  function NewComponent(props) {
    const [likes, setLikes] = useState(0);

    const increaseLikes = () => {
      setLikes(likes + 1);
    };

    return (
      <DetailsComponent
        pokemon={props.pokemon}
        likes={likes}
        increaseLikes={increaseLikes}
      ></DetailsComponent>
    );
  };

  return NewComponent;
}

export default DetailsWrapper;
