import btn from './ModuleStyle.module.css'

export default function Modules() {
    return (
        <>
            <div className={btn.card}>
                <label htmlFor="slc">Escolha uma cor</label>
                <select name="slc" id={btn.slc}>
                    <option value="">azul</option>
                    <option value="">vermelho</option>
                    <option value="">verde</option>
                </select>
                <button className={btn.diva}>Escolher</button>
            </div>
        </>
    )
}