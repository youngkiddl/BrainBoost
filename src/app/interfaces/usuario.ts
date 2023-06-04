export interface Usuario {
  id:          number;
  nombre:      string;
  apellido:    string;
  email:       string;
  clave:       string;
  telefono:    number;
  pais:        string;
  fotografia:  string;
  instructors: Instructor[];
}

export interface Instructor {
  id?:           number;
  biografia?:    string;
  calificacion?: number;
  usuarioId?:    number;
}
