export const headerData = {
  links: [
    {
      text: 'Sobre',
      links: [
        {
          text: 'Home',
          href: '#sobre',
        },
        {
          text: 'Equipa',
          href: '#equipa',
        },
      ],
    },
    {
      text: 'Serviços',
      href: '#serviços',
    },
    {
      text: 'Galeria',
      href: '#galeria',
    },
    {
      text: 'Produtos',
      href: '#produtos',
    },
    {
      text: 'Contactos',
      href: '#contactos',
    },
  ],
  actions: [{ type: 'button', text: 'Marcar', href: 'tel:+351962577577' }],
};

export const footerData = {
  links: [
    {
      title: 'Sobre',
      links: [
        {
          text: 'Conceito',
          href: '#sobre',
        },
        {
          text: 'Equipa',
          href: '#equipa',
        },
      ],
    },
    {
      title: 'Serviços',
      links: [
        {
          text: 'Serviços',
          href: '#serviços',
        },
        {
          text: 'Preços',
          href: '#serviços',
        },
      ],
    },
    {
      title: 'Galeria',
      href: '#galeria',
      links: [
        {
          text: 'Portfólio',
          href: '#galeria',
        },
      ],
    },

    {
      title: 'Produtos',
      href: '#produtos',
      links: [
        {
          text: 'Ver produtos',
          href: '#produtos',
        },
      ],
    },
    {
      title: 'Contactos',
      href: '#contactos',
      links: [
        {
          text: '+351 966578762',
          href: 'tel:#+351966578762',
        },
        {
          text: 'reservas@barberstudio.com',
          href: 'mailto:reservas@barberstudio.com',
        },
      ],
    },
  ],

  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(/images/brand.png)]"></span>
    Made by <a class="hover:underline dark:text-gray-200" href="https://andrerodrigo.com/"> André Rodrigo</a> · All rights reserved.
  `,
};

export const contactsData = {
  tel: '+351962577577',
};
