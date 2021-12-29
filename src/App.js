import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import * as s from "./styles/globalStyles";
import styled from "styled-components";
import { create } from "ipfs-http-client";


export const Button = styled.button`
  padding: 8px;
  background-color: #47E5F1;
  &:hover{background-color:#7726D4;}
`;

const StyledButton = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;




function App() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [feedback,setfeedback] = useState("Maybe its your lucky day!");
  const [claimingNft,setClaimingNft] = useState(false);

  const claimNFTs=(_amount)=>{
    setClaimingNft(true);
    blockchain.smartContract.methods.mint(_amount).send({
      from : blockchain.account,
      value:blockchain.web3.utils.toWei(String(0.02*_amount),"ether"),
    }).once("error",(err)=>{
      console.log(err);
      setfeedback("Error");
      setClaimingNft(false);
    }).then((receipt) => {
      setfeedback("Success");
      setClaimingNft(false);
    });
  };

  useEffect(() => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  }, [blockchain.smartContract, dispatch]);

  return (
    <s.Screen  jc={"center"}  ai={"center"} style={{ padding: 24 ,backgroundColor:"#7726D4"}}>
      {blockchain.account === "" || blockchain.smartContract === null ? (
        <s.Container flex={1}
         ai={"center"}
         jc={"center"}
         
         style={{ padding: 50 ,backgroundImage:"url(/legends.JPG)"}}>
          <s.TextTitle>Connect to the Blockchain</s.TextTitle>
          <s.SpacerSmall />
          <StyledButton
            onClick={(e) => {
              e.preventDefault();
              dispatch(connect());
            }}
          >
            CONNECT
          </StyledButton>
          <s.SpacerSmall />
          {blockchain.errorMsg !== "" ? (
            <s.TextDescription>{blockchain.errorMsg}</s.TextDescription>
          ) : null}
        </s.Container>
      ) : (
        <s.Container flex={1}
        ai={"center"}
        jc={"end"}
         style={{ padding: 24 ,backgroundImage:"url(/sale.JPG)"}}>
          <s.TextTitle style={{ textAlign: "center" }}>
            Get your legends now!
          </s.TextTitle>
        <s.Container1    
         style={{ padding: 24}}>
          <s.SpacerSmall />
          <StyledButton
          disabled={claimingNft ? 1 :0}
            onClick={(e) => {
              e.preventDefault();
              claimNFTs(4);
            }}
          >
            GET 4 NFT
            
          </StyledButton>
          <StyledButton
          disabled={claimingNft ? 1 :0}
            onClick={(e) => {
              e.preventDefault();
              claimNFTs(8);
            }}
          >
            GET 8 NFT
            
          </StyledButton>
          <StyledButton
          disabled={claimingNft ? 1 :0}
            onClick={(e) => {
              e.preventDefault();
              claimNFTs(8);
            }}
          >
            GET 12 NFT
            
          </StyledButton>
          <s.SpacerSmall />
        </s.Container1>
        </s.Container>
        
      )}
    </s.Screen>
  );
}

export default App;
