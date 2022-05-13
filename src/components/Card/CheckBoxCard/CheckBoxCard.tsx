import * as React from "react"
import { FC } from "react"
import styled from "styled-components"
import Checkbox from "@mui/material/Checkbox"
import FormControlLabel from "@mui/material/FormControlLabel"

const CheckBoxCustom = styled(Checkbox)`
  margin: 0;
  padding: 0;
  &.MuiCheckbox-root {
    margin-left: 18.25px;
    .MuiSvgIcon-root {
      width: 13.5px;
      height: 13.5px;
    }
    &.Mui-checked {
      color: #21b6a8;

      :hover {
        box-shadow: 0px 0px 0px 2px #65e9d9;
      }
    }
  }
`
const FormControlLabelCustom = styled(FormControlLabel)`
  &.MuiFormControlLabel-root {
    .MuiFormControlLabel-label {
      font-family: "Plus Jakarta Sans", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 143%;

      letter-spacing: 0.17px;

      color: #1b1b1b;
    }
  }
`

export const CheckBoxCard: FC<{ checked: boolean; label: string; setChecked: (value: boolean) => void }> = ({ checked, label, setChecked }) => {
  return (
    <FormControlLabelCustom control={<CheckBoxCustom checked={checked} onChange={(event) => setChecked(event.target.checked)} />} label={label} />
  )
}
