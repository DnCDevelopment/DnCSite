export interface IContactsComponent {
  isContactsPage?: boolean;
}

export interface IContact {
  id: string;
  title: string;
  href: string | null;
}

export interface IContactsData {
  strapiContactsblock: {
    contactsTitle: string;
    contacts: IContact[];
  };
}

export interface IFormData {
  strapiContactform: {
    titile: string;
    blueTitle: string;
    namePlaceholder: string;
    telPlaceholder: string;
    mailPlaceholder: string;
    sendTitle: string;
  };
}

export interface IAdressData {
  data: {
    addressTitle: string;
    address: string;
    workTimeTitle: string;
    worktime: string;
    map: string;
  };
}

export interface IPoolData {
  data: {
    variants: IPoolVariant[];
  };
}

export interface IPoolVariant {
  id: string | number;
  title: string;
}
