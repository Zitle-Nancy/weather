import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Clouds from "vanta/dist/vanta.clouds.min";
import * as THREE from "three";

const WelcomeScreen = ({ children }) => {
  const myRefDiv = useRef(null);
  const [vanta, setVanta] = useState(0);

  useEffect(() => {
    if (!vanta) {
      setVanta(
        Clouds({
          THREE,
          el: myRefDiv.current,
        })
      );
    }

    /*
     Este return desmonta nuestro componente y en este caso
     será cuando salgamos de la pantalla, para ello creamos este return
     y le agregamos la función de destroy pero primero validamos
     que vanta exista :)
    */
    return () => {
      if (vanta) {
        vanta.destroy();
      }
    };
  }, [vanta]);

  return <div ref={myRefDiv}>WelcomeScreen</div>;
};

WelcomeScreen.propTypes = {
  children: PropTypes.node,
};

export default WelcomeScreen;
