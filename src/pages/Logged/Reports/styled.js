import styled from "styled-components/native";


export const ViewBody = styled.View`
    background-color: white;
    flex: 1;
    align-items: center;
`

export const ImageBack = styled.View`
    z-index: 0;
    position: absolute;
    top: 0;
    width: 100%;
    height: 170px;
    background-color: #085769;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
`

export const InputSearch = styled.View`
    height: 50px;
    width: 80%;
    background-color: #F4F4F4;
    border-radius: 20px;
    margin-top: 50px;
    flex-direction: row;
    align-items: center;
`

export const InputTextSearch = styled.TextInput`
    width: 100px;
    

`
export const InpuIcon = styled.Image`
    height: 25px;
    width: 25px;
    margin-left: 20px;
`
export const BoxAllCards = styled.ScrollView`
    width: 100%;
`
export const CardBox = styled.View`
    height: 100px;
    width: 90%;
    background-color: white;
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    align-self: center;
    justify-content: center;
`
export const TextCardBox = styled.Text`
    margin-left: 20px;
    color: black;
    font-weight: 600;
    font-size: 17px;

`
export const TextCardBoxProc = styled.Text`
    margin-left: 20px;
    color: #c4c4c4;
    height: 20px;
    font-weight: 600;
    font-size: 14px;

`

export const BallCheck = styled.View`
    height: 13px;
    width: 13px;
    background-color: red;
    border-radius: 20px;
    margin-left: 20px;
`

export const TextCheck = styled.Text`
    margin-left: 5px;
    

`