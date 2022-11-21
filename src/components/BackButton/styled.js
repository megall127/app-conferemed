import styled from 'styled-components/native';
import { Dimensions} from "react-native";

const {height , width} = Dimensions.get("window")



export const ButtonBody = styled.TouchableOpacity`
    height: 50px;
    width: 50px;
    background-color: white;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    position: relative;
    align-self: flex-start;
    margin-left: 30px;
    margin-bottom: 50;
`
export const ImgButton = styled.Image`
    height: 10px;
    width: 40px;
`
