export interface IContactsComponent {
  isContactsPage?: boolean;
}

export interface IContact {
  id: string;
  title: {
    value: string;
  };
  href: {
    value: string | null;
  };
}

export interface IContactsData {
  data: {
    contactsTitle: {
      value: string;
    };
    contacts: IContact[];
  };
}

export interface IFormData {
  data: {
    title: {
      value: string;
    };
    blueTitle: {
      value: string;
    };
    namePlaceholder: {
      value: string;
    };
    telPlaceholder: {
      value: string;
    };
    mailPlaceholder: {
      value: string;
    };
    sendTitle: {
      value: string;
    };
  };
}

export interface IAdressData {
  data: {
    addressTitle: {
      value: string;
    };
    address: {
      value: string;
    };
    workTimeTitle: {
      value: string;
    };
    worktime: {
      value: string;
    };
    map: {
      value: string;
    };
  };
}

export interface IPoolData {
  data: {
    variants: IPoolVariant[];
  };
}

export interface IPoolVariant {
  id: string | number;
  title: {
    value: string;
  };
}

export interface IPool {
  poolChoice: string;
  changeChoice: (string) => void;
}

export interface IForm {
  poolChoice?: string;
  changeSended: (bool) => void;
  changeResponseCode: (number) => void;
}

export interface IResponse {
  code: number;
}
