import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {
  HouseContainer,
  HouseContent,
  HouseItems,
  HouseH1,
  HouseP,
  HouseBtn
} from './HousesElements';

const House = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HouseContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HouseContent>
        <HouseItems>
          <HouseH1>Places to stay</HouseH1>
          <HouseP>live a new experience</HouseP>
          <HouseBtn>reserve</HouseBtn>
        </HouseItems>
      </HouseContent>
    </HouseContainer> 
  );
};

export default House;
