import React from 'react'
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import closeicon from '../../images/closeicon.svg'
import './showdialog.css'

interface showDialogProps {
    showDialog: boolean;
    setShowDialog: (e: boolean) => void;
}

function ShowDialog(props: showDialogProps) {
  const handleClose = () => {
    props.setShowDialog(false)
  };
  return (
    <div>
    <Dialog
        fullWidth={true}
        maxWidth="sm"
        open={props.showDialog}
        onClose={handleClose}
      >
        <DialogContent
        style={{height:'500px',backgroundColor:'rgba(19, 22, 26, 1)'}}>
        <div className='dialogHeader'>
            <div className='dialogTitle'>Receive
            <img src={closeicon} alt="closeicon" className='closebtn'></img></div>
        </div>
        </DialogContent>
      </Dialog>
    </div>
    
  )
}

export default ShowDialog