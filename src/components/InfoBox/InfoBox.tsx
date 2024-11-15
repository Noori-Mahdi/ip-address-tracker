import { InfoBoxPropsType } from "../../types/types";
import '../../sass/global.scss';

export const InfoBox = ({list}:InfoBoxPropsType) => {
    return ( 
        <>
        { list && 
        <ul className="lg:flex items-stretch justify-start lg:px-4 lg:py-8 bg-white rounded-lg lg:text-start text-center">
            {list?.map((e, index) => 
                <li className={`${index != 0 && 'lg:border-l-2'} py-2  lg:m-0 lg:w-4/12  lg:px-3 capitalize `}>
                    <div className="text-sm font-medium text_muted">{e.title}</div>
                    <div className="text-xl font-bold">{e.info != ''? e.info:'??'}</div>
                </li>
            )}
        </ul>
        }
        </>
     );
}
