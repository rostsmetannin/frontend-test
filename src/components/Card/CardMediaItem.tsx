import * as React from "react"
import { FC } from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardMedia from "@mui/material/CardMedia"
import { CheckBoxCard } from "./CheckBoxCard/CheckBoxCard"
import BgCard from "./assets/CardMedia.svg"
import styled from "styled-components"

const CardCustom = styled(Card)<{ checked: boolean }>`
  max-width: 229px;
  &.MuiCard-root {
    box-shadow: ${({ checked }) => (checked ? "0px 0px 0px 2px #65e9d9" : "none")};
    border-radius: 10px;
    background: #ffffff;
    :hover {
      box-shadow: 0px 0px 0px 2px #65e9d9;
    }
  }
`
interface CardMediaProps {
  label: string
  checked: boolean
  setChecked: (value: boolean) => void
}
export const CardMediaItem: FC<CardMediaProps> = ({ label, checked, setChecked }) => {
  return (
    <CardCustom checked={checked}>
      <CardMedia component="img" alt="green iguana" height="100" image={BgCard} />
      <CardActions>
        <CheckBoxCard checked={checked} setChecked={setChecked} label={label} />
      </CardActions>
    </CardCustom>
  )
}
