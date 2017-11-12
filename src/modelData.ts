import { Valkyrie, Aesir, Einherjar } from './models';


// Note How they all have the properties of 'NorseGodType' interface

export const sampleValk: Valkyrie = {
    id: 1,
    name: "Herja",
    entity: "valkyrie",
    saved: 100,
    optional: "This is not needed"
};

export const sampleAesir: Aesir = {
    id: 2,
    name: "Freyr",
    entity: "aesir",
    protected: 100,
};

export const sampleEinherjar: Einherjar = {
    id: 3,
    name: "The Fallen Ones",
    entity: "einherjar",
    slain: 100
};