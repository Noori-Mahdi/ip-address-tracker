import bgImg from '../assets/img/pattern-bg-desktop.png';
import 'leaflet/dist/leaflet.css';
import MapComponent from '../components/MapComponent/MapComponent';
import { SearchBox } from '../components/SearchBox/SearchBox';
import { InfoBox } from '../components/InfoBox/InfoBox';

export const AddressTracker = () => {
    return ( 
        <div className='relative'>
            <div className='relative z-10 w-full'>
                <div className='absolute w-4/12 h-8 m-auto mt-10 -translate-x-1/2 left-1/2'>
                    <h3 className='mb-6 text-3xl font-bold text-center text-white capitalize'>IP address tracker</h3>
                    <SearchBox />
                </div>
                <div className='absolute bottom-0 z-30 w-8/12 -translate-x-1/2 translate-y-1/2 left-1/2'>
                    <InfoBox list={[{title:'IP address', info:'192.212.174.101'},{title:'location',info:'Brooklyn,NY 10001'},{title:'timezone',info:'utc-05:00'},{title:'isp',info:'spacex starlink'}]} />
                </div>
                <img src={bgImg}/>
            </div>
            <div className='z-0 w-full'>
                <MapComponent />
            </div>
        </div>
     );
}
