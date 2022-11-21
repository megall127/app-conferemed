import React, { useEffect, useState } from "react";
import { Modal, Text, View } from "react-native";
import MaskInput, { Masks } from "react-native-mask-input";
import {  ButtonExitsModal, ButtonExitsText, ModalGrafics } from "../styled";
import PieChart from 'react-native-pie-chart';
import DropShadow from "react-native-drop-shadow";
import CurrencyInput from "react-native-currency-input";



const ModalTicket = ({openModal3,setOpenModal3,next30DaysProc, left15DaysProc, total}) => {
    const [value, setValue] = useState('')
    const [arrayTotal, setArrayTotal] = useState([])

  
    return(
        <>
        <Modal
        animationType="fade"
        transparent={true}
        visible={openModal3}
        >
        <DropShadow
                  style={{
                    width: "100%",
                    height: '80%',
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
          <ModalGrafics style={{marginTop: "50%"}}>
            <ButtonExitsModal onPress={()=> setOpenModal3(false)}>
                <ButtonExitsText>X</ButtonExitsText>
            </ButtonExitsModal>
          <View style={{ height: 2, width: "100%", backgroundColor: "#c4c4c4", marginTop: 30}}></View>
          <Text style={{color: "black", marginLeft: 20, marginTop: 30}}>Ticket Médio</Text>
          <CurrencyInput
                      value={(parseFloat(total) / (next30DaysProc() + left15DaysProc())).toFixed(2)}
                      style={{fontSize: 14, color: "#c4c4c4", marginTop: -10, marginLeft: 15}}
                      prefix="R$"
                      delimiter="."
                      separator=","
                      precision={2}
                    />
          <Text style={{color: "black", marginLeft: 20, marginTop: 10}}>Valor total faturado</Text>
          <CurrencyInput
                      value={total}
                      style={{fontSize: 14, color: "#c4c4c4", marginTop: -10, marginLeft: 15}}
                      prefix="R$"
                      delimiter="."
                      separator=","
                      precision={2}
                    />
          <Text style={{color: "black", marginLeft: 20, marginTop: 10}}>Total de atendimentos mensal</Text>
          <Text style={{color: "black", marginLeft: 20, marginTop: 10}}>{next30DaysProc() + left15DaysProc()}</Text>
          </ModalGrafics>
          </DropShadow>
        </Modal>
        </>
    )
}

export default ModalTicket;