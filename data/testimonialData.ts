import type { Testimonial } from '../types/types';

export const testimonials: Testimonial[] = [
    {
        id: '1',
        variant: 'rose-quote',
        content: 'The delivery was absolutely fantastic! From start to finish, I got my coffee beans in record time. Morning saved!',
        author: {
            name: '',
            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDl4WImlQXuYL5U2E6wxbuDGfUwV0EEMrXuy9Pyty_eqFFc4n7kdILoZNgSE9L8g2GrTWaC67T15hbDazreac-tBwySYLRMxHLAO2yZniIGllsuIYQ-vKONG8issqV-yE32pKFOwQzE2L2oFByzkphkEyfd2DCcnlTIMXeX49Tc3X2FMMXAOdr9GwRszhU6aK6MDw75aP_xM5iGCzAgAtSmzDpxgp0hEHij-uBTD2OLCjdxN_QkBmmWtr43QR2EeP0e5h_QyP8h5Eco',
        },
    },
    {
        id: '2',
        variant: 'white-review',
        content: 'Speedy Coffee is an incredible platform for coffee lovers to find their perfect roast. The variety is unmatched!',
        author: {
            name: 'Elena Rodriguez',
            role: 'Barista',
            handle: '@elena.brews',
            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7Jfzq38LG-pqayuaGbJwwue9chmWYXPjSB0TVT2qG_L29mLTYRRhz10UQIUdVzaAKhm0PBBBBW7-DaDZwixJ2T2JCY1ywZAknuYCpvfQV75To98uUAu3yWvAHPkSBLQcV-dx0MI5jWgdnDvPdt29zfsHSWkgL_6LrhZZQn-yCcTZfNlRG92FGI1N3msp5U86tdKpZAFnbrmtP_XQZ-MH8UYDtaMNGNcojmLAJAhBAD8rZr-UaBAcw3qAT8OenjQSmwwwFXZuET1lV',
        },
        date: 'Nov 20, 2024',
        platform: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_Yc1dZ7yZtGX3mrVZXfX5jD7LtQFtklm7LnG-KuuMX-yV2MxD1mzSm9_VpaJqygLRM-UOwLF5EBo3uUeUkBAUEOYYfyxRVIJQutF92Faj51148mxru3-80gz8ILhU5kB3wvKVBlW_7dwjKHoy5EPK4qwGqK7tJGjve5nJRphAN7Nk1urQE1F9M-Bq86n_ibst-m2hFE5igjYvO5kelIWbeiOaoMZuGhvpk0QxEHm77outNMNQRA1Ho4a9IWvzutF5vEvVOZ6YLQDb',
    },
    {
        id: '3',
        variant: 'yellow-video',
        content: 'Impressed by the freshness and attention to detail. The team\'s dedication truly sets them apart from other subscriptions.',
        author: {
            name: 'John Doe',
            role: 'Mumbai',
            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD33NpQzFVWChEjyPDWiuqZF9C4ix2jhaysRzQDgiAnHMKTQctXD_0nOCtxBUflWGjn2jH0F00YLa5pCTry8TK1PFgEfLDCXPND6Cox5I3VV_KC5x1t4g4zjUOYW01a8KwAB35H8opYsyzDggeBgsqMri-TTRibJos9OMxMEkEPp3_iJHQ7aijJofU3cEo2xMkShzuPBpIRVpi2L64mMr2cKis6pwRNp1nDOfU8x1ksJiosniLTybBxLg0LRVUb93Pu46W6yJMmLhG3',
        },
    },
    {
        id: '4',
        variant: 'white-rating',
        content: 'Impressed by the professionals and attention to detail. The team\'s dedication truly sets them apart.',
        author: {
            name: '',
            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-AHEC5iqVt1uyVPu_m2d0-P0kc1hpMnm4PYdu6hxejMwdn7mhaDsc8U5M7b0tnOlDgihdqv9_ZJcWR4qMWkyaIfHc9onJ9WTiUQ4J0FUXGN3WucPzp_gyyAoI0xZguugACiIQBASIqgfq9PM2P1aTMBBRfVUEn1myK2kt3shIAtCJ-z0b1nOXDynQEZ4sAamUOYBgRlamp1lKNbz19N72OYkrTHgxeTbeTrPbuDrY4WqjIcxCI5KhFchNc2dvV53F3DYxFvOY4OAS',
        },
        rating: 4.5,
        likes: 1000,
        comments: 500,
    },
    {
        id: '5',
        variant: 'large-white',
        content: 'The attention to detail in this shot is truly impressive, from the subtle shadows to the crisp typography. You can really tell the effort that went into refining every element. Keep up the amazing work! The attention to detail is impressive.',
        author: {
            name: 'Marcus Chen',
            avatar: '',
        },
        rating: 5,
    },
    {
        id: '6',
        variant: 'product-designer',
        content: 'The cold brew class was absolutely fantastic! From start to finish, I learned so much knowledge.',
        author: {
            name: 'Sarah Smith | Product Designer',
            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsQ500j0ku3XYSEW2QVJeK9Ew5wDZz5jNSU43hDfScVO6UheeCnNqT_cgTyQvGjpFACCKgofyahRYCd3OZGCQDpy7YBqLieiO4lXUGBIupQFTjUqCrMHBYkjU81TNA5a_gSOYBK5ZzKzOXt1AnsFtIyra6K-bmbBCxAC9xnXT3AfYX0MtnEop--DF810bnNWCjbEvfYO1CPKwDYDkCDj_cFoI6LbIIRwZK03sIdR5sYiUVFHdQ51E9s8kYZEyAeSkfJSBD_ZiKm_C6',
        },
        rating: 5,
    },
    {
        id: '7',
        variant: 'image-overlay',
        content: 'The class was absolutely fantastic! From start to finish, I gained so much knowledge.',
        author: {
            name: 'Sarah Smith',
            handle: '@sarah.smith',
            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCy2IIbLePNo85Hc7uK2pQyG1Fv81O8KjM5rpC-12iYA8Fjk-dM1Lqe2EUo_qGCnD9L9PaCpmizNlZb2cEQ94ElkcYdB4rVto47Ol45B7bTlv0VFdyHL9E8KvF0nhaarvfPy1lFxc9LAcpMW0NMAh_yjsxz8-t7EFEuDuC8cUF1CyFieoRV5qHiEiKTPwCmsq55DbMytzXkTZwYU2uVy3EM_ddtj2xDj5mGg-P9CG4Pt6rR93xvCWMljuU3nZqZz_NDI-Lqk8d3RXDo',
        },
        productImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9gLyZxrCk5IIUl7Z-o9sq-EC_vlPnQLpYZfHE8eiQYO_aFCcStB_pjRNOhhuKiO1Bz7rCc3vz_ZcYqBkwlFVNTtjnTudhn9jqYhpnR3rcQhihe4mEICnhP8NiwPkYt1Awa5nIXaeHzoaIdF7f2QgMSyvl5VNvB3JdSopMNqSFfodz-bgb5pF1XIGsv8h5Wr9IFCrFsh3EcQ-jaaLGnywdeoIj6jAXDabcT15NOpMNbz8bOP9Uixae7-1br7G6pKvz1dElqSWq44YO',
    },
    {
        id: '8',
        variant: 'rose-long',
        content: 'The attention to detail in this shot is truly impressive, from the subtle shadows to the crisp typography. You can really tell the effort that went into refining every element. Keep up the amazing work! The attention to detail in this shot is truly impressive, from the subtle shadows to the.',
        author: {
            name: 'John Doe',
            role: 'Founder, Inventory Management',
            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1yOVAOQfU85QihVP1YrGUBqM5PGPUsq89dN6_-8PMEnndsE9q6YPpPc_F2uHltO3b0RYfKyB51NySP85PfJjPDaAKo2BQ5g987uY-w7jB0941hiZR-u3RgTMW_Ur0zCu0E88VrUGH4NP8vzYEVz85Oabe_nBQbuotizKsc83jOIDo0SKy9VAZrjcHm2I7bVJbi7rjLyypc9tQhhh31T6TMVX4ulE2eWBgbLuY-RZbkEPeFz2uX4L0EKaPynpN13n61YmcggvTTz_v',
        },
    },
    {
        id: '9',
        variant: 'yellow-small',
        content: 'Impressed by the professionalism and attention to detail.',
        author: {
            name: 'Sarah Smith',
            handle: '@sarah.smith',
            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJSwrTvpHeP_6FY4VNgkvqCrDD-4vECq5R16QDCpuLpBIdP6pS0ZqFl7PNl-kFPUEL8GpBeOydqaz9OGoDuR5sdZ2WPPH1h8y5QWF9hjmgL8kepOoL1gYyJinG0jHwXJwlh98CZOwJmF7MA9VrqYww0aHvd8vBSOAeA0nJE5-ZxIQEVKD56kG0Pz6iQaGPEkJtWJh8pWHaD-FspHL4V9JFhlsDTm8kFtkHjSsxe8DTqh0F2eBBIhf1IxcwC6W_yZBegnKcdaKsZyOa',
        },
    },
    {
        id: '10',
        variant: 'white-date',
        content: 'The attention to detail in this shot is truly impressive, from the subtle shadows to the crisp typography. You can really tell the effort.',
        author: {
            name: 'Sarah Smith',
            handle: '@sarah.smith',
            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIm4FmzSlcEk2XlWYNd8Y01S3uNxa1RUwcWShG0toLMPp2hxJtiXWT-sF2Zj8r3pP7OkNnZGotYqKhHa7b_deMXPPMya2dw-Pc_zbMEqIy5BcmPl0p6crMMzmyPGEWJO04ThyD49n4FtDe8nKnbrjr_42g9CruIHZQ0p9-z_-yV48rA7RgCvZQ_c17BvHivmOFPenUtRNJoQV4GepepgFN8HxLsfGH2SOOwMolaed7PyTKeleKcDWPVIXamCvfud4BiOOB-cR8dILD',
        },
        likes: 1000,
        comments: 500,
        date: '08:10 PM | 23 Mar 2024',
        platform: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAul-vt5j6Sdm5iknXkzaY-0e3Di2TUyNHfXW3P-_B805OImKu6HmeGDJ4sNWj4lJDhmbaIS1Z5DD6_18Pb2SFmJHf4KtBHDnEmqorFcTzsB8NMeuf_NnOo_nD6XscBHa5lTYkRAfrngRs0xgo6iNsBypwPJmP75oQBR7IUVHzXzIzKDIxXC_u7wpSl6KwVFbJ2NMxSYy_94jR0psCtkFvTE2O86cOeKy6Lx90oBSvAFVRu50y0n8QnZid03CWb6xxTpYwqKWv6NtJN',
    },
    {
        id: '11',
        variant: 'yellow-product',
        content: 'The attention to detail in this shot is truly impressive, from the subtle shadows to the crisp typography.',
        author: {
            name: 'John Doe',
            role: 'Founder, Inventory Management',
            avatar: '',
        },
        productImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgoYmjU_AInufuXm2qoq2fVcvTgG-k0cCBk2F-ke8EceeRjK_OtSLdVUQptWea1N5eF-aZDIFRMt3WSDMbyN5cxI5RwRd2OexmgJKKk2RrzFqSSa9f8Rjk1a5CuxsGEUrqt_5lBkZ7igIQP4UTBLSTwXEKMSDHasFUr-RaYHG0Exb3HjstU4LeQmxfdMk9mR5kQrELMCVnTYynF868EeMfe7fEMF_aPQclcrh8pX44_KaZ5j25hNXQJmsn2bCdQEH9LDAIgvdnnjvX',
    },
];
