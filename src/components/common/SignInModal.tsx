import {Box, Button, Modal, Typography} from "@mui/material";
import React, {useState} from "react";
import images from "../../helpers/images"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export interface SignInModalProps {
    setIsOpen: (value: boolean) => void
    isOpen: boolean
}

// Компонент модального окна авторизации
const SignInModal = (props:SignInModalProps) => {

    const {isOpen, setIsOpen} = props

    return (
        <Modal
            open={isOpen}
            onClose={setIsOpen}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box>
                <div className="modal">
                    <img
                        className="close"
                        src={images.x}
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="modal__titleBody">
                        <Typography
                            classes={{root: 'title'}}
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                        >
                            Добро Пожаловать
                        </Typography>
                    </div>
                    <div className="modal__descriptionBody">
                        <Typography
                            classes={{root: 'description'}}
                            id="modal-modal-description"
                            sx={{mt: 2}}
                        >
                            Зарегистрируйтесь в системе Equite.io, чтобы перейти к Equite.
                        </Typography>
                        <input
                            placeholder={"Адрес электронной почты"}
                            type="text"
                        />
                        <div className="password">
                            <input
                                placeholder={"Пароль"}
                                type="text"
                            />
                            <img src={images.icon}/>
                        </div>
                        <Button
                            variant="contained"
                            classes={{root: 'button__continue'}}
                        >
                            Продолжить
                        </Button>
                        <div className="description__subtitle">или</div>
                        <div className="button">
                            <Button
                                variant={"outlined"}
                                classes={{root: "button__continueWithGoogle"}}
                            >
                                <img src={images.google}/>
                                Продолжить с Google
                            </Button>
                        </div>
                        <div className="line"/>
                        <div className="question">
                            Уже есть учетная запись?
                            <a> Вход в систему </a>
                        </div>
                    </div>
                </div>
            </Box>
        </Modal>
    )
}

export default SignInModal



