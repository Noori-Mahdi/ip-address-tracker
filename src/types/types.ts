export type InfoItem = {
    title: string;
    info: string;
};

export interface MapComponentPropsType {
    location : [number,number] | [],
}

export interface InfoBoxPropsType {
    list : InfoItem[] | undefined;
}

export interface SearchBoxPropsType{
    onSearch: (search:string) => void;
}