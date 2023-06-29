export const headerData = {
  links: [
    {
      text: 'Sobre',
      links: [
        {
          text: 'Home',
          href: '#home',
        },
        {
          text: 'Equipa',
          href: '#team',
        },
      ],
    },
    {
      text: 'Serviços',
      href: '#serviços',
    },
    {
      text: 'Galeria',
      href: '#gallery',
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
          href: '#home',
        },
        {
          text: 'Equipa',
          href: '#team',
        },
      ],
    },
    {
      title: 'Serviços',
      href: '#serviços',
      links: [
        {
          text: 'Serviços',
          href: '#services',
        },
        {
          text: 'Preços',
          href: '#services',
        },
      ],
    },
    {
      title: 'Galeria',
      href: '#gallery',
      links: [
        {
          text: 'Portfólio',
          href: '#home',
        },
      ],
    },

    {
      title: 'Produtos',
      href: '#produtos',
      links: [
        {
          text: 'Produtos em loja',
          href: '#products',
        },
      ],
    },
    {
      title: 'Contactos',
      href: '#contacts',
      links: [
        {
          text: '+351 966578762',
          href: '#contacts',
        },
        {
          text: 'reservas@barberstudio.com',
          href: '#contacts',
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
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(src/assets/images/brand.png)]"></span>
    Made by <a class="hover:underline dark:text-gray-200" href="https://andrerodrigo.com/"> André Rodrigo</a> · All rights reserved.
  `,
};

export const contactsData = {
  tel: '+351962577577',
};
