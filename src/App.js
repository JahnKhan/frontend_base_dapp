import React, { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import styled from "styled-components";
import { create } from "ipfs-http-client";
import Header from './components/Header';
import Section from './components/Section'
import CollectionCard from "./components/CollectionCard";
import axios from 'axios'
import LegendList from "./components/LegendList";
import Footer from "./components/Footer";
import first from './components/assets/header/first.gif'
import second from './components/assets/header/second.gif'
import legend from './components/assets/header/legend.gif'
//yarn install axios
function App() {  
var list =[{id:20000, name:"APE", traits:[{value:0.06}],image_original_url:first},
{id:20, name:"SHIBA", traits:[{value:0.1}],image_original_url:second},
{id:20, name:"KITTIE", traits:[{value:0.12}],image_original_url:legend}]

  return (
  <div className="app">
  <Header/>
  <Section/>
  <LegendList legendListData={list} />
  
  <Footer/>
  
  </div>
  );
}

export default App;
