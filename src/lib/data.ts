export type Level = 'crítico' | 'alto' | 'medio';

export const cameras = [
  { id: 'CAM-01', name: 'Acceso principal', zone: 'Planta baja', online: true },
  { id: 'CAM-02', name: 'Estacionamiento norte', zone: 'Exterior', online: true },
  { id: 'CAM-03', name: 'Pasillo central', zone: 'Planta baja', online: true },
  { id: 'CAM-04', name: 'Cajeros', zone: 'Planta baja', online: true },
  { id: 'CAM-05', name: 'Andén de carga', zone: 'Exterior', online: true },
  { id: 'CAM-06', name: 'Escalera de servicio', zone: 'Piso 2', online: false },
];

export const alerts: { id: number; time: string; camera: string; label: string; conf: number; level: Level; status: string }[] = [
  { id: 1042, time: '14:32:08', camera: 'CAM-01', label: 'Arma de fuego', conf: 0.94, level: 'crítico', status: 'Nueva' },
  { id: 1041, time: '14:27:51', camera: 'CAM-04', label: 'Rostro cubierto', conf: 0.88, level: 'alto', status: 'Nueva' },
  { id: 1040, time: '14:19:33', camera: 'CAM-02', label: 'Cuchillo', conf: 0.91, level: 'crítico', status: 'En revisión' },
  { id: 1039, time: '14:05:12', camera: 'CAM-05', label: 'Mochila abandonada', conf: 0.82, level: 'medio', status: 'Nueva' },
  { id: 1038, time: '13:48:40', camera: 'CAM-03', label: 'Objeto contundente', conf: 0.79, level: 'medio', status: 'Resuelta' },
  { id: 1037, time: '13:21:17', camera: 'CAM-01', label: 'Rostro cubierto', conf: 0.86, level: 'alto', status: 'Resuelta' },
];

export const stats = [
  { label: 'Detecciones hoy', value: '128' },
  { label: 'Alertas críticas', value: '3' },
  { label: 'Respuesta promedio', value: '41 s' },
  { label: 'Precisión del modelo', value: '96.2 %' },
];

export const matches = [
  { id: 'VEC-88213', camera: 'CAM-02', time: 'Hoy 14:19', sim: 0.97, label: 'Cuchillo' },
  { id: 'VEC-77104', camera: 'CAM-05', time: 'Ayer 22:41', sim: 0.93, label: 'Cuchillo' },
  { id: 'VEC-65992', camera: 'CAM-01', time: '12 nov 09:05', sim: 0.89, label: 'Objeto punzante' },
  { id: 'VEC-60317', camera: 'CAM-03', time: '9 nov 18:30', sim: 0.84, label: 'Cuchillo' },
];
