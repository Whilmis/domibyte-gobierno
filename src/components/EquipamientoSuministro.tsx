import React from 'react';
import { 
  HeroEquipamiento, 
  CatalogoEquipos, 
  PuestosTrabajo, 
  ProcesoAdquisicion, 
  GarantiasSLA, 
  FichasTecnicas, 
  FormularioContacto 
} from './equipamiento';

export const EquipamientoSuministro: React.FC = () => {
  return (
    <div className="w-full">
      <HeroEquipamiento />
      <CatalogoEquipos />
      <PuestosTrabajo />
      <ProcesoAdquisicion />
      <GarantiasSLA />
      <FichasTecnicas />
      <FormularioContacto />
    </div>
  );
};
