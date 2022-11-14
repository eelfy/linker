import { makeAutoObservable } from 'mobx';

interface Link {
  readonly id: number;
  tag: string;
  link: string
}

// const mockLinks: Link[] = [
//   {
//     id: 0,
//     tag: 'vk',
//     link: 'https://vk.com/eelfy',
//   },
//   {
//     id: 1,
//     tag: 'inst',
//     link: 'https://instagram.com/eelfy_za',
//   },
// ];

class LinksStore {
  links: Link[] = [];

  url: string = '';

  storedUserName = '';

  constructor() {
    makeAutoObservable(this);
  }

  addLink = (newLink: Link) => {
    const newLinks = [...this.links];
    newLinks.push(newLink);
    this.links = newLinks;
  };

  deleteLink = (linkIdToRemove: number) => {
    this.links = this.links.filter((link) => link.id !== linkIdToRemove);
  };

  createLink = (
    tag: string,
    link: string,
    id?: number,
  ): Link => {
    const lastLink = this.links.at(-1);

    const newLink: Link = {
      id: id ?? (lastLink ? lastLink.id + 1 : 0),
      tag,
      link,
    };

    return newLink;
  };

  updateLink = (updatedLink: Link) => {
    this.links = this.links.map((link) => {
      if (link.id === updatedLink.id) {
        return updatedLink;
      }
      return link;
    });
  };

  createUrlWiaLinksObject = () => {
    let updatedUrl = '';
    this.links.forEach((link) => {
      const stringedLink = `${link.tag}-${link.link}&`;
      updatedUrl += stringedLink;
    });
    this.url = `${new URL(document.URL)}/@eelfy?${updatedUrl}`;
  };

  updateUserName = (newUserName: string) => {
    this.storedUserName = newUserName;
  };
}

export type { Link };
export { LinksStore };
