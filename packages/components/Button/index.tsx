/*
 * @Author: jiangqm
 * @Date: 2023-09-12 17:09:30
 * @Description: 
 */
import React from "react";
import './index.scss';
type PropsType = {
    children?:React.ReactElement
    danger?:boolean
}
/**
 * 按钮组件
 * @param props 
 * @returns 
 */
const MyButton: React.FC<PropsType> = (props) => {
    return <button className={props.danger?'btn-danger':''}>{props.children}</button>
}
export default MyButton