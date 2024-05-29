// interface BlockProps{
//   links: {
//     text:string,
//     url: string
//   }[]
// }

import GenericLink from "../generic/link";

const Nav = (() => {
  const c = "c-nav";
  return(
    <header className={c}>
      <div className={`${c}__top-bar`}>
        <div className={`${c}__top-bar__content`}>
          <a href="/">LOGIN</a>
          <a href="/">SUPPORT</a>
        </div>
      </div>
      <nav className={`${c}__nav-container`}>
        <a href="/" className={`${c}__nav-container__logo-link`}>
          <img src="https://www.wipster.io/hubfs/wipster-logo.svg" alt="Wipster logo" width={160} height={140} className={`${c}__nav-container__logo-link__image`}/>
        </a>
        <ul className={`${c}__nav-container__nav-list`}>
          <li className={`${c}__nav-container__nav-list__link`}>Features</li>
          <li className={`${c}__nav-container__nav-list__link`}>Customers</li>
          <li className={`${c}__nav-container__nav-list__link`}>Pricing</li>
          <li className={`${c}__nav-container__nav-list__link`}>Resources</li>
        </ul>
      {/* TODO: Search pop up  */}
      <div className={`${c}__nav-container__search`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="#FFF" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6 .1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/>
          </svg>
      </div>
      <div className={`${c}__nav-container__trial`}>
        <GenericLink
          text="Start free trial"
          url="/"
          variant="green"
        />
      </div>
      </nav>
    </header>
  )
})

export default Nav;

