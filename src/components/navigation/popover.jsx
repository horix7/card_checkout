import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { IconContext } from 'react-icons/lib'
import { IoIosArrowForward } from "react-icons/io";
import { BsFillQuestionCircleFill } from "react-icons/bs";


export default function PopoverPopupState(props) {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Button className="hiddenBtn" {...bindTrigger(popupState)}>
            <IconContext.Provider value={{className:"questionMark"}}>
             <BsFillQuestionCircleFill />
              </IconContext.Provider>

          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Box p={2}>
             {props.children}
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
