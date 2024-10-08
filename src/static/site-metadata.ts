interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Lolipop\'s Running Page',
  siteUrl: 'https://run.towind.fun',
  logo: 'https://blog.towind.fun/static/avatar/avatar.png',
  description: 'Lolipop\'s personal site that records sport activities',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://blog.towind.fun',
    },
    {
      name: 'Github',
      url: 'https://github.com/LolipopJ',
    },
  ],
};

export default data;
