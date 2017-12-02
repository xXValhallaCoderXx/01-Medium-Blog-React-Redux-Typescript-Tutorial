export interface Deity {
  readonly id: number; // Readonly - This can not be reassigned in future
  name: string;
  entity: string;
  height?: number // Notice the ? - This means Its not required
}

// Interfaces can also Extend (Inherit) from Others
export interface Valkyrie extends Deity {
  entity: "valkyrie"; // Define each Deitys entity here
  saved: number
};

export interface Einherjar extends Deity {
  entity: "einherjar"; // Define each Deitys entity here
  slain: number
};

export interface Aesir extends Deity {
  entity: "aesir"; // Define each Deitys entity here
  protected: number
};