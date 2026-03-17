
import BoasVindas from './componentes/BoasVindas.jsx';
import ButtonCss from './componentes/ButtonCss.jsx';
import ButtonM from './componentes/ButtonMudule.jsx';
import ButtonStyled from './componentes/ButtonStyled.jsx';

export default function App(){
    return (
        <>
            <BoasVindas name="Lyan" />
            <BoasVindas name="Thigas" />
            <BoasVindas name="Ferreira" />
            <ButtonCss bgColor='pink' label='Vinda' color='green' />
            <ButtonM text='Lyan?' destaque >sdfghjk</ButtonM>

            <ButtonStyled text="bucetao" secondarily={true} />


        </>
    )
}