import React, { useEffect, useState } from "react";
import { Modal, Text, View } from "react-native";
import MaskInput, { Masks } from "react-native-mask-input";
import {  ButtonExitsModal, ButtonExitsText, ModalGrafics } from "../styled";
import PieChart from 'react-native-pie-chart';
import DropShadow from "react-native-drop-shadow";



const ModalConvenio = ({convenioAll, openModal2,setOpenModal2, left45DaysProc}) => {
    const [value, setValue] = useState('')
    const [arrayTotal, setArrayTotal] = useState([])
    const [serie, setSerie] = useState([])
    const [color, setColor] = useState([])
    const [stat, setStat] = useState(null)
    
    const widthAndHeight = 150
    const series = serie
    const sliceColor = color

    const allConvenios = () => {
        let array = []
        let colorArray = []
        left45DaysProc()?.map((itens) => {
            array.push(itens.total)
            colorArray.push(itens.color)
        })
        setSerie(array)
        setColor(colorArray)
    }



    useEffect(() => {
        allConvenios()
    },[convenioAll])



    const totalCount = () => {
      let total = 0
      
      for(let i = 0; i < serie.length; i++) {
        total += serie[i];
    }
        return total
    }

    return(
        <>
        <Modal
        animationType="fade"
        transparent={true}
        visible={openModal2}
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
            <ButtonExitsModal onPress={()=> setOpenModal2(false)}>
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
          <Text style={{color: "black", marginLeft: 20, marginTop: 30}}>Convênios</Text>
          {left45DaysProc() ? <Text style={{color: "black", marginLeft: 20, marginTop: 30}}>Nenhum dado cadastrado</Text> : 
                      left45DaysProc()?.map((itens) => {
                        return(
                          <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Text style={{marginLeft:10, color: itens.color, width: "50%", height: 30}}>{itens.convenio}</Text>
                          <Text style={{marginLeft:10, color: "black", width: "50%", height: 30}}>{((itens.total / totalCount()).toFixed(2) * 100).toFixed(2)}%</Text>
                        </View>
                        )
                      })
          }
          </ModalGrafics>
          </DropShadow>
        </Modal>
        </>
    )
}

export default ModalConvenio;