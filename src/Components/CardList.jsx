import Cards from './Cards';
import '../Style/CardList.css';
import { datas } from '../Components/Datas';

const CardList = () => {

    return (
        <div className='CardList'>
            {datas.map((data) => (
                <Cards data={data} key={data.id} />
            ))}
        </div>
    )
}

export default CardList