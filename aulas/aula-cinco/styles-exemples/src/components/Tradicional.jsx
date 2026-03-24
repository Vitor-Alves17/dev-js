import './TradicionalStyle.css'

export default function Tradicional() {
    return (
        <>
            <div className="card">
                <p>Escolha um trimestre</p>
                <div className="form">
                    <label htmlFor="tri">Trimestres</label>
                    <select name="tri" id="tri">
                    <option value="1">1 - Janeiro a Março</option>
                    <option value="2">2 - Abril a Junho</option>
                    <option value="3">3 - Julho a Setembro</option>
                    <option value="4">4 - Outubro a Dezembro</option>
                </select></div>
            </div>
        </>
    )
}