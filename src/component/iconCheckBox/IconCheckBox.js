import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import Tooltip from '@mui/material/Tooltip';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import GradeIcon from '@mui/icons-material/Grade';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function IconCheckBox() {
  return (
    <>
      <Checkbox {...label} icon={ <Tooltip title="Mark as important" placement="bottom"><GradeOutlinedIcon /></Tooltip>} checkedIcon={<Tooltip title="Remove importance" placement="bottom"><GradeIcon /></Tooltip>} />
    </>
  );
}