import React, { useEffect, useState } from "react";
import { Modal, Text, View } from "react-native";
import MaskInput, { Masks } from "react-native-mask-input";
import {  ButtonExitsModal, ButtonExitsText, ModalGrafics } from "../styled";
import PieChart from 'react-native-pie-chart';
import DropShadow from "react-native-drop-shadow";


const ModalComp = ({clinicAll, openModal1,setOpenModal1, left45DaysProc}) => {
    const [serie, setSerie] = useState([])
    const [color, setColor] = useState([])
    const [stat, setStat] = useState(null)


    const widthAndHeight = 150
    const series = serie
    const sliceColor = color

    const allClinic = () => {
        let array = []
        let colorArray = []
        left45DaysProc()?.map((itens) => {
            array.push(parseFloat(itens.total))
            colorArray.push(itens.color)
            console.log()
        })
        setSerie(array)
        setColor(colorArray)
    }

    useEffect(() => {
        allClinic()
    },[clinicAll])


    const totalCount = () => {
      let total = 0
      
      for(let i = 0; i < serie.length; i++) {
        total += serie[i];
    }
        return total
    }


    return(
        <Modal
        animationType="fade"
        transparent={true}
        visible={openModal1}
        >
        <DropShadow
                  style={{
                    width: "100%",
                    height: '100%',
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
          <ModalGrafics>
            <ButtonExitsModal onPress={()=> setOpenModal1(false)}>
                <ButtonExitsText>X</ButtonExitsText>
            </ButtonExitsModal>
            <Text style={{color: "black", marginLeft: 20, marginTop: 30}}>Grafico</Text>
          <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
            style={{alignSelf: "center", marginTop: 30}}
          />
          <View style={{ height: 2, width: "100%", backgroundColor: "#c4c4c4", marginTop: 30}}></View>
          <Text style={{color: "black", marginLeft: 20, marginTop: 30}}>Clinicas</Text>
          {left45DaysProc() ? <Text style={{color: "black", marginLeft: 20, marginTop: 30}}>Nenhum dado cadastrado</Text> : 
                      left45DaysProc()?.map((itens) => {
                        return(
                          <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Text style={{marginLeft:10, color: itens.color, width: "50%", height: 40}}>{itens.name}</Text>
                <Text style={{marginLeft:10, color: "black", width: "50%", height: 40}}>{(itens.total / totalCount()).toFixed(2) * 100}%</Text>
  
                        </View>
                        )
                      })
          }
          </ModalGrafics>
          
          </DropShadow>
        </Modal>
    )
}

export default ModalComp;