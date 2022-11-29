import React, {useState} from 'react'
import s from './HW11.module.css'
import s2 from '../../s1-main/App.module.css'
import {restoreState} from '../hw06/localStorage/localStorage'
import SuperRange from './common/c7-SuperRange/SuperRange'

/*
* 1 - передать значения в оба слайдера
* 2 - дописать типы и логику функции change
* 3 - сделать стили в соответствии с дизайном
* */

function HW11() {
    // for autotests // не менять // можно подсунуть в локалСторэдж нужные числа, чтоб увидеть как они отображаются
    const [value1, setValue1] = useState(restoreState<number>('hw11-value1', 0))
    const [value2, setValue2] = useState(restoreState<number>('hw11-value2', 100))

    const change = (event: any) => {
        let curValue = event.target.value;
        if (Array.isArray(curValue)) {
            setValue1(curValue[0]);
            setValue2(curValue[1]);
        } else {
            setValue1(event.target.value);
        }
        // пишет студент // если пришёл массив - сохранить значения в оба useState, иначе в первый

    }

    return (
        <div id={'hw11'}>
            <div className={s2.hwTitle}>Homework #11</div>

            <div className={s2.hw}>
                <div className={s.container}>
                    <div className={s.wrapper}>
                        <span id={'hw11-value'} className={s.number}>{value1}</span>
                        <div className={s.slider}>
                            <SuperRange
                                id={'hw11-single-slider'}
                                onChange={change}
                                value={value1}
                                // сделать так чтоб value1 изменялось // пишет студент

                            />
                        </div>
                    </div>
                    <div className={s.wrapper}>
                        <span id={'hw11-value-1'} className={s.number}>{value1}</span>
                        <div className={s.slider}>
                            <SuperRange
                                id={'hw11-double-slider'}
                                onChange={change}
                                value={[value1, value2]}
                                // сделать так чтоб value1/2 изменялось // пишет студент

                            />
                        </div>
                        <span id={'hw11-value-2'} className={s.numberLast}>{value2}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HW11
