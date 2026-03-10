import styles from './ButtonModule.module.css';

export default function ButtonMudule(props) {
    return (
        <button className={
            `${styles.btn}
            ${props.destaque ? styles.destaque : ""}
            `}>
            {props.text}
        </button>
    )
}
