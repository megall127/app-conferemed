import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useState } from "react";
import api from "../Service/api";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {

    //Dados dos Registros
    const [registerInfos, setRegisterInfos] = useState({
        email: '',
        password:'',
        name: '',
        tell: '',
        crm: null,
        cidade: null,
        cpf: '',
        especialit: null,
        aux: null
    })
    const [alertSucessState, setAlertSucessState] = useState(false)
    const [alertSucessStateHome, setAlertSucessStateHome] = useState(false)
    const [userInfos, setUsersInfos] = useState({})
    const [globalAllClinic, setGlobalAllClinic] = useState([])
    const [globalAllConv, setGlobalAllConv] = useState([])
    const [openMenu, setOpenMenu] = useState(false);
    const [docSelectAll, setDocSelectAll] = useState({proc:[]})
    const [totalAll, setTotalAll] = useState(null)


    const next30DaysProc = () => {
        const today = new Date()
        const DaysInTheFuture = new Date(new Date().setDate(new Date().getDate() + 30));
        const leftDaysAgo = docSelectAll.proc.filter(element => element.date_proc >= today.toISOString().slice(0, 10) && element.date_proc <= DaysInTheFuture.toISOString().slice(0,10) )
      
      
        return leftDaysAgo.length
      }

      const left15DaysProc = () => {
        const today = new Date()
        const day = 86400000
        const daysAgo = new Date(today - (15*day))
        const leftDaysAgo = docSelectAll.proc.filter(element => element.date_proc <= today.toISOString().slice(0, 10) && element.date_proc >= daysAgo.toISOString().slice(0,10))
      
      
      
        return leftDaysAgo.length
      }


      const left45DaysProc = () => {
        const today = new Date()
        const DaysInTheFuture = new Date(new Date().setDate(new Date().getDate() + 30));
        const day = 86400000
        const daysAgo = new Date(today - (15*day))
        const leftDaysAgo = docSelectAll.proc.filter(element => element.date_proc <= DaysInTheFuture.toISOString().slice(0, 10) && element.date_proc >= daysAgo.toISOString().slice(0,10))
      
      
      
        return leftDaysAgo
      }

    const datas = {
        setRegisterInfos,
        registerInfos,

        //ALert
        alertSucessState,
        setAlertSucessState,
        alertSucessStateHome,
        setAlertSucessStateHome,
        setUsersInfos,
        userInfos,
        globalAllClinic,
        setGlobalAllClinic,
        openMenu,
        setOpenMenu,
        globalAllConv,
        setGlobalAllConv,
        docSelectAll,
        setDocSelectAll,
        setTotalAll,
        totalAll,
        next30DaysProc,
        left15DaysProc,
        left45DaysProc
    }


    return(
        <GlobalStateContext.Provider value={datas}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;