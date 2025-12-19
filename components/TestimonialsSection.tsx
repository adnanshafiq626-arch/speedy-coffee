import React from "react";

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-bg-testimonials text-gray-800 py-16 px-6 md:px-12 relative font-sans">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-amber-900 font-bold tracking-wide uppercase text-sm mb-3">
            Customer Love
          </h2>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Brewed for Perfection
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of caffeine enthusiasts who start their day with
            Speedy Coffee.
          </p>
        </div>

        <div className="columns-1 md:columns-2 xl:columns-3 gap-6 space-y-6">
          {/* Card 1: Rose Quote */}
          <div className="break-inside-avoid bg-rose-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 relative">
            <span className="material-icons absolute top-6 right-6 text-rose-200 text-6xl -z-0">
              format_quote
            </span>
            <div className="flex items-start gap-4 relative z-10">
              <img
                alt="User Avatar"
                className="w-12 h-12 rounded-full object-cover border-2 border-white"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDl4WImlQXuYL5U2E6wxbuDGfUwV0EEMrXuy9Pyty_eqFFc4n7kdILoZNgSE9L8g2GrTWaC67T15hbDazreac-tBwySYLRMxHLAO2yZniIGllsuIYQ-vKONG8issqV-yE32pKFOwQzE2L2oFByzkphkEyfd2DCcnlTIMXeX49Tc3X2FMMXAOdr9GwRszhU6aK6MDw75aP_xM5iGCzAgAtSmzDpxgp0hEHij-uBTD2OLCjdxN_QkBmmWtr43QR2EeP0e5h_QyP8h5Eco"
              />
              <div>
                <p className="text-gray-800 font-medium leading-relaxed mb-2">
                  "The delivery was absolutely fantastic! From start to finish, I
                  got my coffee beans in record time. Morning saved!"
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: White Review with Google Logo */}
          <div className="break-inside-avoid bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="flex justify-between items-start mb-4">
              <div className="flex gap-3">
                <img
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7Jfzq38LG-pqayuaGbJwwue9chmWYXPjSB0TVT2qG_L29mLTYRRhz10UQIUdVzaAKhm0PBBBBW7-DaDZwixJ2T2JCY1ywZAknuYCpvfQV75To98uUAu3yWvAHPkSBLQcV-dx0MI5jWgdnDvPdt29zfsHSWkgL_6LrhZZQn-yCcTZfNlRG92FGI1N3msp5U86tdKpZAFnbrmtP_XQZ-MH8UYDtaMNGNcojmLAJAhBAD8rZr-UaBAcw3qAT8OenjQSmwwwFXZuET1lV"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h4 class="font-bold text-sm text-gray-900">
                      Elena Rodriguez
                    </h4>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                      Barista
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">@elena.brews</p>
                </div>
              </div>
            </div>
            <p className="text-gray-700 mb-4 text-sm leading-relaxed">
              Speedy Coffee is an incredible platform for coffee lovers to find
              their perfect roast. The variety is unmatched!
            </p>
            <div className="border-t border-gray-100 pt-4 flex justify-between items-center">
              <img
                alt="Google Logo"
                className="w-5 h-5"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_Yc1dZ7yZtGX3mrVZXfX5jD7LtQFtklm7LnG-KuuMX-yV2MxD1mzSm9_VpaJqygLRM-UOwLF5EBo3uUeUkBAUEOYYfyxRVIJQutF92Faj51148mxru3-80gz8ILhU5kB3wvKVBlW_7dwjKHoy5EPK4qwGqK7tJGjve5nJRphAN7Nk1urQE1F9M-Bq86n_ibst-m2hFE5igjYvO5kelIWbeiOaoMZuGhvpk0QxEHm77outNMNQRA1Ho4a9IWvzutF5vEvVOZ6YLQDb"
              />
              <span className="text-xs text-gray-400">Nov 20, 2024</span>
            </div>
          </div>

          {/* Card 3: Yellow with Video Button */}
          <div className="break-inside-avoid bg-amber-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <span className="material-icons text-amber-200 text-5xl mb-2 block">
              format_quote
            </span>
            <p className="text-gray-800 font-medium mb-6">
              "Impressed by the freshness and attention to detail. The team's
              dedication truly sets them apart from other subscriptions."
            </p>
            <button className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-sm hover:shadow hover:scale-105 transition-all duration-200 group w-max">
              <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                <span className="material-icons text-sm">play_arrow</span>
              </div>
              <span className="text-sm font-semibold text-gray-700">
                Watch their review
              </span>
            </button>
            <div className="mt-6 flex items-center gap-3">
              <img
                alt="User"
                className="w-10 h-10 rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD33NpQzFVWChEjyPDWiuqZF9C4ix2jhaysRzQDgiAnHMKTQctXD_0nOCtxBUflWGjn2jH0F00YLa5pCTry8TK1PFgEfLDCXPND6Cox5I3VV_KC5x1t4g4zjUOYW01a8KwAB35H8opYsyzDggeBgsqMri-TTRibJos9OMxMEkEPp3_iJHQ7aijJofU3cEo2xMkShzuPBpIRVpi2L64mMr2cKis6pwRNp1nDOfU8x1ksJiosniLTybBxLg0LRVUb93Pu46W6yJMmLhG3"
              />
              <div>
                <p className="text-sm font-bold text-gray-900">John Doe</p>
                <p className="text-xs text-gray-500">Mumbai</p>
              </div>
            </div>
          </div>

          {/* Card 4: White with Ratings/Likes */}
          <div className="break-inside-avoid bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="flex justify-between items-start mb-3">
              <img
                alt="User"
                className="w-10 h-10 rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-AHEC5iqVt1uyVPu_m2d0-P0kc1hpMnm4PYdu6hxejMwdn7mhaDsc8U5M7b0tnOlDgihdqv9_ZJcWR4qMWkyaIfHc9onJ9WTiUQ4J0FUXGN3WucPzp_gyyAoI0xZguugACiIQBASIqgfq9PM2P1aTMBBRfVUEn1myK2kt3shIAtCJ-z0b1nOXDynQEZ4sAamUOYBgRlamp1lKNbz19N72OYkrTHgxeTbeTrPbuDrY4WqjIcxCI5KhFchNc2dvV53F3DYxFvOY4OAS"
              />
              <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-lg">
                <span className="material-icons text-amber-400 text-sm">
                  star
                </span>
                <span className="text-xs font-bold text-amber-700">4.5/5</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              "Impressed by the professionals and attention to detail. The
              team's dedication truly sets them apart."
            </p>
            <div className="flex items-center justify-end gap-4 text-gray-400 text-xs">
              <div className="flex items-center gap-1">
                <span className="material-icons text-sm text-rose-400">
                  favorite
                </span>{" "}
                1k
              </div>
              <div className="flex items-center gap-1">
                <span className="material-icons text-sm">
                  chat_bubble_outline
                </span>{" "}
                500
              </div>
            </div>
          </div>

          {/* Card 5: Large White with Gradient Bar */}
          <div className="break-inside-avoid bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-200 to-amber-500"></div>
            <span className="material-icons absolute top-6 right-8 text-amber-100 text-8xl -z-0">
              format_quote
            </span>
            <p className="text-gray-600 text-lg italic leading-relaxed mb-6 relative z-10">
              "The attention to detail in this shot is truly impressive, from
              the subtle shadows to the crisp typography. You can really tell
              the effort that went into refining every element. Keep up the
              amazing work! The attention to detail is impressive."
            </p>
            <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row justify-between items-end sm:items-center gap-4">
              <div>
                <p className="font-bold text-gray-900">Marcus Chen</p>
                <div className="flex text-amber-400 text-sm mt-1">
                  <span className="material-icons text-sm">star</span>
                  <span className="material-icons text-sm">star</span>
                  <span className="material-icons text-sm">star</span>
                  <span className="material-icons text-sm">star</span>
                  <span className="material-icons text-sm">star</span>
                </div>
              </div>
              <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center text-amber-600">
                <span className="material-icons text-lg">coffee</span>
              </div>
            </div>
          </div>

          {/* Card 6: Product Designer with Stars */}
          <div className="break-inside-avoid bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="flex text-amber-400 mb-3">
              <span className="material-icons text-sm">star</span>
              <span className="material-icons text-sm">star</span>
              <span className="material-icons text-sm">star</span>
              <span className="material-icons text-sm">star</span>
              <span className="material-icons text-sm">star</span>
            </div>
            <p className="text-gray-800 font-medium mb-4">
              "The cold brew class was absolutely fantastic! From start to
              finish, I learned so much knowledge."
            </p>
            <div className="flex items-center gap-3">
              <img
                alt="User"
                className="w-8 h-8 rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsQ500j0ku3XYSEW2QVJeK9Ew5wDZz5jNSU43hDfScVO6UheeCnNqT_cgTyQvGjpFACCKgofyahRYCd3OZGCQDpy7YBqLieiO4lXUGBIupQFTjUqCrMHBYkjU81TNA5a_gSOYBK5ZzKzOXt1AnsFtIyra6K-bmbBCxAC9xnXT3AfYX0MtnEop--DF810bnNWCjbEvfYO1CPKwDYDkCDj_cFoI6LbIIRwZK03sIdR5sYiUVFHdQ51E9s8kYZEyAeSkfJSBD_ZiKm_C6"
              />
              <div>
                <p className="text-xs font-bold text-amber-900">
                  Sarah Smith | Product Designer
                </p>
              </div>
            </div>
          </div>

           {/* Card 7: Large Image Overlay */}
           <div className="break-inside-avoid relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group h-[400px]">
            <img
              alt="Product"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9gLyZxrCk5IIUl7Z-o9sq-EC_vlPnQLpYZfHE8eiQYO_aFCcStB_pjRNOhhuKiO1Bz7rCc3vz_ZcYqBkwlFVNTtjnTudhn9jqYhpnR3rcQhihe4mEICnhP8NiwPkYt1Awa5nIXaeHzoaIdF7f2QgMSyvl5VNvB3JdSopMNqSFfodz-bgb5pF1XIGsv8h5Wr9IFCrFsh3EcQ-jaaLGnywdeoIj6jAXDabcT15NOpMNbz8bOP9Uixae7-1br7G6pKvz1dElqSWq44YO"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
              <div className="flex items-center gap-2 mb-2">
                <img
                  alt="User"
                  className="w-8 h-8 rounded-full border border-white/50"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCy2IIbLePNo85Hc7uK2pQyG1Fv81O8KjM5rpC-12iYA8Fjk-dM1Lqe2EUo_qGCnD9L9PaCpmizNlZb2cEQ94ElkcYdB4rVto47Ol45B7bTlv0VFdyHL9E8KvF0nhaarvfPy1lFxc9LAcpMW0NMAh_yjsxz8-t7EFEuDuC8cUF1CyFieoRV5qHiEiKTPwCmsq55DbMytzXkTZwYU2uVy3EM_ddtj2xDj5mGg-P9CG4Pt6rR93xvCWMljuU3nZqZz_NDI-Lqk8d3RXDo"
                />
                <div className="text-white/90 text-xs">
                  <p className="font-bold">Sarah Smith</p>
                  <p className="opacity-70">@sarah.smith</p>
                </div>
              </div>
              <p className="text-white text-sm font-medium leading-relaxed">
                "The class was absolutely fantastic! From start to finish, I
                gained so much knowledge."
              </p>
            </div>
          </div>

          {/* Card 8: Rose with long text */}
          <div className="break-inside-avoid bg-rose-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex justify-between items-start mb-4">
              <img
                alt="User"
                className="w-12 h-12 rounded-full object-cover border-4 border-white"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1yOVAOQfU85QihVP1YrGUBqM5PGPUsq89dN6_-8PMEnndsE9q6YPpPc_F2uHltO3b0RYfKyB51NySP85PfJjPDaAKo2BQ5g987uY-w7jB0941hiZR-u3RgTMW_Ur0zCu0E88VrUGH4NP8vzYEVz85Oabe_nBQbuotizKsc83jOIDo0SKy9VAZrjcHm2I7bVJbi7rjLyypc9tQhhh31T6TMVX4ulE2eWBgbLuY-RZbkEPeFz2uX4L0EKaPynpN13n61YmcggvTTz_v"
              />
            </div>
            <p className="text-gray-700 mb-6 leading-loose">
              The attention to detail in this shot is truly impressive, from the
              subtle shadows to the crisp typography. You can really tell the
              effort that went into refining every element. Keep up the amazing
              work! The attention to detail in this shot is truly impressive,
              from the subtle shadows to the.
            </p>
            <div className="mt-auto">
              <p className="font-bold text-gray-900 text-sm">John Doe</p>
              <p className="text-xs text-rose-400">
                Founder, Inventory Management
              </p>
            </div>
          </div>

          {/* Card 9: Yellow small quote */}
          <div className="break-inside-avoid bg-amber-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <span className="material-icons text-amber-200 text-4xl mb-2 block">
              format_quote
            </span>
            <p className="text-gray-800 font-semibold mb-4 text-sm">
              "Impressed by the professionalism and attention to detail."
            </p>
            <div className="flex items-center gap-2">
              <img
                alt="User"
                className="w-8 h-8 rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJSwrTvpHeP_6FY4VNgkvqCrDD-4vECq5R16QDCpuLpBIdP6pS0ZqFl7PNl-kFPUEL8GpBeOydqaz9OGoDuR5sdZ2WPPH1h8y5QWF9hjmgL8kepOoL1gYyJinG0jHwXJwlh98CZOwJmF7MA9VrqYww0aHvd8vBSOAeA0nJE5-ZxIQEVKD56kG0Pz6iQaGPEkJtWJh8pWHaD-FspHL4V9JFhlsDTm8kFtkHjSsxe8DTqh0F2eBBIhf1IxcwC6W_yZBegnKcdaKsZyOa"
              />
              <div>
                <p className="text-xs font-bold text-gray-900">Sarah Smith</p>
                <p className="text-[10px] text-gray-500">@sarah.smith</p>
              </div>
            </div>
          </div>

          {/* Card 10: White with date */}
          <div className="break-inside-avoid bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="flex justify-between items-center text-xs text-gray-400 mb-4 pb-4 border-b border-gray-100">
              <div className="flex gap-3">
                <span className="flex items-center gap-1 text-rose-500">
                  <i className="material-icons text-sm">favorite</i> 1k
                </span>
                <span className="flex items-center gap-1">
                  <i className="material-icons text-sm">chat_bubble</i> 500
                </span>
              </div>
              <span>08:10 PM | 23 Mar 2024</span>
            </div>
            <p className="text-gray-700 text-sm mb-4">
              The attention to detail in this shot is truly impressive, from the
              subtle shadows to the crisp typography. You can really tell the
              effort.
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img
                  alt="User"
                  className="w-8 h-8 rounded-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIm4FmzSlcEk2XlWYNd8Y01S3uNxa1RUwcWShG0toLMPp2hxJtiXWT-sF2Zj8r3pP7OkNnZGotYqKhHa7b_deMXPPMya2dw-Pc_zbMEqIy5BcmPl0p6crMMzmyPGEWJO04ThyD49n4FtDe8nKnbrjr_42g9CruIHZQ0p9-z_-yV48rA7RgCvZQ_c17BvHivmOFPenUtRNJoQV4GepepgFN8HxLsfGH2SOOwMolaed7PyTKeleKcDWPVIXamCvfud4BiOOB-cR8dILD"
                />
                <div className="text-xs">
                  <p className="font-bold text-gray-900">Sarah Smith</p>
                  <p className="text-gray-400">@sarah.smith</p>
                </div>
              </div>
              <img
                alt="Google Logo"
                className="w-4 h-4 opacity-70 grayscale hover:grayscale-0 transition-all"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAul-vt5j6Sdm5iknXkzaY-0e3Di2TUyNHfXW3P-_B805OImKu6HmeGDJ4sNWj4lJDhmbaIS1Z5DD6_18Pb2SFmJHf4KtBHDnEmqorFcTzsB8NMeuf_NnOo_nD6XscBHa5lTYkRAfrngRs0xgo6iNsBypwPJmP75oQBR7IUVHzXzIzKDIxXC_u7wpSl6KwVFbJ2NMxSYy_94jR0psCtkFvTE2O86cOeKy6Lx90oBSvAFVRu50y0n8QnZid03CWb6xxTpYwqKWv6NtJN"
              />
            </div>
          </div>
          
          {/* Card 11: Yellow with Product Image */}
          <div className="break-inside-avoid bg-amber-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col sm:flex-row items-center gap-6">
            <div className="flex-1">
              <span className="material-icons text-amber-200 text-4xl mb-2 block">
                format_quote
              </span>
              <p className="text-gray-700 text-sm mb-4">
                The attention to detail in this shot is truly impressive, from
                the subtle shadows to the crisp typography.
              </p>
              <div>
                <p className="font-bold text-gray-900 text-sm">John Doe</p>
                <p className="text-xs text-gray-500">
                  Founder, Inventory Management
                </p>
              </div>
            </div>
            <div className="w-24 h-24 shrink-0 relative">
              <div className="absolute inset-0 bg-amber-200 rounded-full blur-xl opacity-50"></div>
              <img
                alt="Product Small"
                className="w-full h-full object-contain relative z-10 drop-shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgoYmjU_AInufuXm2qoq2fVcvTgG-k0cCBk2F-ke8EceeRjK_OtSLdVUQptWea1N5eF-aZDIFRMt3WSDMbyN5cxI5RwRd2OexmgJKKk2RrzFqSSa9f8Rjk1a5CuxsGEUrqt_5lBkZ7igIQP4UTBLSTwXEKMSDHasFUr-RaYHG0Exb3HjstU4LeQmxfdMk9mR5kQrELMCVnTYynF868EeMfe7fEMF_aPQclcrh8pX44_KaZ5j25hNXQJmsn2bCdQEH9LDAIgvdnnjvX"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;