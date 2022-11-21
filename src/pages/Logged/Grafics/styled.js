import styled from "styled-components/native";



export const ViewBody = styled.ScrollView`
    flex: 1;
    background-color: white;
`

export const ImageBackMenu = styled.View`
    width: 100%;
    height: 150px;
    background-color: #085769;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
`

export const ViewHeader = styled.View`
    width: 100%;
    flex-direction: row;
`

export const ContainerInfosUser = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const UserName = styled.Text`
    font-size: 30px;
    color: white;
    margin-left: 30px;
    font-weight: 600;
    width: 180px;
`

export const IconLogo = styled.Image`
    height: 54px;
    width: 59px;
    align-self: center;
    margin-left: 30px;
    margin-bottom: 20px;


`

export const ButtonsContainer = styled.ScrollView`
    margin-top: 30px;

`

export const MenuButtom = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 100%;
    background-color: #F8F7F7;
    flex-direction: row;
    margin-top: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
`

export const IconButtomMenu = styled.Image`
    align-self: center;
`
export const TextButtonMenu = styled.Text`
    color: black;
`