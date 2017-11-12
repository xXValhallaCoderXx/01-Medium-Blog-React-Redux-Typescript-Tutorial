import { Valkyrie, Aesir, Einherjar } from './models';


// Note How they all have the properties of 'NorseGodType' interface

export const sampleValk: Valkyrie = {
    id: 1,
    name: "Example1",
    entity: "valkyrie",
    saved: 100,
};

export const sampleAesir: Aesir = {
    id: 2,
    name: "Example1",
    entity: "aesir",
    protected: 100,
};

export const sampleEinherjar: Einherjar = {
    id: 3,
    name: "Example1",
    entity: "einherjar",
    slain: 100
};