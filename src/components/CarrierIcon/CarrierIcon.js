import React from 'react'
import { FaDhl } from "react-icons/fa6";
import { SiDpd } from "react-icons/si";
import { FiAlertTriangle } from "react-icons/fi";


const carrierIcons = {
    'DHL': FaDhl,
    'Dpd': SiDpd,
    'ITALY': FiAlertTriangle,
    'UPC': FiAlertTriangle,
}

const CarrierIcon = ({carrier}) => {
    const Icon = carrierIcons[carrier];
  return (
    Icon ? <Icon className="text-2xl text-blue" /> : null
  )
}

export default CarrierIcon