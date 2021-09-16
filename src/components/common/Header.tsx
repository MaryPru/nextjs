import {Box, Button, Link, Modal, Typography} from "@mui/material";
import images from '../../helpers/images'
import React, {useEffect, useState} from "react";
import SignInModal from "./SignInModal";

// Компонент заголовка сайта
const Header = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const [changeColor, setChangeColor] = useState<boolean>(false)

    useEffect(() => {
        if (!process.browser) {
            return
        }
        window && window.addEventListener('scroll', () => {
            console.log('window',window)
            console.log('pageYOffset',window.pageYOffset)
            if (window.pageYOffset > 1) {
                setChangeColor(true)
            } else {
                setChangeColor(false)
            }
        })

        return () => window.removeEventListener('scroll', () => {
            if (window.pageYOffset > 1) {
                setChangeColor(true)
            } else {
                setChangeColor(false)
            }
        })
    }, []);

    return (
        <div className={`wrapper__header ${changeColor ? 'moreBlack' : ''}`}>
            <header className={'header'}>
                <div className={'leftBlock'}>
                    <img src={images.logo}/>
                    <Link
                        sx={{
                            textDecoration: "none"
                        }}
                        color={"#FFF"}
                        href={"/"}>
                        Главная
                    </Link>
                    <Link
                        sx={{
                            textDecoration: "none"
                        }}
                        color={"#FFF"}
                        href={"/blog"}>
                        Блог
                    </Link>
                    <Link
                        sx={{
                            textDecoration: "none"
                        }}
                        color={"#FFF"}
                        href={"/rating"}>
                        Рейтинг
                    </Link>
                </div>
                <div className="rightBlock">
                    <Button classes={{root: 'rightBlock__button'}}>Pro</Button>
                    <Button>En</Button>
                    <Button classes={{root: 'rightBlock__button'}}>Войти</Button>
                    <Button
                        classes={{root: 'rightBlock__button'}}
                        variant={"outlined"}
                        color={"secondary"}
                        onClick={() => setIsOpen(true)}
                    >
                        Зарегистрироваться
                    </Button>
                </div>
            </header>
            <SignInModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
        </div>
    )
}

export default Header