import React from 'react';
import '../styles/ChatHeader.css';
import IconButton from '@mui/material/IconButton';
import MinimizeIcon from '@mui/icons-material/Remove'; // Icono de minimizar
import FullscreenIcon from '@mui/icons-material/Fullscreen'; // Icono de maximizar
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit'; // Icono de restaurar tamaño
import CloseIcon from '@mui/icons-material/Close'; // Icono de cerrar


const ChatHeader = ({ toggleOpen, toggleMaximize, closeChat, isMaximized }) => {
    return (
        <div className="chat-header">
            <h3>CIBIA</h3>
            <div className="chat-controls">
                <IconButton onClick={toggleOpen}>
                    <MinimizeIcon />
                </IconButton>
                <IconButton onClick={toggleMaximize}>
                    {isMaximized ? <FullscreenExitIcon /> : <FullscreenIcon />}
                </IconButton>
                <IconButton onClick={closeChat}>
                    <CloseIcon />
                </IconButton>
            </div>
        </div>
    );
};

export default ChatHeader;
