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
  logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTtc69JxHNcmN1ETpMUX4dozAgAN6iPjWalQ&usqp=CAU',
  description: 'Lolipop\'s personal site that records running histories',
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
