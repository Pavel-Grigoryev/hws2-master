import s from './Loader.module.css'
import loadImg from './Ellipse 4.png'

export const Loader = () => <div className={s.loader}>
    <img src={loadImg} alt=""/>
</div>
