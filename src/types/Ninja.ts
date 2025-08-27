export interface Ninja {
  id: number;
  name: string;
  nation: string;
  village: string;
  occupation: string;
  statistics: {
    ninjutsu: number;
    taijutsu: number;
    genjutsu: number;
    speed: number;
    stamina: number;
  };
}

export interface NinjaInput {
  name: string;
  nation_id: number; // input will need the id of table nation
  village: string;
  occupation: string;
  ninjutsu: number;
  taijutsu: number;
  genjutsu: number;
  speed: number;
  stamina: number;
}
