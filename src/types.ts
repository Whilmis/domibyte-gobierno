export type ScreenType = 'portal' | 'equipamiento';

export type Language = 'es' | 'en';

export interface HardwareItem {
  id: string;
  code: string;
  name: string;
  category: 'servidores' | 'redes' | 'tactico' | 'biometria' | 'seguridad' | 'ups' | 'ofimatica';
  categoryLabel: string;
  description: string;
  specs: {
    label: string;
    value: string;
  }[];
  badges: string[];
  warranty: string;
  stockStatus: string;
  iconName: string;
  image?: string;
  homologadoDGCP: boolean;
  pptClauses: {
    neutralSpec: string;
    warrantyClause: string;
    sparePartsClause: string;
  };
}

export interface TenderBasketItem {
  item: HardwareItem;
  quantity: number;
  addedAt: string;
}

export interface PPTTemplate {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  description: string;
  fileSize: string;
  format: string;
  sections: string[];
}
