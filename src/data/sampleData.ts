import { Valkyrie, Aesir, Einherjar } from '../models';

// Note How they all have the properties of 'Deity' interface.
// They all inherit from Deity interface
export const sampleValk: Valkyrie = { // Adding the Valkyrie type to sampleValk
    id: 1,
    name: "Herja",
    entity: "valkyrie",
    saved: 100,
    height: 189
};

export const sampleAesir: Aesir = { // Adding the Aesir type to sampleAesir
    id: 2,
    name: "Freyr",
    entity: "aesir",
    protected: 100,
};

export const sampleEinherjar: Einherjar = { // Adding the Einherjar type to sampleEinherjar
    id: 3,
    name: "The Fallen Ones",
    entity: "einherjar",
    slain: 100
};

// Creating a list of sample data for Application
export const deities = [
    sampleValk,
    sampleAesir,
    sampleEinherjar
]