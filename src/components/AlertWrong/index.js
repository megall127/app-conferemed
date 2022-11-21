import React from "react";
import styled from "styled-components/native";
import x from "../../assets/icons/iconx.png"

const ViewBody = styled.View`
    position: absolute;
    top: 0;
    width: 100%;
    height: 70px;
    background-color: rgba(235, 38, 38, 0.8);
    z-index: 2;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`

const TextAlert = styled.Text`
    color: white;
    font-size: 16px;
`

const IconX = styled.Image`
    height:30px;
    width:30px;
    margin-right: 10px;
`

const AlertWrong = ({text}) => {

    return(
        <ViewBody>
            <IconX source={x}/>
            <TextAlert>{text}</TextAlert>
        </ViewBody>
    )
}

export default AlertWrong;