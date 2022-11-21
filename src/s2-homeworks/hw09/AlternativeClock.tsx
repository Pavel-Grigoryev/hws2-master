import React, {useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import s from './Clock.module.css'
import moment, {Moment} from "moment";
import 'moment/locale/be';

function Clock() {
    const [timerId, setTimerId] = useState<number | undefined>(undefined)
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const unitDate = moment();
    const [date, setDate] = useState<Moment>(unitDate)
    const [show, setShow] = useState<boolean>(false)


    const start = () => {
        stop();
        let newTimerId: number = window.setInterval(() => {  // можно использовать +setInterval для перевода в из string в number
            setDate(moment())
        }, 1000)
        setTimerId(newTimerId);

        // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
        // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)

    }

    const stop = () => {
        clearInterval(timerId);
        setTimerId(undefined);
        // пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)

    }

    const onMouseEnter = () => { // пишут студенты // показать дату если наведена мышка
        setShow(!show);
    }
    const onMouseLeave = () => { // пишут студенты // спрятать дату если мышка не наведена
        setShow(!show);
    }



    const stringTime = date.format('h:mm:ss a'); // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты
    const stringDate = date.format('MM.DD.YYYY'); // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем

    // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
    const stringDay = moment().format('dddd'); // пишут студенты
    const stringMonth = moment().format('MMMM'); // пишут студенты

    return (
        <div className={s.clock}>
            <div
                id={'hw91-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw91-day'}>{stringDay}</span>,{' '}
                <span id={'hw91-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw91-more'}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw91-month'}>{stringMonth}</span>,{' '}
                            <span id={'hw91-date'}>{stringDate}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw91-button-start'}
                    disabled={!!timerId} // пишут студенты // задизэйблить если таймер запущен
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={'hw91-button-stop'}
                    disabled={!timerId} // пишут студенты // задизэйблить если таймер не запущен
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    )
}

export default Clock
