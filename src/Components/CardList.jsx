import Cards from './Cards';
import '../Style/CardList.css';
import { datas } from '../Components/Datas';

const CardList = () => {

    return (
        <div className='CardList'>
            {datas.map((data) => (
                <Cards data={data} />
            ))}
        </div>
    )
}

export default CardList