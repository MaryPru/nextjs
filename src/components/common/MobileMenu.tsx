import React, {useState} from "react";
import {Button, Link} from "@mui/material";
import SignInModal from "./SignInModal";
import {Squash as Hamburger} from 'hamburger-react'

interface MobileMenuProps {
    isOpenMenu: boolean,
    setOpenMenu: (value: boolean) => void
}

// Компонент мобильного меню
const MobileMenu = (props: MobileMenuProps) => {

    const {isOpenMenu, setOpenMenu} = props

    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <div className={'mobile'}>
            <header className={`mobile__body ${isOpenMenu ? 'IsOpen' : 'IsClose'}`}>
                <Hamburger
                    toggled={isOpenMenu}
                    onToggle={() => setOpenMenu(!isOpenMenu)}
                />
                <div className={'leftBlock'}>
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
                <div className="line"/>
                <div className="rightBlock">
                    <Button classes={{root: 'rightBlock__button'}}>Pro</Button>
                    <Button classes={{root: 'rightBlock__button'}}>En</Button>
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

export default MobileMenu