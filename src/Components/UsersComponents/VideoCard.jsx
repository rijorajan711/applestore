
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width:'80%',
  bgcolor: 'black',
  boxShadow: 24,
  p:5,
};



  

function VideoCard() {

    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <div className='mt-12 w-full bg-center bg-cover flex flex-col gap-24 justify-center items-center bg-[url("https://www.macworld.com/wp-content/uploads/2023/10/iPhone-15-Pro-colors.jpg?quality=50&strip=all")]  h-[500px]' >
       
         <span className='font-Lobster text-white text-5xl'>Apple Store New Collections </span> 
        <div onClick={handleOpen} className='group bg-red-300 shadow-white shadow-2xl h-[150px] w-[150px] flex justify-center items-center rounded-full hover:bg-white duration-1000'><i class="fa-solid fa-play text-6xl text-white group-hover:text-red-300 duration-1000"></i>
</div>
         <span className='font-Lobster text-white text-2xl'>Explore The world With Us </span> 

      {/* <Button onClick={handleOpen}>Open modal</Button> */}



<Modal
   
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    <iframe width="100%" height="526" src="https://www.youtube.com/embed/xqyUdNxWazA?si=KfWQ70X8ZWyiSftv" title="GANAPATH | Hindi Teaser | Amitabh B, Tiger S, Kriti S ❘ Vikas B, Jackky B | 20th Oct&#39; 23" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
 
     <button onClick={handleClose} className='bg-white w-[50px] h-[50px] mt-4 text-xl rounded-full hover:bg-slate-300 font-thridStyle'>Back</button>
    </Typography>
  </Box>
</Modal>
      
    </div>
  )
}

export default VideoCard



{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/xqyUdNxWazA?si=KfWQ70X8ZWyiSftv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
