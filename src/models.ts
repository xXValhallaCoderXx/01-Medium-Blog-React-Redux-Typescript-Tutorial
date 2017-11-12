export interface NorseGods {
    readonly id: number;
    name: string;
    entity: string;
    optional?: string
}

export interface Valkyrie extends NorseGods {
    entity: "valkyrie";
    saved: number
};

export interface Einherjar extends NorseGods {
    entity: "einherjar";
    slain: number
};

export interface Aesir extends NorseGods {
    entity: "aesir";
    protected: number
};