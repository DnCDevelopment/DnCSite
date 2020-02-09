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
