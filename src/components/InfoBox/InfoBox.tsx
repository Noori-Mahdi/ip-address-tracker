import { InfoBoxPropsType } from "../../types/types";
import '../../sass/global.scss';

export const InfoBox = ({list}:InfoBoxPropsType) => {
    return ( 
        <ul className="flex items-center justify-between px-4 py-8 bg-white rounded-lg">
            {list.map((e, index) => 
                <li className={`${index != 0 && 'border-l-2'} w-4/12 px-3 capitalize `}>
                    <div className="text-sm font-medium text_muted">{e.title}</div>
                    <div className="text-xl font-bold">{e.info}</div>
                </li>
            )}
        </ul>
     );
}
