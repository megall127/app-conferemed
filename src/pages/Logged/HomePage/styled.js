
import { Dimensions} from "react-native";
import styled from "styled-components/native";

const {height , width} = Dimensions.get("window")

export const ViewBody = styled.View`
    background-color: white;
    flex: 1;
`

export const ImageBack = styled.View`
    z-index: 0;
    position: absolute;
    top: 0;
    width: 100%;
    height: 200;
    background-color: #085769;
    border-bottom-left-radius: 40px;
`
export const ImageBackMenu = styled.View`
    width: 100%;
    height: 230px;
    background-color: #085769;
    border-bottom-left-radius: 40px;
`
export const ImageIcon = styled.Image`

`
export const ImageSelfie = styled.Image`
    width: 90%;
    height: 90%;
    border-radius: 80px;
`
export const ImageFlyer = styled.Image`
    width: 90%;
    height: 90%;
    border-radius: 30px;
`
export const BoxInfos = styled.View`
    margin-top: 20px;
    width: 90%;
    height: 300px;
    background-color: white;
    align-self: center;
    z-index: 0;
    border-radius: 30px;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`

export const ButtonMenu = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 50px;
    background-color: white;
    align-self: flex-start;
    border-radius: 50px;
    margin-left: 20px;
    margin-top: 30px;
`
export const ButtonExit = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 50px;
    align-self: flex-start;
    border-radius: 50px;
    margin-left: 20px;
`
export const MenuButtom = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    height: 80px;
    width: 100%;
    background-color: #085769;
    flex-direction: row;
    margin-top: 10px;
    border-radius: 10px;
`
export const ViewHeader = styled.View`
    width: 100%;
`

export const ViewHeaderModal = styled.View`
    width: 100%;
    flex-direction: row;
`

export const ContainerInfosUser = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const ButtonsContainer = styled.ScrollView`
    margin-top: 30px;
    margin-bottom: 20%;
`
export const UserName = styled.Text`
    font-size: 22px;
    color: white;
    margin-left: 30px;
    font-weight: 600;
    width: 200px;
`
export const SubText = styled.Text`
    font-size: 15px;
    color: black;
    margin-left: 30px;
    width: 200px;
`
export const PhotoSelfie = styled.View`
    height: 130px;
    width: 130px;
    background-color: white;
    border-radius: 80px;
    justify-content: center;
    align-items: center;
    margin-right: 20px;

`
export const PesinhosInfos = styled.Text`
    font-size: 20px;
    font-weight: 600;
    color: black;
`

export const SubInfos = styled.Text`
    font-size: 10px;
    font-weight: 600;
    color: #c4c4c4;
`
export const SubInfosSaldo = styled.Text`
    font-size: 15px;
    font-weight: 600;
    color: #c4c4c4;
`

export const ImagePezinho = styled.Image`
    height: 20px;
    width: 10px;
`

export const ViewModal = styled.ScrollView`
    flex: 1;
    background-color: white;
    height: 100%;
`
export const IconButtomMenu = styled.Image`
    align-self: center;
`
export const TextButtonMenu = styled.Text`
    color: white;
`

export const ButtonMoreInfo = styled.TouchableOpacity`
    margin-left: 35px;
    margin-top: 20px;

`
export const ButtonMoreInfoText = styled.Text`
    text-decoration: underline; 
    color: #BA984A;
    font-size: 16px;
`

export const ButtonHome = styled.TouchableOpacity`
    height: 150px;
    width: 150px;
    background-color: #085769;
    border-radius: 10px;
    justify-content: center;
    align-items: center;

`
export const ButtonHomeText = styled.Text`
    color: white;
    font-size: 17px;
`

export const IconLogo = styled.Image`
    height: 74px;
    width: 79px;
    align-self: center;
    margin-left: 30px;
    margin-top: 20px;


`

export const ModalExit = styled.View`
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgba(117, 190, 218, 0.5);
    align-self: center;
    justify-content: center;
    align-items: center;
`

export const ExitCard = styled.View`
    height: 100px;
    width: 60%;
    background-color: white;
    border-radius: 20px;
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;

`

export const ButtonExits = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 40%;
    background-color: #085769;
    border-radius: 10px;
    margin-top: 20px;
`
export const ButtonExitsModal = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    height: 10%;
    width: 20%;
    background-color: #085769;
    border-radius: 10px;
    margin-top: 20px;
    margin-right: 20px;
    align-self: flex-end;
`
export const ButtonExitsText = styled.Text`
    color: white;



`
export const TittleCardExit = styled.Text`
    color: black;
    position: absolute;
    top: 20;


`

export const ModalGrafics = styled.ScrollView`
    width: 80%;
    background-color: white;
    align-self: center;
    border-radius: 20px;
    margin-bottom: 20%;
    margin-top: 20%;
`
export const GraficHand = styled.View`
    height: 100%;
    width: 100%;
    margin-top: 30%;
    margin-left: 20%;
`
export const Bar = styled.View`
    height: 30px;
    justify-content: center;
    align-items: center;
`

