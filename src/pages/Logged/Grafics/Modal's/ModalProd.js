import React from "react";
import DropShadow from "react-native-drop-shadow";
import styled from "styled-components/native";
import Pie from 'react-native-pie';
import close from  '../../../../assets/icons/x.png'

const ModalBody = styled.View`
    height: 80%;
    width: 90%;
    background-color: white;
    align-self: center;
    margin-top: 50px;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
`
const ButtonCloseModal = styled.TouchableOpacity`
    position: absolute;
    top: 10;
    right: 10;

`
const InconCloseButton = styled.Image`
        height: 20px;
        width: 20px;
`


const ModalProd = ({setOpenMenu}) => {




    return(
        <DropShadow
        style={{
          width: "100%",
          zIndex: 1,
          justifyContent: "center",
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.1,
          shadowRadius: 3,
        }}
  >
        <ModalBody>
            <ButtonCloseModal onPress={()=> setOpenMenu(false)}>
                <InconCloseButton source={close}></InconCloseButton>
            </ButtonCloseModal>
        <Pie
              radius={80}
              sections={[
                {
                  percentage: 10,
                  color: '#C70039',
                },
                {
                  percentage: 20,
                  color: '#44CD40',
                },
                {
                  percentage: 30,
                  color: '#404FCD',
                },
                {
                  percentage: 40,
                  color: '#EBD22F',
                },
              ]}
              strokeCap={'butt'}
            />
        </ModalBody>
        </DropShadow>
    )
}

export default ModalProd;