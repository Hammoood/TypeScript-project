import { Component } from "react"
import { Login } from "./Login"
import {nameType} from './Profile'
type PrivateProps ={
    isLoggedIn: boolean,
    Component: React.ComponentType<nameType>
}
export const Private = ({isLoggedIn,Component}: PrivateProps) => {

            if(isLoggedIn){
                return <Component name="mohammad"/>
            }else return <Login/>

}