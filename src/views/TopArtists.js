import React, { Component } from 'react';
import styled from 'styled-components';
import ListTemplate from "templates/ListTemplate";
import hero from 'assets/hero_images/hero1.png';

const TopArtists = () =>(
  <ListTemplate image={hero} header="Top Artists"/>
);

export default TopArtists;
