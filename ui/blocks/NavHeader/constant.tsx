import { HTMLAttributeAnchorTarget } from 'react'

export type AppNavItemType = 'App' | 'Website' | 'Community'

interface AppNavItem {
  name: string
  href: string
  type: AppNavItemType
  target?: HTMLAttributeAnchorTarget | undefined
  // TODO: Split all svg code into each .svg file and import it here?
  renderSVG?: () => JSX.Element
}

export const AppNavList: AppNavItem[] = [
  // App
  {
    name: 'Models',
    href: '/models',
    type: 'App',
    renderSVG: () => {
      return (
        <svg
          className="mr-1.5 text-gray-400 group-hover:text-indigo-500"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          focusable="false"
          role="img"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path
            className="uim-quaternary"
            d="M20.23 7.24L12 12L3.77 7.24a1.98 1.98 0 0 1 .7-.71L11 2.76c.62-.35 1.38-.35 2 0l6.53 3.77c.29.173.531.418.7.71z"
            opacity=".25"
            fill="currentColor"
          ></path>
          <path
            className="uim-tertiary"
            d="M12 12v9.5a2.09 2.09 0 0 1-.91-.21L4.5 17.48a2.003 2.003 0 0 1-1-1.73v-7.5a2.06 2.06 0 0 1 .27-1.01L12 12z"
            opacity=".5"
            fill="currentColor"
          ></path>
          <path
            className="uim-primary"
            d="M20.5 8.25v7.5a2.003 2.003 0 0 1-1 1.73l-6.62 3.82c-.275.13-.576.198-.88.2V12l8.23-4.76c.175.308.268.656.27 1.01z"
            fill="currentColor"
          ></path>
        </svg>
      )
    },
  },
  {
    name: 'Datasets',
    href: '/datasets',
    type: 'App',
    renderSVG: () => {
      return (
        <svg
          className="mr-1.5 text-gray-400 group-hover:text-red-500"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          focusable="false"
          role="img"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 25 25"
        >
          <ellipse cx="12.5" cy="5" fill="currentColor" fillOpacity="0.25" rx="7.5" ry="2"></ellipse>
          <path
            d="M12.5 15C16.6421 15 20 14.1046 20 13V20C20 21.1046 16.6421 22 12.5 22C8.35786 22 5 21.1046 5 20V13C5 14.1046 8.35786 15 12.5 15Z"
            fill="currentColor"
            opacity="0.5"
          ></path>
          <path
            d="M12.5 7C16.6421 7 20 6.10457 20 5V11.5C20 12.6046 16.6421 13.5 12.5 13.5C8.35786 13.5 5 12.6046 5 11.5V5C5 6.10457 8.35786 7 12.5 7Z"
            fill="currentColor"
            opacity="0.5"
          ></path>
          <path
            d="M5.23628 12C5.08204 12.1598 5 12.8273 5 13C5 14.1046 8.35786 15 12.5 15C16.6421 15 20 14.1046 20 13C20 12.8273 19.918 12.1598 19.7637 12C18.9311 12.8626 15.9947 13.5 12.5 13.5C9.0053 13.5 6.06886 12.8626 5.23628 12Z"
            fill="currentColor"
          ></path>
        </svg>
      )
    },
  },
  {
    name: 'Spaces',
    href: '/spaces',
    type: 'App',
    renderSVG: () => {
      return (
        <svg
          className="mr-1.5 text-gray-400 group-hover:text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          focusable="false"
          role="img"
          width="1em"
          height="1em"
          viewBox="0 0 25 25"
        >
          <path
            opacity=".5"
            d="M6.016 14.674v4.31h4.31v-4.31h-4.31ZM14.674 14.674v4.31h4.31v-4.31h-4.31ZM6.016 6.016v4.31h4.31v-4.31h-4.31Z"
            fill="currentColor"
          ></path>
          <path
            opacity=".75"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 4.914C3 3.857 3.857 3 4.914 3h6.514c.884 0 1.628.6 1.848 1.414a5.171 5.171 0 0 1 7.31 7.31c.815.22 1.414.964 1.414 1.848v6.514A1.914 1.914 0 0 1 20.086 22H4.914A1.914 1.914 0 0 1 3 20.086V4.914Zm3.016 1.102v4.31h4.31v-4.31h-4.31Zm0 12.968v-4.31h4.31v4.31h-4.31Zm8.658 0v-4.31h4.31v4.31h-4.31Zm0-10.813a2.155 2.155 0 1 1 4.31 0 2.155 2.155 0 0 1-4.31 0Z"
            fill="currentColor"
          ></path>
          <path
            opacity=".25"
            d="M16.829 6.016a2.155 2.155 0 1 0 0 4.31 2.155 2.155 0 0 0 0-4.31Z"
            fill="currentColor"
          ></path>
        </svg>
      )
    },
  },
  {
    name: 'Docs',
    href: '/docs',
    type: 'App',
    renderSVG: () => {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          className="mr-1.5 text-gray-400 group-hover:text-yellow-500"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 32 32"
        >
          <path
            opacity="0.5"
            d="M20.9022 5.10334L10.8012 10.8791L7.76318 9.11193C8.07741 8.56791 8.5256 8.11332 9.06512 7.7914L15.9336 3.73907C17.0868 3.08811 18.5002 3.26422 19.6534 3.91519L19.3859 3.73911C19.9253 4.06087 20.5879 4.56025 20.9022 5.10334Z"
            fill="currentColor"
          ></path>
          <path
            d="M10.7999 10.8792V28.5483C10.2136 28.5475 9.63494 28.4139 9.10745 28.1578C8.5429 27.8312 8.074 27.3621 7.74761 26.7975C7.42122 26.2327 7.24878 25.5923 7.24756 24.9402V10.9908C7.25062 10.3319 7.42358 9.68487 7.74973 9.1123L10.7999 10.8792Z"
            fill="currentColor"
            fillOpacity="0.75"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.3368 10.8499V6.918C21.3331 6.25959 21.16 5.61234 20.8346 5.03949L10.7971 10.8727L10.8046 10.874L21.3368 10.8499Z"
            fill="currentColor"
          ></path>
          <path
            opacity="0.5"
            d="M21.7937 10.8488L10.7825 10.8741V28.5486L21.7937 28.5234C23.3344 28.5234 24.5835 27.2743 24.5835 25.7335V13.6387C24.5835 12.0979 23.4365 11.1233 21.7937 10.8488Z"
            fill="currentColor"
          ></path>
        </svg>
      )
    },
  },
  // Website
  {
    name: 'Tasks',
    href: '/tasks',
    type: 'Website',
    renderSVG: () => {
      return (
        <svg
          className="mr-1.5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path
            className="uim-tertiary"
            d="M15.273 18.728A6.728 6.728 0 1 1 22 11.999V12a6.735 6.735 0 0 1-6.727 6.728z"
            opacity=".5"
            fill="currentColor"
          ></path>
          <path
            className="uim-primary"
            d="M8.727 18.728A6.728 6.728 0 1 1 15.455 12a6.735 6.735 0 0 1-6.728 6.728z"
            fill="currentColor"
          ></path>
        </svg>
      )
    },
  },
  {
    name: 'Daily Papers',
    href: '/papers',
    type: 'Website',
    renderSVG: () => {
      return (
        <svg
          className="mr-1.5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          focusable="false"
          role="img"
          width="1em"
          height="1em"
          viewBox="0 0 12 12"
          preserveAspectRatio="xMidYMid meet"
          fill="none"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M7.55 1.02c.29 0 .58.11.8.29l1.48 1.22c.3.25.45.6.45.97v6.22c0 .7-.56 1.26-1.25 1.26H2.97c-.7 0-1.26-.56-1.26-1.26V2.28c0-.7.56-1.26 1.26-1.26h4.57Zm.11 3.63c-.76 0-1.36-.6-1.36-1.36v-.7a.62.62 0 0 0-.63-.64h-2.7a.31.31 0 0 0-.31.33v7.44c0 .18.13.33.3.33h6.07c.18 0 .31-.15.31-.33V5.3a.62.62 0 0 0-.62-.64H7.65h.01Z"
            clipRule="evenodd"
          ></path>
        </svg>
      )
    },
  },
  {
    name: 'Metrics',
    href: '/metrics',
    type: 'Website',
    renderSVG: () => {
      return (
        <svg
          className="mr-1.5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          focusable="false"
          role="img"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path
            className="uim-quaternary"
            d="M6 23H2a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1z"
            opacity=".25"
            fill="currentColor"
          ></path>
          <path
            className="uim-primary"
            d="M14 23h-4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v20a1 1 0 0 1-1 1z"
            fill="currentColor"
          ></path>
          <path
            className="uim-tertiary"
            d="M22 23h-4a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1z"
            opacity=".5"
            fill="currentColor"
          ></path>
        </svg>
      )
    },
  },
  {
    name: 'Languages',
    href: '/languages',
    type: 'Website',
    renderSVG: () => {
      return (
        <svg
          className="mr-1.5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          focusable="false"
          role="img"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path className="uim-primary" d="M17 13H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2z" fill="currentColor"></path>
          <path
            className="uim-tertiary"
            d="M12 2a10 10 0 0 0-7.743 16.33l-1.964 1.963A1 1 0 0 0 3 22h9a10 10 0 0 0 0-20zM9 7h6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2zm6 10H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zm2-4H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2z"
            opacity=".5"
            fill="currentColor"
          ></path>
          <path
            className="uim-primary"
            d="M15 17H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zm0-8H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2z"
            fill="currentColor"
          ></path>
        </svg>
      )
    },
  },
  // Community
  {
    name: 'Organizations',
    href: '/organizations',
    type: 'Website',
    renderSVG: () => {
      return (
        <svg
          className="mr-1.5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          focusable="false"
          role="img"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path
            className="uim-tertiary"
            d="M12 18a3.5 3.5 0 1 1 3.5-3.5A3.504 3.504 0 0 1 12 18z"
            opacity=".5"
            fill="currentColor"
          ></path>
          <path
            className="uim-primary"
            d="M14.64 16.772a3.452 3.452 0 0 1-5.28 0A4.988 4.988 0 0 0 7 21a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1a4.988 4.988 0 0 0-2.36-4.228z"
            fill="currentColor"
          ></path>
          <path
            className="uim-tertiary"
            d="M21 12a.996.996 0 0 1-.664-.252L12 4.338l-8.336 7.41a1 1 0 0 1-1.328-1.496l9-8a.999.999 0 0 1 1.328 0l9 8A1 1 0 0 1 21 12z"
            opacity=".5"
            fill="currentColor"
          ></path>
          <path
            className="uim-quaternary"
            d="M12 4.338l-8 7.111V21a1 1 0 0 0 1 1h3a1 1 0 0 1-1-1a4.988 4.988 0 0 1 2.36-4.228A3.469 3.469 0 0 1 8.5 14.5a3.5 3.5 0 0 1 7 0a3.469 3.469 0 0 1-.86 2.272A4.988 4.988 0 0 1 17 21a1 1 0 0 1-1 1h3a1 1 0 0 0 1-1v-9.551z"
            opacity=".25"
            fill="currentColor"
          ></path>
        </svg>
      )
    },
  },
  {
    name: 'Blog',
    href: '/blog', // blog/zh
    type: 'Community',
    renderSVG: () => {
      return (
        <svg
          className="undefined mr-1.5 text-gray-300 dark:text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          focusable="false"
          role="img"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
          style={{ transform: 'rotate(360deg)' }}
        >
          <path
            d="M10 4H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8l-2-2z"
            fill="currentColor"
          ></path>
        </svg>
      )
    },
  },
  {
    name: 'Learn',
    href: '/learn',
    type: 'Community',
    renderSVG: () => {
      return (
        <svg
          className="undefined mr-1.5 text-gray-300 dark:text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          focusable="false"
          role="img"
          width="1em"
          height="1em"
          viewBox="0 0 32 32"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.44971 14.5964L5.44977 19.5221L5.44971 19.5321L5.44977 19.5422V19.6062H5.4533C5.59676 21.0844 10.0242 22.2706 15.465 22.2706C20.9057 22.2706 25.3332 21.0844 25.4767 19.6062H25.4803L25.4802 14.8524L15.7373 17.5754L5.44971 14.5964Z"
            fill="currentColor"
            fillOpacity="0.8"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.16846 11.7412L15.7374 15.9487L30.832 11.7412V13.3494H30.8069L30.832 13.3566L15.7374 17.5754L1.16846 13.3566L1.1927 13.3494H1.16846V11.7412ZM1.16846 11.7412V11.7412L1.16849 11.7412L1.16846 11.7412ZM1.16846 11.7412V11.6674H1.41519L1.16846 11.7412ZM30.5764 11.6674H30.832V11.7412L30.5764 11.6674Z"
            fill="currentColor"
            fillOpacity="0.5"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.02827 18.7976C3.398 17.0129 4.40214 15.3593 5.21357 14.3777L5.68497 14.7674C4.91639 15.6971 3.97099 17.2621 3.62717 18.9216C3.28615 20.5676 3.53867 22.2742 5.1103 23.5887C5.88204 24.2342 6.92784 24.5392 8.1691 24.6236C9.40985 24.7079 10.8132 24.5697 12.2706 24.3583C12.9462 24.2603 13.6292 24.1473 14.3104 24.0346C14.3626 24.0259 14.4148 24.0173 14.467 24.0087C15.1987 23.8877 15.9275 23.7684 16.6346 23.6714C18.0439 23.4782 19.3924 23.3696 20.5369 23.5201L20.4572 24.1265C19.3982 23.9872 18.1177 24.0854 16.7176 24.2774C16.0201 24.373 15.2991 24.491 14.5667 24.6121C14.5143 24.6208 14.4618 24.6295 14.4093 24.6382C13.7292 24.7507 13.0404 24.8647 12.3583 24.9636C10.8913 25.1764 9.43547 25.3227 8.12763 25.2338C6.8203 25.145 5.62813 24.8191 4.71791 24.0579C2.92563 22.5589 2.65573 20.5957 3.02827 18.7976Z"
            fill="currentColor"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.4304 24.1128L20.5291 23.5358L28.0463 24.2759L27.9888 24.8599L27.966 24.8577L27.8807 25.3377L27.8992 25.3422L27.7593 25.9121L20.4304 24.1128Z"
            fill="currentColor"
            fillOpacity="0.25"
          ></path>
          <path
            d="M15.7374 15.9487L1.16846 11.7412L15.7374 7.38605L30.832 11.7412L15.7374 15.9487Z"
            fill="currentColor"
            fillOpacity="0.25"
          ></path>
        </svg>
      )
    },
  },
  {
    name: 'HF Store',
    href: '/shop',
    type: 'Community',
    renderSVG: () => {
      return (
        <svg
          className="undefined mr-1.5 text-gray-300 dark:text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 33 24"
        >
          <path
            fill="#000"
            fillOpacity=".2"
            fillRule="evenodd"
            d="M25.46 15.12a2.8 2.8 0 0 1 .57-.53l.05-.03.04-.03.08-.05a.62.62 0 0 0 .09-.08l.05-.08.02-.02.08-.12c.08-.1.2-.25.38-.38l.02-.01.05-.04a.86.86 0 0 0 .04-.03c.13-.16.28-.28.38-.36l.23-.17.06-.04a4.46 4.46 0 0 0 .22-.17l.01-.02v-.01l.06-.06c.05-.06.14-.15.27-.23a.84.84 0 0 1 .68-.34.83.83 0 0 1 .82.73v.25c-.03.2-.1.34-.15.4l-.05.08v.01c-.2.33-.42.64-.61.91l-.05.07c-.14.2-.26.4-.4.63l-.02.02-.23.37.6-.33.14-.1c.25-.16.57-.37.91-.52l.29-.14.04-.02a7.2 7.2 0 0 1 .52-.24.97.97 0 0 1 .1-.06c.02-.02.14-.1.3-.13.04 0 .2-.03.4.02a.83.83 0 0 1 .46 1.25.85.85 0 0 1-.14.17c-.05.08-.15.2-.3.31a28.53 28.53 0 0 0-1.6 1.17l-.02.01a1.01 1.01 0 0 1 .2.35 17.3 17.3 0 0 1 .75-.23h.02l.02-.02.08-.04a.8.8 0 0 1 .25-.07.83.83 0 0 1 .72.26c.36.4.17.84.15.88-.04.1-.1.17-.11.2a.83.83 0 0 1-.05.05l-.05.05a1.95 1.95 0 0 1-.85.41h-.01l-.1.03c-.2.06-.35.13-.55.27-.14.1-.29.18-.43.24.04.08.06.15.08.22l.3-.1v-.01h.01a.84.84 0 0 1 1.24.15.93.93 0 0 1 .56.25c.2.19.28.41.34.58l.1.34-.17.32a.89.89 0 0 1-.37.35l-.2.08a1.78 1.78 0 0 1-.42.06h-.05c-.28.04-.56.06-.81.07h-.11l-.6.04c-.35.03-.73.04-1.1.03l-.35.14-.95.37-.45.17a2.6 2.6 0 0 0-.39.2l-.41.22c-.57.27-1.24.34-1.75.32-.22-.01-.4-.07-.5-.11l-.07-.02a3.3 3.3 0 0 0-.05-.02l-.03-.01a4.89 4.89 0 0 1-.68-.18l-.05-.01-.3-.06a1.26 1.26 0 0 1-.48-.23l-.1-.08h-.01a.72.72 0 0 0-.2-.14h-.01a2.77 2.77 0 0 1-.36-.24c-.16-.12-.33-.3-.43-.4a4.2 4.2 0 0 0-.06-.07c-.57-.57-.41-1.32-.36-1.57v-.04c.03-.1.03-.2.04-.39 0-.17.01-.4.07-.66 0-.04.02-.08.03-.11 0-.12.02-.24.08-.35.14-.32.35-.5.52-.65.05-.04.1-.1.17-.28.12-.28.3-.55.4-.72l.08-.1a1.73 1.73 0 0 1 .55-.83l.05-.06.04-.03c.09-.22.19-.42.34-.62v-.02l.02-.05v-.01l.01-.07.07-.23a1.8 1.8 0 0 1 .25-.45l.04-.15c.05-.15.16-.4.43-.58.14-.18.3-.3.44-.36a.88.88 0 0 1 .21-.15.83.83 0 0 1 1.17.59.9.9 0 0 1 0 .37l-.04.12a14.5 14.5 0 0 1-.03.1l-.12.45-.06.18Zm.13-.6Zm-1.48-.7Zm7.5 6.72Zm-.78-.53Zm-5.18-5.55v-.01ZM7.93 13.65c.12.13.22.27.29.39a6.08 6.08 0 0 0-.04-.19l-.06-.46a13.64 13.64 0 0 0-.02-.1 1.18 1.18 0 0 1-.02-.22c0-.03 0-.14.04-.27a.83.83 0 0 1 .63-.55l.01-.01c.04-.06.14-.2.32-.33a1.34 1.34 0 0 1 1-.2c.11.02.2.06.28.1l.11.08a1.17 1.17 0 0 1 .58.82l.04.26.01.05.03.17a2.44 2.44 0 0 1 .07.78v.2l.03.47v.38c.02.22.04.29.1.42.15.26.14.57 0 .8v.01l.05.12c.1.18.24.47.32.77.05.2.08.25.13.3.15.16.33.38.43.7.04.12.05.25.04.36l.01.11c.02.26 0 .5-.01.67-.02.2-.03.3-.02.4v.03c.02.26.08 1.02-.56 1.51l-.07.06a2.75 2.75 0 0 1-.86.53 1.66 1.66 0 0 0-.23.11l-.12.07c-.12.07-.29.15-.5.17l-.31.02a4.56 4.56 0 0 0-.75.1H8.8v.01l-.07.02c-.1.02-.3.06-.52.04-.5-.05-1.16-.2-1.69-.54l-.38-.27a9.13 9.13 0 0 0-.36-.25l-.42-.23-.9-.49-.33-.18c-.37-.04-.74-.1-1.09-.18l-.58-.1-.11-.03a9.13 9.13 0 0 1-1.25-.3 1.08 1.08 0 0 1-.19-.1.89.89 0 0 1-.32-.39.83.83 0 0 1 .42-1.07l.13-.06a3.1 3.1 0 0 1 .35-.1.84.84 0 0 1 1.37-.13l.28.15.19.1.68.3a.84.84 0 0 1 .07-.16l-.3-.15c-.02 0-.03-.02-.05-.03-.24-.12-.58-.3-.88-.56a1.87 1.87 0 0 0-.6-.38l-.14-.06a1.95 1.95 0 0 1-.7-.51.83.83 0 0 1-.13-.27.83.83 0 0 1 1.32-.88l.02.02h.01l.03.02h.02l.06.03c.55.25 1.1.54 1.64.81.07.05.15.08.22.12a8.54 8.54 0 0 1-1-.95l-.01-.02-.5-.5c-.3-.3-.61-.58-.94-.87a1.08 1.08 0 0 1-.27-.35.87.87 0 0 1-.11-.18.83.83 0 0 1 .62-1.18c.2-.03.35.02.4.03.15.05.26.15.28.16l.08.08.1.06c.15.08.28.17.39.24l.04.03.27.17c.32.2.6.44.83.64l.14.11c.17.15.35.28.54.41l-.18-.4-.01-.02c-.11-.25-.2-.46-.32-.67l-.04-.08c-.16-.3-.33-.63-.48-.98v-.01l-.05-.08c-.03-.08-.09-.23-.1-.42l.01-.08a.86.86 0 0 1 .17-.47.83.83 0 0 1 1.39.1c.12.1.2.2.25.27l.04.06v.01a.66.66 0 0 0 .07.08 4.56 4.56 0 0 0 .4.38 2.23 2.23 0 0 1 .33.42l.04.03.04.04.02.02a1.59 1.59 0 0 1 .4.55v.02l.05.1.08.08.07.06.04.03.04.04.21.2Zm2.11 4.27a.87.87 0 0 1-.38.23c.04.02.13.1.2.18.02.02.1.1.15.22l.03.08.19.08.04-.13v-.02a5.19 5.19 0 0 0 .1-.3c-.1-.17-.17-.33-.22-.48a.84.84 0 0 1-.1.14Zm-8.36 1.82Zm-.27-1.12Zm6.76-5.2Zm-.05-.06Zm2.03-.21Z"
            clipRule="evenodd"
          ></path>
          <path
            fill="#000"
            fillOpacity=".7"
            fillRule="evenodd"
            d="M20.44 8.09Zm-1.07 2.3-.04-.01a1.29 1.29 0 0 1-1.03-1.5c0-.06.05-.39.18-.67a1.65 1.65 0 0 1 1.22-.93c.85-.14 1.53.35 1.7.48l.04.02c.43.3.55.73.59.93a1.98 1.98 0 0 1-.1 1c-.05.1-.14.32-.33.52a1.34 1.34 0 0 1-.74.4 1.94 1.94 0 0 1-.28.03l-.11.02a1.39 1.39 0 0 1-1.1-.3Zm1.35.23Zm.13-1.42Z"
            clipRule="evenodd"
          ></path>
          <path
            fill="#000"
            fillOpacity=".7"
            d="M14.04 11.5c.33 0 .64.11.88.31H15.22a6.06 6.06 0 0 1 1.21.13h.01l.33.06.25.05.1.02.06.01.09.02c.17 0 .32.03.4.04h.05v.01h.03c.13-.07.24-.1.3-.13l.06-.02h.03c.34-.13.65-.15.87-.15l.23.02h.14c.05 0 .3 0 .57.1a1.36 1.36 0 0 1 .86 1.65v.09a1.8 1.8 0 0 1-.19.55l-.06.18a1.6 1.6 0 0 1-.24.4l-.04.06-.19.24a2.08 2.08 0 0 1-.55.44l-.04.02-.04.03-.08.05-.02.02-.25.19c-.62.42-1.37.47-1.76.47a5.14 5.14 0 0 1-1.67-.26 5.25 5.25 0 0 1-1.15-.44c-.44-.26-.72-.7-.78-.8v-.01a2.92 2.92 0 0 0-.1-.13l-.01-.01a5.25 5.25 0 0 1-.18-.24c0-.02-.02-.04-.04-.06-.16-.22-.6-.8-.62-1.57-.03-.7.53-1.3 1.24-1.33Z"
          ></path>
          <path
            fill="#000"
            fillRule="evenodd"
            d="M18.16 16Zm-.35.13-.08-.12Zm-.73-1.4a1 1 0 0 1 .3-.18l.1-.04h.03c.2-.08.4-.07.5-.06.13.02.28.06.42.15a.98.98 0 0 1 .4.48l.01.02.04.08.06.16a1 1 0 0 1-.09.78 1.44 1.44 0 0 1-.69.61c-.28.17-.55.19-.7.19-.2 0-.42.01-.62.03h-.06l-.13.01h-.05a.85.85 0 0 1-.8-.13.85.85 0 0 1-.54-1.13l.12-.2.03-.1a1.42 1.42 0 0 1 .54-.59l.06-.05a.98.98 0 0 1 .3-.15.89.89 0 0 1 .77.12Zm-1.19.14Z"
            clipRule="evenodd"
          ></path>
          <path
            fill="#000"
            fillOpacity=".1"
            fillRule="evenodd"
            d="M12.26 1.45c.2-.04.44-.07.61-.09h.03a7.2 7.2 0 0 0 .63-.14 14.54 14.54 0 0 0 2.71-.8c.08-.04.16-.08.26-.11.18-.08.43-.18.73-.22.51-.08 1 .16 1.27.56l.34-.05h.02c.27-.05.64-.11 1.03-.12h.03a4.63 4.63 0 0 1 .24 0 1.44 1.44 0 0 1 .5.09 1.3 1.3 0 0 1 .8 1.36l.38-.05.78-.06.14-.01c.27-.02.5-.03.7-.07h.02l.06-.02a2.1 2.1 0 0 1 .61-.1 6.52 6.52 0 0 1 .26 0 1.5 1.5 0 0 1 .45.07 1.3 1.3 0 0 1 .19 2.35c-.12.06-.23.1-.27.1l-.02.02-.03.02a3.21 3.21 0 0 1-.34.2l.49-.11.35-.13.04-.01c.26-.1.63-.23 1.04-.3.23-.04.46-.05.58-.05h.09a9.2 9.2 0 0 1 .38-.05 1.32 1.32 0 0 1 .68.15 1.29 1.29 0 0 1 .4 1.95h.02c.37.1.6.34.65.4a1.31 1.31 0 0 1-.24 2.07c-.12.07-.24.12-.3.14-.2.06-.39.07-.5.08-.4.21-.85.44-1.32.63l-.46.18-.17.07a1.42 1.42 0 0 1 .05.1h.13a4.54 4.54 0 0 1 .28.03c.28-.12.57-.23.86-.33l.41-.15h.03c.06-.04.2-.1.5-.23l.12-.05c.22-.1.53-.24.84-.33l.28-.07c.02 0 .15-.04.3-.04a1.31 1.31 0 0 1 .91.34 1.29 1.29 0 0 1-.27 2.09l-.12.07-.58.31-.04.02c-.08.08-.16.13-.23.17-.12.07-.22.1-.25.11l-.3.1h-.02l-.42.14-.13.04a1.35 1.35 0 0 1 .44.6h-.07a.83.83 0 0 0-.67.33c-.14.1-.23.18-.28.24l-.05.06-.02.02a4.65 4.65 0 0 1-.22.18l-.03.02-.03.02-.23.17c-.1.08-.25.2-.38.36l-.02.02-.02.01-.02.02-.03.02-.02.01a1.59 1.59 0 0 0-.46.5l-.02.02-.05.08s-.02.03-.1.08l-.07.05-.04.03-.05.03a2.67 2.67 0 0 0-.57.53l.06-.18c.05-.16.1-.33.12-.45l.02-.06v-.03l.05-.13.01-.1c0-.02.02-.14 0-.27a.83.83 0 0 0-1.4-.44c-.12.07-.29.18-.43.36-.27.18-.38.43-.43.58l-.04.15-.03.04v.01c-.05.07-.15.22-.22.4a2.14 2.14 0 0 0-.08.3l-.01.04v.02l-.01.02c-.15.2-.25.4-.34.62l-.04.03-.03.03-.02.02c-.23.2-.36.43-.42.57l-.08.17a4.18 4.18 0 0 0-.52.92c-.08.19-.13.24-.18.28-.17.14-.38.33-.52.65a.83.83 0 0 0-.08.35l-.03.1c-.06.26-.07.5-.07.67 0 .19-.01.3-.03.39l-.01.04c-.04.18-.12.59.01 1.02-.34.08-.67.16-.98.25l-.49.12a2.3 2.3 0 0 0-.48.14c-.45.21-1.17.48-1.9.49l-.08.02h-.03c-.1.03-.3.08-.52.1-.36.03-.57.05-.78.1-.08.02-.27.07-.5.06a1.33 1.33 0 0 1-1.16-.87h-.42a1.5 1.5 0 0 1-.48-.03 1.34 1.34 0 0 1-.9-.66 1.8 1.8 0 0 0 .29-1.25v-.04c-.01-.1 0-.2.02-.38v-.01a3.58 3.58 0 0 0 0-.78.83.83 0 0 0-.04-.35c-.1-.33-.28-.55-.43-.72-.05-.04-.08-.1-.13-.3-.08-.29-.22-.57-.32-.76a4.9 4.9 0 0 1-.05-.12.83.83 0 0 0 0-.81.83.83 0 0 1-.1-.42v-.37c0-.15 0-.31-.02-.49v-.35c0-.15-.01-.38-.08-.62l-.03-.17v-.05a5.83 5.83 0 0 0-.05-.26 1.17 1.17 0 0 0-.58-.82l-.11-.08a.98.98 0 0 0-.52-.13c-.32 0-.56.1-.76.23a1.1 1.1 0 0 0-.32.33v.01a.83.83 0 0 0-.68.82v.1l.02.12.01.04v.06a5.36 5.36 0 0 0 .1.65 2.8 2.8 0 0 0-.49-.6l-.04-.04-.04-.03a6.1 6.1 0 0 1-.15-.15 2.62 2.62 0 0 1-.05-.08v-.03a3.19 3.19 0 0 0-.18-.3l.25-.06.3-.08c-.03-.24 0-.45.06-.62a1.31 1.31 0 0 1 .45-.61l-.3.1-.06.02c-.08.03-.28.09-.5.11-.08.01-.36.05-.66-.05a1.35 1.35 0 0 1-.34-2.42 1.76 1.76 0 0 1 .46-.24c-.17-.03-.4-.1-.6-.27a1.3 1.3 0 0 1-.2-1.77c.06-.1.14-.17.16-.2.08-.07.22-.18.37-.26.28-.16.56-.26.82-.33a1.28 1.28 0 0 1-.12-1.4c.2-.37.5-.55.64-.62a2.01 2.01 0 0 1 .64-.2l.04-.01.13-.04.63-.2.03-.02c.33-.12.68-.26 1.06-.38-.03-.28.04-.49.05-.52a1.29 1.29 0 0 1 .2-.37l.02-.02.01-.03a4.42 4.42 0 0 1 .11-.13l.03-.03.03-.03.06-.07c.41-.38.88-.53 1.23-.6Zm-6.8 12.91a7.47 7.47 0 0 1-.06-.04v-.11l.06.15Zm23.93.69c0-.14-.03-.27-.07-.39l.05-.09c.07-.13.24-.47.16-.9l-.02.04-.05.07v.01c-.2.33-.42.64-.61.91l-.05.07c-.14.2-.26.4-.4.63l-.02.02-.23.37a7.57 7.57 0 0 0 .74-.43l.5-.31ZM24.3 4.18ZM6.6 6.55Zm23.56 4.34h.02-.02ZM23.83 7.1l.44-.08-.53.2a1.66 1.66 0 0 0-.1-.06l-.02-.02.21-.04ZM8.4 4.07Zm17.2 10.45Zm-15.55 3.4a.87.87 0 0 1-.38.23c.04.02.13.1.2.18.02.02.1.1.15.22l.03.08.19.08.04-.13v-.02a5.19 5.19 0 0 0 .1-.3c-.1-.17-.17-.33-.22-.48a.84.84 0 0 1-.1.14Zm-1.87-4.5Zm-.05-.06Zm2.03-.21Zm10.3-5.06Zm-1.12 2.29h.04a1.33 1.33 0 0 0 1.1.3l.11-.02h.03a1.94 1.94 0 0 0 .5-.1c.09-.04.3-.13.49-.33s.28-.42.32-.53a1.98 1.98 0 0 0 .1-1 1.43 1.43 0 0 0-.61-.94c-.18-.13-.86-.62-1.7-.48a1.65 1.65 0 0 0-1.23.93c-.13.28-.18.6-.18.66v.01c-.13.7.33 1.37 1.03 1.5Zm1.52-1.18Zm-6.81 2.3c.33 0 .64.11.88.31H15.22a6.06 6.06 0 0 1 1.21.13h.01l.33.06.25.05.1.02.06.01.09.02c.17 0 .32.03.4.04h.05v.01h.03c.13-.07.24-.1.3-.13l.06-.02h.03c.34-.13.65-.15.87-.15l.23.02h.14c.05 0 .3 0 .57.1a1.36 1.36 0 0 1 .86 1.65v.09a1.8 1.8 0 0 1-.19.55l-.06.18a1.6 1.6 0 0 1-.24.4l-.04.06-.19.24a2.08 2.08 0 0 1-.55.44l-.04.02-.04.03s-.02 0-.08.05l-.02.02-.25.19c-.62.42-1.37.47-1.76.47a5.14 5.14 0 0 1-1.67-.26 5.25 5.25 0 0 1-1.15-.44c-.44-.26-.72-.7-.78-.8v-.01a2.92 2.92 0 0 0-.1-.13l-.01-.01a5.25 5.25 0 0 1-.18-.24c0-.02-.02-.04-.04-.06-.16-.22-.6-.8-.62-1.57-.03-.7.53-1.3 1.24-1.33Zm.03-4.29a1.65 1.65 0 0 0-.7.04c-.19.05-.58.2-.85.6a1.65 1.65 0 0 0-.53 1.58c.09.45.4.94 1 1.15.07.02.28.1.53.1.65.02 1.04-.38 1.16-.5l.13-.16.01-.01.02-.02a1.3 1.3 0 0 0 .41-1.95v-.01a1.66 1.66 0 0 0-1.17-.8ZM13.06 9.4Z"
            clipRule="evenodd"
          ></path>
          <path
            fill="#000"
            fillOpacity=".7"
            fillRule="evenodd"
            d="M13.36 7.25a1.65 1.65 0 0 1 1.74.57c.07.08.12.17.14.2l.01.02a1.29 1.29 0 0 1-.4 1.95 2.2 2.2 0 0 1-.03.02l-.14.17a1.53 1.53 0 0 1-1.7.4c-.58-.21-.9-.7-1-1.15a1.65 1.65 0 0 1 .54-1.58c.27-.4.66-.55.84-.6Zm-.93.75Zm2.4 2Zm-1.77-.61Z"
            clipRule="evenodd"
          ></path>
        </svg>
      )
    },
  },
  {
    name: 'Discord',
    href: '/join/discord',
    type: 'Community',
    target: '_blank',
    renderSVG: () => {
      return (
        <svg
          className="undefined mr-1.5 text-gray-300 dark:text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          focusable="false"
          role="img"
          width="1em"
          height="1em"
          viewBox="0 0 32 32"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M25.6933 7.10665C23.92 6.27998 22 5.67998 20 5.33331C19.9825 5.33275 19.965 5.33604 19.9489 5.34295C19.9328 5.34987 19.9183 5.36023 19.9067 5.37331C19.6667 5.81331 19.3867 6.38665 19.2 6.82665C17.0787 6.50665 14.9213 6.50665 12.8 6.82665C12.6133 6.37331 12.3333 5.81331 12.08 5.37331C12.0667 5.34665 12.0267 5.33331 11.9867 5.33331C9.98666 5.67998 8.07999 6.27998 6.29333 7.10665C6.27999 7.10665 6.26666 7.11998 6.25333 7.13331C2.62666 12.56 1.62666 17.84 2.11999 23.0666C2.11999 23.0933 2.13333 23.12 2.15999 23.1333C4.55999 24.8933 6.86666 25.96 9.14666 26.6666C9.18666 26.68 9.22666 26.6666 9.23999 26.64C9.77333 25.9066 10.2533 25.1333 10.6667 24.32C10.6933 24.2666 10.6667 24.2133 10.6133 24.2C9.85333 23.9066 9.13333 23.56 8.42666 23.16C8.37333 23.1333 8.37333 23.0533 8.41333 23.0133C8.55999 22.9066 8.70666 22.7866 8.85333 22.68C8.87999 22.6533 8.91999 22.6533 8.94666 22.6666C13.5333 24.76 18.48 24.76 23.0133 22.6666C23.04 22.6533 23.08 22.6533 23.1067 22.68C23.2533 22.8 23.4 22.9066 23.5467 23.0266C23.6 23.0666 23.6 23.1466 23.5333 23.1733C22.84 23.5866 22.1067 23.92 21.3467 24.2133C21.2933 24.2266 21.28 24.2933 21.2933 24.3333C21.72 25.1466 22.2 25.92 22.72 26.6533C22.76 26.6666 22.8 26.68 22.84 26.6666C25.1333 25.96 27.44 24.8933 29.84 23.1333C29.8667 23.12 29.88 23.0933 29.88 23.0666C30.4667 17.0266 28.9067 11.7866 25.7467 7.13331C25.7333 7.11998 25.72 7.10665 25.6933 7.10665V7.10665ZM11.36 19.88C9.98666 19.88 8.83999 18.6133 8.83999 17.0533C8.83999 15.4933 9.95999 14.2266 11.36 14.2266C12.7733 14.2266 13.8933 15.5066 13.88 17.0533C13.88 18.6133 12.76 19.88 11.36 19.88ZM20.6533 19.88C19.28 19.88 18.1333 18.6133 18.1333 17.0533C18.1333 15.4933 19.2533 14.2266 20.6533 14.2266C22.0667 14.2266 23.1867 15.5066 23.1733 17.0533C23.1733 18.6133 22.0667 19.88 20.6533 19.88Z"
            fill="currentColor"
          ></path>
        </svg>
      )
    },
  },
  {
    name: 'Classrooms',
    href: '/classrooms',
    type: 'Community',
    target: '_blank',
    renderSVG: () => {
      return (
        <svg
          className="undefined mr-1.5 text-gray-300 dark:text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          focusable="false"
          role="img"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path
            className="uim-tertiary"
            d="M12 18a3.5 3.5 0 1 1 3.5-3.5A3.504 3.504 0 0 1 12 18z"
            opacity=".5"
            fill="currentColor"
          ></path>
          <path
            className="uim-primary"
            d="M14.64 16.772a3.452 3.452 0 0 1-5.28 0A4.988 4.988 0 0 0 7 21a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1a4.988 4.988 0 0 0-2.36-4.228z"
            fill="currentColor"
          ></path>
          <path
            className="uim-tertiary"
            d="M21 12a.996.996 0 0 1-.664-.252L12 4.338l-8.336 7.41a1 1 0 0 1-1.328-1.496l9-8a.999.999 0 0 1 1.328 0l9 8A1 1 0 0 1 21 12z"
            opacity=".5"
            fill="currentColor"
          ></path>
          <path
            className="uim-quaternary"
            d="M12 4.338l-8 7.111V21a1 1 0 0 0 1 1h3a1 1 0 0 1-1-1a4.988 4.988 0 0 1 2.36-4.228A3.469 3.469 0 0 1 8.5 14.5a3.5 3.5 0 0 1 7 0a3.469 3.469 0 0 1-.86 2.272A4.988 4.988 0 0 1 17 21a1 1 0 0 1-1 1h3a1 1 0 0 0 1-1v-9.551z"
            opacity=".25"
            fill="currentColor"
          ></path>
        </svg>
      )
    },
  },
  {
    name: 'Forum',
    href: 'https://discuss.huggingface.co/',
    type: 'Community',
    target: '_blank',
    renderSVG: () => {
      return (
        <svg
          className="undefined mr-1.5 text-gray-300 dark:text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          focusable="false"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path
            d="M12.077 3C7.149 3 3 6.96 3 11.843V21l9.075-.01c4.928 0 8.925-4.11 8.925-8.993C21 7.113 17 3 12.077 3zm3.92 12.859a5.568 5.568 0 0 1-6.102 1.043l-3.595.805l1.001-3.192a5.435 5.435 0 0 1 .11-5.415a5.55 5.55 0 0 1 4.753-2.678v.001h.006a5.533 5.533 0 0 1 5.131 3.438a5.442 5.442 0 0 1-1.304 5.998z"
            fill="currentColor"
          ></path>
        </svg>
      )
    },
  },
  {
    name: 'Github',
    href: 'https://github.com/huggingface',
    type: 'Community',
    target: '_blank',
    renderSVG: () => {
      return (
        <svg
          className="mr-1.5 text-sm text-gray-300 dark:text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          focusable="false"
          role="img"
          width="1.03em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 256 250"
        >
          <path
            d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46c6.397 1.185 8.746-2.777 8.746-6.158c0-3.052-.12-13.135-.174-23.83c-35.61 7.742-43.124-15.103-43.124-15.103c-5.823-14.795-14.213-18.73-14.213-18.73c-11.613-7.944.876-7.78.876-7.78c12.853.902 19.621 13.19 19.621 13.19c11.417 19.568 29.945 13.911 37.249 10.64c1.149-8.272 4.466-13.92 8.127-17.116c-28.431-3.236-58.318-14.212-58.318-63.258c0-13.975 5-25.394 13.188-34.358c-1.329-3.224-5.71-16.242 1.24-33.874c0 0 10.749-3.44 35.21 13.121c10.21-2.836 21.16-4.258 32.038-4.307c10.878.049 21.837 1.47 32.066 4.307c24.431-16.56 35.165-13.12 35.165-13.12c6.967 17.63 2.584 30.65 1.255 33.873c8.207 8.964 13.173 20.383 13.173 34.358c0 49.163-29.944 59.988-58.447 63.157c4.591 3.972 8.682 11.762 8.682 23.704c0 17.126-.148 30.91-.148 35.126c0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002C256 57.307 198.691 0 128.001 0zm-80.06 182.34c-.282.636-1.283.827-2.194.39c-.929-.417-1.45-1.284-1.15-1.922c.276-.655 1.279-.838 2.205-.399c.93.418 1.46 1.293 1.139 1.931zm6.296 5.618c-.61.566-1.804.303-2.614-.591c-.837-.892-.994-2.086-.375-2.66c.63-.566 1.787-.301 2.626.591c.838.903 1 2.088.363 2.66zm4.32 7.188c-.785.545-2.067.034-2.86-1.104c-.784-1.138-.784-2.503.017-3.05c.795-.547 2.058-.055 2.861 1.075c.782 1.157.782 2.522-.019 3.08zm7.304 8.325c-.701.774-2.196.566-3.29-.49c-1.119-1.032-1.43-2.496-.726-3.27c.71-.776 2.213-.558 3.315.49c1.11 1.03 1.45 2.505.701 3.27zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033c-1.448-.439-2.395-1.613-2.103-2.626c.301-1.01 1.747-1.484 3.207-1.028c1.446.436 2.396 1.602 2.095 2.622zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95c-1.53.034-2.769-.82-2.786-1.86c0-1.065 1.202-1.932 2.733-1.958c1.522-.03 2.768.818 2.768 1.868zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37c-1.485.271-2.861-.365-3.05-1.386c-.184-1.056.893-2.114 2.376-2.387c1.514-.263 2.868.356 3.061 1.403z"
            fill="currentColor"
          ></path>
        </svg>
      )
    },
  },
]
