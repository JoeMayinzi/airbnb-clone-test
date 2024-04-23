import "./App.css";

function App() {
  return (
    <div>
      <header className="p-4 border-y border-[#DDDDDD]  ">
        <div className=" container mx-auto flex  justify-between items-center">
          <div>
            <img src="/assets/img/logo1.png" alt="the website logo" />
          </div>
          <div className=" flex items-center  justify-around gap-[16px] border border-[#DDDDDD] rounded-full  shadow-lg px-1 w-[459.47px] h-[46px] ">
            <div>
              <h5 className=" font-semibold text-sm">N'importe où</h5>
            </div>
            <div>
              <h5 className=" font-semibold text-sm">Une sémaine</h5>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <h5 className=" font-normal text-sm text-[#6A6A6A] ">
                  Ajouter des voyageurs
                </h5>
                <div className="bg-[#FF385C] py-3 px-3 rounded-full ">
                  <svg
                    width="14"
                    height="13"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.98502 8.375L12.36 11.75M5.98502 9.5C6.52672 9.5 7.06312 9.3933 7.56359 9.186C8.06405 8.9787 8.51879 8.67486 8.90183 8.29182C9.28487 7.90877 9.58872 7.45404 9.79602 6.95357C10.0033 6.4531 10.11 5.9167 10.11 5.375C10.11 4.8333 10.0033 4.2969 9.79602 3.79643C9.58872 3.29596 9.28487 2.84123 8.90183 2.45818C8.51879 2.07514 8.06405 1.7713 7.56359 1.564C7.06312 1.3567 6.52672 1.25 5.98502 1.25C4.891 1.25 3.84179 1.6846 3.0682 2.45818C2.29461 3.23177 1.86002 4.28098 1.86002 5.375C1.86002 6.46902 2.29461 7.51823 3.0682 8.29182C3.84179 9.0654 4.891 9.5 5.98502 9.5Z"
                      stroke="white"
                      stroke-width="2"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center gap-4 p-3">
            <h5 className=" text-sm font-semibold">
              Mettre mon logement sur Airbnb
            </h5>
            <div>
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_849)">
                  <path
                    d="M8.60004 0.75C10.659 0.755298 12.6317 1.57763 14.0849 3.03638C15.538 4.49512 16.3527 6.471 16.35 8.53C16.3431 10.541 15.5548 12.4706 14.1516 13.9111C12.7484 15.3516 10.8402 16.1903 8.83004 16.25H8.58004C6.56898 16.2458 4.63832 15.46 3.19591 14.0586C1.7535 12.6573 0.91231 10.7501 0.850037 8.74V8.49C0.852687 6.43631 1.67037 4.46763 3.12349 3.01639C4.57661 1.56514 6.54634 0.749998 8.60004 0.75ZM10.55 9.25H6.65004C6.80004 12.15 7.82004 14.59 8.53004 14.75H8.60004C9.28004 14.75 10.32 12.38 10.53 9.52L10.55 9.25ZM14.81 9.25H12.05C11.96 11.21 11.52 13.03 10.87 14.33C11.884 13.9336 12.777 13.2795 13.4609 12.4325C14.1449 11.5855 14.5961 10.5747 14.77 9.5L14.81 9.25ZM5.14004 9.25H2.40004C2.53605 10.3739 2.97429 11.4398 3.66811 12.3344C4.36192 13.229 5.28533 13.9186 6.34004 14.33C5.65297 12.8531 5.25902 11.257 5.18004 9.63L5.15004 9.25H5.14004ZM6.34004 2.67L6.22004 2.72C5.1927 3.14311 4.29648 3.83201 3.6234 4.71598C2.95032 5.59995 2.52463 6.64713 2.39004 7.75H5.14004C5.23004 5.92 5.62004 4.21 6.20004 2.94L6.34004 2.67ZM8.59004 2.25C7.89004 2.25 6.81004 4.76 6.65004 7.75H10.55C10.4 4.85 9.37004 2.41 8.66004 2.25H8.59004ZM10.87 2.68L10.9 2.73C11.6156 4.30947 12.0067 6.01655 12.05 7.75H14.8C14.6611 6.62971 14.2228 5.56757 13.5312 4.67536C12.8396 3.78315 11.9203 3.09385 10.87 2.68Z"
                    fill="#222222"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_849">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(0.600037 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>
              <div className="flex gap-2 items-center w-[86px] h-[48px] border border-[#DDDDDD] rounded-full px-3 ">
                <div>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.60004 8.5H15.6M1.60004 12.5H15.6M1.60004 4.5H15.6"
                      stroke="#222222"
                      stroke-width="1.5"
                    />
                  </svg>
                </div>
                <div>
                  <img src="/assets/img/prof.jpg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="mt-5">
        <div className="container mx-auto">
          <div className="flex justify-between mb-4">
            <div className="flex items-center gap-2">
              <div>
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_6)">
                    <path
                      d="M13.5 0.500039C13.8686 0.497377 14.2252 0.630471 14.5018 0.87393C14.7785 1.11739 14.9558 1.45417 15 1.82004V9.50004H22.5C22.8686 9.49738 23.2252 9.63047 23.5018 9.87393C23.7785 10.1174 23.9558 10.4542 24 10.82V23C24.0027 23.3686 23.8696 23.7252 23.6261 24.0018C23.3827 24.2785 23.0459 24.4558 22.68 24.5H10.5C10.1315 24.5027 9.77492 24.3696 9.49826 24.1261C9.2216 23.8827 9.04425 23.5459 9.00004 23.18V15.5H1.50004C1.13152 15.5027 0.774921 15.3696 0.498263 15.1261C0.221605 14.8827 0.0442528 14.5459 3.91687e-05 14.18V2.00004C-0.00262268 1.63152 0.130471 1.27492 0.37393 0.998263C0.617389 0.721605 0.954174 0.544253 1.32004 0.500039H13.5ZM16.095 11L13.995 11.75L14.355 12.065L14.55 12.26C14.73 12.455 14.895 12.635 15 12.8L15.12 12.95L15.195 13.055L15.255 13.175H10.965V15.125H12.765L13.02 15.92L13.17 16.31L13.32 16.76C13.728 17.7326 14.2958 18.63 15 19.415C14.25 19.895 13.32 20.33 12.195 20.72L11.7 20.885L11.175 21.05L10.515 21.26L11.595 22.985L12.195 22.79L12.795 22.61C14.295 22.085 15.54 21.47 16.515 20.78C17.37 21.38 18.435 21.935 19.695 22.4L20.25 22.61L20.82 22.79L21.435 22.985L22.515 21.26L21.84 21.05L21.45 20.93L20.94 20.765C19.921 20.4293 18.9445 19.9763 18.03 19.415C18.698 18.6563 19.2399 17.7954 19.635 16.865L19.83 16.4L19.995 15.905L20.25 15.125H22.05V13.175H17.475L17.325 12.83C17.1185 12.3324 16.8406 11.8676 16.5 11.45L16.32 11.225L16.11 11H16.095ZM18.12 15.14L18.06 15.335L17.94 15.665L17.79 16.07C17.4761 16.8259 17.0403 17.5252 16.5 18.14C16.0543 17.6284 15.6809 17.0581 15.39 16.445L15.21 16.07L15.06 15.665L14.94 15.335L14.88 15.14H18.12ZM13.5 2.00004H1.50004V14H9.00004V11L9.01504 10.745H5.74504L5.14504 12.5H3.00004L6.39004 3.50004H8.61004L10.86 9.50004H13.5V2.00004ZM7.50004 5.61504L6.37504 8.90004H8.62504L7.50004 5.61504Z"
                      fill="#222222"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_6">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="font-semibold text-[26px] ">
                Charmant studio avec vue sur Burj Khalifa depuis le balcon
              </div>
            </div>
            <div className="flex items-center  gap-2">
              <div className="flex gap-1">
                <span>
                  <a href="#" className=" underline font-semibold text-sm">
                    <svg
                      width="21"
                      height="24"
                      viewBox="0 0 21 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_1_10)">
                        <path
                          d="M16.03 9.5V14C16.03 14.5523 15.5823 15 15.03 15H6.03003C5.47774 15 5.03003 14.5523 5.03003 14V9.5M10.53 2V12.5M5.53003 7L10.1765 2.35355C10.3717 2.15829 10.6883 2.15829 10.8836 2.35355L15.53 7"
                          stroke="#222222"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_1_10"
                          x="-1.46997"
                          y="0.5"
                          width="24"
                          height="24"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="4" />
                          <feGaussianBlur stdDeviation="2" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_1_10"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_1_10"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </a>
                </span>
                <span>
                  <a href="#" className=" underline font-semibold text-sm">
                    Partager
                  </a>
                </span>
              </div>
              <div className="flex gap-1 items-center">
                <span>
                  <a href="#" className=" underline font-semibold text-sm">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.91999 14.5C12.42 12.135 15.92 9.50001 15.92 6.00001C15.9213 5.54001 15.8317 5.08429 15.6563 4.65905C15.4808 4.23382 15.2231 3.84746 14.8978 3.52219C14.5725 3.19692 14.1862 2.93916 13.7609 2.76374C13.3357 2.58832 12.88 2.49869 12.42 2.50001C11.52 2.50001 10.63 2.84001 9.94499 3.52501L8.91999 4.55001L7.89499 3.52501C7.57065 3.19877 7.18501 2.93987 6.76026 2.7632C6.3355 2.58654 5.88001 2.49559 5.41999 2.49559C4.95996 2.49559 4.50447 2.58654 4.07971 2.7632C3.65496 2.93987 3.26932 3.19877 2.94499 3.52501C2.61955 3.84971 2.36146 4.23551 2.18556 4.66024C2.00966 5.08498 1.91941 5.54029 1.91999 6.00001C1.91999 9.50001 5.41999 12.135 8.91999 14.5Z"
                        stroke="#222222"
                      />
                    </svg>
                  </a>
                </span>
                <span>
                  <a href="#" className=" underline font-semibold text-sm">
                    Enregistrer
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-full  gap-2">
            <div>
              <img
                src="/assets/img/Overlay1.png"
                alt="img"
                className="rounded-tl-lg h-full"
              />
            </div>
            <div className=" grid grid-cols-2 gap-1 flex-1">
              <img
                src="/assets/img/Overlay2.png"
                alt="img"
                className=" w-full"
              />
              <img
                src="/assets/img/Overlay2.png"
                alt="img"
                className="rounded-br-lg w-full"
              />
              <img
                src="/assets/img/Overlay2.png "
                className="w-full"
                alt="img"
              />
              <img
                src="/assets/img/Overlay2.png"
                alt="img"
                className="rounded-br-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5">
        <div className="container mx-auto flex justify-between">
          <div>
            <div className="">
              <h2 className=" font-semibold text-[22px] ">
                Logement entier : appartement - Dubaï, Émirats arabes unis
              </h2>
              <p>4 voyageurs · Studio · 1 salle de bain</p>
            </div>
            <div className="flex gap-5 mt-5 items-center w-[653.33px] h-[109px] border border-[#DDDDDD] rounded-lg p-4">
              <div>
                <h2 className=" font-semibold">Coup de cœur voyageurs</h2>
              </div>
              <div>
                <h2 className=" font-semibold">
                  Un des logements préférés des voyageurs sur Airbnb
                </h2>
              </div>
              <div>
                <h2 className=" font-semibold">4,95</h2>
              </div>
              <div>
                <h2 className=" text-center">
                  37 <br />
                  <span>
                    <a href="#" className="font-semibold underline">
                      commentaires
                    </a>
                  </span>
                </h2>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="w-[372.33px] bg-white p-4 border border-[#B0B0B0] rounded-lg shadow-lg">
              <p className="mb-2">
                <span className=" font-semibold text-xl">116£</span> par nuit
              </p>
              <div className="mb-2">
                <div className=" p-3 border border-[#B0B0B0] rounded-lg border-b ">
                  <div className="flex justify-between">
                    <div>
                      <p className=" text-xs font-extrabold">Arrivée</p>
                      <span>01/05/2024</span>
                    </div>
                    <div>
                      <p className=" font-extrabold text-xs">Départ</p>

                      <span>01/05/2024</span>
                    </div>
                  </div>
                  <div className=" border-t">
                    <p className="font-semibold text-xl">voyageur</p>
                    <span>1 voyageur</span>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <button className=" w-full rounded-lg bg-[#E31C5F] text-center py-4 text-white ">
                    Réserver
                  </button>
                  <span className="mb-3">
                    Aucun montant ne vous sera débité pour le moment
                  </span>
                </div>
                <div>
                  <div className="flex justify-between mb-3">
                    <div>
                      <div>
                        <span>
                          <a className=" underline">122£ x nuit</a>
                        </span>
                      </div>
                    </div>
                    <div>
                      <span>853 €</span>
                    </div>
                  </div>
                  <div className="flex justify-between mb-3">
                    <div>
                      <div>
                        <span>
                          <a>Réduction à la semaine</a>
                        </span>
                      </div>
                    </div>
                    <div>
                      <span>-43 €</span>
                    </div>
                  </div>
                  <div className="flex justify-between mb-3">
                    <div>
                      <div>
                        <span>
                          <a>Frais de ménage</a>
                        </span>
                      </div>
                    </div>
                    <div>
                      <span>51 €</span>
                    </div>
                  </div>
                  <div className="flex justify-between mb-3">
                    <div>
                      <div>
                        <span>
                          <a>Frais de service Airbnb</a>
                        </span>
                      </div>
                    </div>
                    <div>
                      <span>146 €</span>
                    </div>
                  </div>
                  <hr />
                  <div className="flex justify-between mt-3">
                    <div>
                      <div>
                        <span className=" font-semibold">Total</span>
                      </div>
                    </div>
                    <div>
                      <span className=" font-semibold">146 €</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        Le lorem ipsum est, en imprimerie, une suite de mots sans signification
        utilisée à titre provisoire pour calibrer une mise en page, le texte
        définitif venant remplacer le faux-texte dès qu'il est prêt ou que la
        mise en page est achevée. Généralement, on utilise un texte en faux
        latin, le Lorem ipsum ou Lipsum. Le lorem ipsum est, en imprimerie, une
        suite de mots sans signification utilisée à titre provisoire pour
        calibrer une mise en page, le texte définitif venant remplacer le
        faux-texte dès qu'il est prêt ou que la mise en page est achevée.
        Généralement, on utilise un texte en faux latin, le Lorem ipsum ou
        Lipsum. Le lorem ipsum est, en imprimerie, une suite de mots sans
        signification utilisée à titre provisoire pour calibrer une mise en
        page, le texte définitif venant remplacer le faux-texte dès qu'il est
        prêt ou que la mise en page est achevée. Généralement, on utilise un
        texte en faux latin, le Lorem ipsum ou Lipsum. Le lorem ipsum est, en
        imprimerie, une suite de mots sans signification utilisée à titre
        provisoire pour calibrer une mise en page, le texte définitif venant
        remplacer le faux-texte dès qu'il est prêt ou que la mise en page est
        achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum
        ou Lipsum. Le lorem ipsum est, en imprimerie, une suite de mots sans
        signification utilisée à titre provisoire pour calibrer une mise en
        page, le texte définitif venant remplacer le faux-texte dès qu'il est
        prêt ou que la mise en page est achevée. Généralement, on utilise un
        texte en faux latin, le Lorem ipsum ou Lipsum. Le lorem ipsum est, en
        imprimerie, une suite de mots sans signification utilisée à titre
        provisoire pour calibrer une mise en page, le texte définitif venant
        remplacer le faux-texte dès qu'il est prêt ou que la mise en page est
        achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum
        ou Lipsum. Le lorem ipsum est, en imprimerie, une suite de mots sans
        signification utilisée à titre provisoire pour calibrer une mise en
        page, le texte définitif venant remplacer le faux-texte dès qu'il est
        prêt ou que la mise en page est achevée. Généralement, on utilise un
        texte en faux latin, le Lorem ipsum ou Lipsum. en page, le texte
        définitif venant remplacer le faux-texte dès qu'il est prêt ou que la
        mise en page est achevée. Généralement, on utilise un texte en faux
        latin, le Lorem ipsum ou Lipsum. Le lorem ipsum est, en imprimerie, une
        suite de mots sans signification utilisée à titre provisoire pour
        calibrer une mise en page, le texte définitif venant remplacer le
        faux-texte dès qu'il est prêt ou que la mise en page est achevée.
        Généralement, on utilise un texte en faux latin, le Lorem ipsum ou
        Lipsum. Le lorem ipsum est, en imprimerie, une suite de mots sans
        signification utilisée à titre provisoire pour calibrer une mise en
        page, le texte définitif venant remplacer le faux-texte dès qu'il est
        prêt ou que la mise en page est achevée. Généralement, on utilise un
        texte en faux latin, le Lorem ipsum ou Lipsum. Le lorem ipsum est, en
        imprimerie, une suite de mots sans signification utilisée à titre
        provisoire pour calibrer une mise en page, le texte définitif venant
        remplacer le faux-texte dès qu'il est prêt ou que la mise en page est
        achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum
        ou Lipsum. Le lorem ipsum est, en imprimerie, une suite de mots sans
        signification utilisée à titre provisoire pour calibrer une mise en
        page, le texte définitif venant remplacer le faux-texte dès qu'il est
        prêt ou que la mise en page est achevée. Généralement, on utilise un
        texte en faux latin, le Lorem ipsum ou Lipsum. Le lorem ipsum est, en
        imprimerie, une suite de mots sans signification utilisée à titre
        provisoire pour calibrer une mise en page, le texte définitif venant
        remplacer le faux-texte dès qu'il est prêt ou que la mise en page est
        achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum
        ou Lipsum. en page, le texte définitif venant remplacer le faux-texte
        dès qu'il est prêt ou que la mise en page est achevée. Généralement, on
        utilise un texte en faux latin, le Lorem ipsum ou Lipsum. Le lorem ipsum
        est, en imprimerie, une suite de mots sans signification utilisée à
        titre provisoire pour calibrer une mise en page, le texte définitif
        venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page
        est achevée. Généralement, on utilise un texte en faux latin, le Lorem
        ipsum ou Lipsum. Le lorem ipsum est, en imprimerie, une suite de mots
        sans signification utilisée à titre provisoire pour calibrer une mise en
        page, le texte définitif venant remplacer le faux-texte dès qu'il est
        prêt ou que la mise en page est achevée. Généralement, on utilise un
        texte en faux latin, le Lorem ipsum ou Lipsum. Le lorem ipsum est, en
        imprimerie, une suite de mots sans signification utilisée à titre
        provisoire pour calibrer une mise en page, le texte définitif venant
        remplacer le faux-texte dès qu'il est prêt ou que la mise en page est
        achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum
        ou Lipsum. Le lorem ipsum est, en imprimerie, une suite de mots sans
        signification utilisée à titre provisoire pour calibrer une mise en
        page, le texte définitif venant remplacer le faux-texte dès qu'il est
        prêt ou que la mise en page est achevée. Généralement, on utilise un
        texte en faux latin, le Lorem ipsum ou Lipsum. Le lorem ipsum est, en
        imprimerie, une suite de mots sans signification utilisée à titre
        provisoire pour calibrer une mise en page, le texte définitif venant
        remplacer le faux-texte dès qu'il est prêt ou que la mise en page est
        achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum
        ou Lipsum. en page, le texte définitif venant remplacer le faux-texte
        dès qu'il est prêt ou que la mise en page est achevée. Généralement, on
        utilise un texte en faux latin, le Lorem ipsum ou Lipsum. Le lorem ipsum
        est, en imprimerie, une suite de mots sans signification utilisée à
        titre provisoire pour calibrer une mise en page, le texte définitif
        venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page
        est achevée. Généralement, on utilise un texte en faux latin, le Lorem
        ipsum ou Lipsum. Le lorem ipsum est, en imprimerie, une suite de mots
        sans signification utilisée à titre provisoire pour calibrer une mise en
        page, le texte définitif venant remplacer le faux-texte dès qu'il est
        prêt ou que la mise en page est achevée. Généralement, on utilise un
        texte en faux latin, le Lorem ipsum ou Lipsum. Le lorem ipsum est, en
        imprimerie, une suite de mots sans signification utilisée à titre
        provisoire pour calibrer une mise en page, le texte définitif venant
        remplacer le faux-texte dès qu'il est prêt ou que la mise en page est
        achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum
        ou Lipsum. Le lorem ipsum est, en imprimerie, une suite de mots sans
        signification utilisée à titre provisoire pour calibrer une mise en
        page, le texte définitif venant remplacer le faux-texte dès qu'il est
        prêt ou que la mise en page est achevée. Généralement, on utilise un
        texte en faux latin, le Lorem ipsum ou Lipsum. Le lorem ipsum est, en
        imprimerie, une suite de mots sans signification utilisée à titre
        provisoire pour calibrer une mise en page, le texte définitif venant
        remplacer le faux-texte dès qu'il est prêt ou que la mise en page est
        achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum
        ou Lipsum.
      </section>
    </div>
  );
}

export default App;
