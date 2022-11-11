import { makeAutoObservable } from 'mobx';

interface Link {
  readonly id: number;
  tag: string;
  link: string
}

const mockLinks: Link[] = [
  {
    id: 0,
    tag: 'vk',
    link: 'https://vk.com/eelfy',
  },
  {
    id: 1,
    tag: 'inst',
    link: 'https://instagram.com/eelfy_za',
  },
];

class LinksStore {
  links: Link[] = mockLinks;

  constructor() {
    makeAutoObservable(this);
  }

  addLink = (newLink: Link) => {
    this.links.push(newLink);
  };

  deleteLink = (linkIdToRemove: number) => {
    this.links = this.links.filter((link) => link.id !== linkIdToRemove);
  };

  createLink = (tag: string, link: string): Link => {
    const lastLink = this.links.at(-1);

    const newLink: Link = {
      id: lastLink ? lastLink.id + 1 : 0,
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
}

export type { Link };
export { LinksStore };
