import {Button, Container, Grid, Paper, Typography} from "@mui/material";
import React from "react";
import BtCoinIcon from "../Icons/BtCoinIcon/BtCoinIcon";
import SecondIcon from "../Icons/Icon/SecondIcon";

// Компонент главной страницы
const HomePage = () => {

    return (
        <Paper className={'home'}>
            <Container>
                <Grid
                    container
                    columnSpacing={12}
                >
                    <Grid
                        item
                        md={6}
                        xs={12}
                    >
                        <div className="home__body">
                            <Typography
                                classes={{root: 'title'}}
                                component={"h1"}
                                variant={"h3"}
                            >
                                Иструмент мониторинга для трейдера, которому доверяют
                            </Typography>
                            <Typography
                                classes={{root: 'subTitle'}}
                                variant={"h5"}
                                paragraph
                            >
                                Создайте портфолио со своими фактическими успехами —
                                повысьте доверие у заинтересованных людей.
                            </Typography>
                            <Button
                                classes={{root: 'button'}}
                                variant="contained"
                            >
                                Начать работу
                            </Button>
                        </div>
                    </Grid>
                    <Grid
                        item
                        md={6}
                    >
                        <div className="home__picture__right">
                            <BtCoinIcon/>
                        </div>
                    </Grid>
                    <Grid
                        item
                        md={6}
                    >
                        <div className="home__picture__left">
                            <SecondIcon/>
                        </div>
                    </Grid>
                    <Grid
                        item
                        md={6}
                    >
                        <div className="home__body">
                            <Typography
                                classes={{root: 'title'}}
                                component={"h1"}
                                variant={"h3"}
                            >
                                Проверенные результаты
                            </Typography>
                            <Typography
                                classes={{root: 'subTitle'}}
                                variant={"h5"}
                                paragraph
                            >
                                Объективные и сухие цифры подойдут не только для мониторинга своих результатов, но и для
                                того, чтобы вызвать доверие у инвесторов или своей публики.
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    )
}

export default HomePage
