import { AvatarIcon, ImageIcon } from "@radix-ui/react-icons";

type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  add_meeting: (props: IconProps) => (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M27.8571 17.1429H17.1429V27.8571C17.1429 28.4255 16.9171 28.9705 16.5152 29.3724C16.1134 29.7742 15.5683 30 15 30C14.4317 30 13.8866 29.7742 13.4848 29.3724C13.0829 28.9705 12.8571 28.4255 12.8571 27.8571V17.1429H2.14286C1.57454 17.1429 1.02949 16.9171 0.627629 16.5152C0.225765 16.1134 0 15.5683 0 15C0 14.4317 0.225765 13.8866 0.627629 13.4848C1.02949 13.0829 1.57454 12.8571 2.14286 12.8571H12.8571V2.14286C12.8571 1.57454 13.0829 1.02949 13.4848 0.627628C13.8866 0.225764 14.4317 0 15 0C15.5683 0 16.1134 0.225764 16.5152 0.627628C16.9171 1.02949 17.1429 1.57454 17.1429 2.14286V12.8571H27.8571C28.4255 12.8571 28.9705 13.0829 29.3724 13.4848C29.7742 13.8866 30 14.4317 30 15C30 15.5683 29.7742 16.1134 29.3724 16.5152C28.9705 16.9171 28.4255 17.1429 27.8571 17.1429Z"
        fill="white"
      />
    </svg>
  ),
  add_personal: (props: IconProps) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.5714 11.4286H11.4286V18.5714C11.4286 18.9503 11.2781 19.3137 11.0102 19.5816C10.7422 19.8495 10.3789 20 10 20C9.62112 20 9.25776 19.8495 8.98985 19.5816C8.72194 19.3137 8.57143 18.9503 8.57143 18.5714V11.4286H1.42857C1.04969 11.4286 0.686328 11.2781 0.418419 11.0102C0.15051 10.7422 0 10.3789 0 10C0 9.62112 0.15051 9.25776 0.418419 8.98985C0.686328 8.72194 1.04969 8.57143 1.42857 8.57143H8.57143V1.42857C8.57143 1.04969 8.72194 0.686328 8.98985 0.418419C9.25776 0.150509 9.62112 0 10 0C10.3789 0 10.7422 0.150509 11.0102 0.418419C11.2781 0.686328 11.4286 1.04969 11.4286 1.42857V8.57143H18.5714C18.9503 8.57143 19.3137 8.72194 19.5816 8.98985C19.8495 9.25776 20 9.62112 20 10C20 10.3789 19.8495 10.7422 19.5816 11.0102C19.3137 11.2781 18.9503 11.4286 18.5714 11.4286Z"
        fill="#C9DDFF"
      />
    </svg>
  ),
  call_ended: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#d80e0e"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-phone-off"
      {...props}
    >
      <path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91" />
      <line x1="22" x2="2" y1="2" y2="22" />
    </svg>
  ),
  badge_check: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-badge-check"
      {...props}
    >
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  calendar: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-calendar"
      {...props}
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  ),
  chevron_left: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-chevron-left"
      {...props}
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  ),
  chevron_right: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-chevron-right"
      {...props}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  ),

  copy: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-copy"
      {...props}
    >
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  ),
  hand: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-hand-metal"
      {...props}
    >
      <path d="M18 12.5V10a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4" />
      <path d="M14 11V9a2 2 0 1 0-4 0v2" />
      <path d="M10 10.5V5a2 2 0 1 0-4 0v9" />
      <path d="m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5" />
    </svg>
  ),
  home: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 17.99V14.99M9.02 2.83999L3.63 7.03999C2.73 7.73999 2 9.22999 2 10.36V17.77C2 20.09 3.89 21.99 6.21 21.99H17.79C20.11 21.99 22 20.09 22 17.78V10.5C22 9.28999 21.19 7.73999 20.2 7.04999L14.02 2.71999C12.62 1.73999 10.37 1.78999 9.02 2.83999Z"
        stroke="#C9DDFF"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  join_meeting: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-user-round-plus"
      {...props}
    >
      <path d="M2 21a8 8 0 0 1 13.292-6" />
      <circle cx="10" cy="8" r="5" />
      <path d="M19 16v6" />
      <path d="M22 19h-6" {...props} />
    </svg>
  ),
  loading: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" {...props}>
      <radialGradient
        id="a10"
        cx=".66"
        fx=".66"
        cy=".3125"
        fy=".3125"
        gradientTransform="scale(1.5)"
      >
        <stop offset="0" stop-color="#C9DDFF"></stop>
        <stop offset=".3" stop-color="#C9DDFF" stop-opacity=".9"></stop>
        <stop offset=".6" stop-color="#C9DDFF" stop-opacity=".6"></stop>
        <stop offset=".8" stop-color="#C9DDFF" stop-opacity=".3"></stop>
        <stop offset="1" stop-color="#C9DDFF" stop-opacity="0"></stop>
      </radialGradient>
      <circle
        transform-origin="center"
        fill="none"
        stroke="url(#a10)"
        stroke-width="15"
        stroke-linecap="round"
        stroke-dasharray="200 1000"
        stroke-dashoffset="0"
        cx="100"
        cy="100"
        r="70"
      >
        <animateTransform
          type="rotate"
          attributeName="transform"
          calcMode="spline"
          dur="2"
          values="360;0"
          keyTimes="0;1"
          keySplines="0 0 1 1"
          repeatCount="indefinite"
        ></animateTransform>
      </circle>
      <circle
        transform-origin="center"
        fill="none"
        opacity=".2"
        stroke="#C9DDFF"
        stroke-width="15"
        stroke-linecap="round"
        cx="100"
        cy="100"
        r="70"
      ></circle>
    </svg>
  ),

  menu: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-menu"
      {...props}
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  ),
  play: (props: IconProps) => (
    <svg
      width="11"
      height="12"
      viewBox="0 0 11 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.82367 5.07419L1.9443 0.254583C1.77906 0.153848 1.59005 0.0987593 1.39656 0.0949397C1.20307 0.0911201 1.01203 0.138707 0.842945 0.232842C0.673857 0.326977 0.532773 0.464291 0.434094 0.630767C0.335414 0.797244 0.282671 0.986922 0.28125 1.18044V10.8197C0.282671 11.0132 0.335414 11.2029 0.434094 11.3693C0.532773 11.5358 0.673857 11.6731 0.842945 11.7673C1.01203 11.8614 1.20307 11.909 1.39656 11.9052C1.59005 11.9013 1.77906 11.8463 1.9443 11.7455L9.82367 6.92591C9.98255 6.8292 10.1139 6.69323 10.205 6.53108C10.2961 6.36893 10.344 6.18605 10.344 6.00005C10.344 5.81405 10.2961 5.63118 10.205 5.46903C10.1139 5.30688 9.98255 5.17091 9.82367 5.07419ZM1.59375 10.4215V1.57857L8.82125 6.00005L1.59375 10.4215Z"
        fill="white"
      />
    </svg>
  ),
  previous: (props: IconProps) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5 0C5.55228 0 6 0.44772 6 1V2H14V1C14 0.44772 14.4477 0 15 0C15.5523 0 16 0.44772 16 1V2H17C18.6569 2 20 3.34315 20 5V12C20 12.5523 19.5523 13 19 13C18.4477 13 18 12.5523 18 12V8H2V17C2 17.5523 2.44772 18 3 18H8C8.5523 18 9 18.4477 9 19C9 19.5523 8.5523 20 8 20H3C1.34315 20 0 18.6569 0 17V5C0 3.34315 1.34315 2 3 2H4V1C4 0.44772 4.44772 0 5 0ZM3 4C2.44772 4 2 4.44772 2 5V6H18V5C18 4.44772 17.5523 4 17 4H3Z"
        fill="#C9DDFF"
      />
      <path
        d="M14.7071 15.7071C15.0976 15.3166 15.0976 14.6834 14.7071 14.2929C14.3166 13.9024 13.6834 13.9024 13.2929 14.2929L11.2929 16.2929C10.9024 16.6834 10.9024 17.3166 11.2929 17.7071L13.2929 19.7071C13.6834 20.0976 14.3166 20.0976 14.7071 19.7071C15.0976 19.3166 15.0976 18.6834 14.7071 18.2929L13.4142 17L14.7071 15.7071Z"
        fill="#C9DDFF"
      />
      <path
        d="M19.7071 14.2929C20.0976 14.6834 20.0976 15.3166 19.7071 15.7071L18.4142 17L19.7071 18.2929C20.0976 18.6834 20.0976 19.3166 19.7071 19.7071C19.3166 20.0976 18.6834 20.0976 18.2929 19.7071L16.2929 17.7071C15.9024 17.3166 15.9024 16.6834 16.2929 16.2929L18.2929 14.2929C18.6834 13.9024 19.3166 13.9024 19.7071 14.2929Z"
        fill="#C9DDFF"
      />
    </svg>
  ),
  share: (props: IconProps) => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.7143 6.15183L10.0893 8.77683C9.96601 8.90012 9.79881 8.96938 9.62445 8.96938C9.4501 8.96938 9.2829 8.90012 9.15961 8.77683C9.03633 8.65355 8.96707 8.48634 8.96707 8.31199C8.96707 8.13764 9.03633 7.97043 9.15961 7.84715L10.6641 6.34379H9.02344C8.00477 6.34345 7.01488 6.68172 6.20945 7.3054C5.40402 7.92907 4.82873 8.80277 4.57406 9.7891C4.55252 9.87255 4.51475 9.95094 4.46291 10.0198C4.41107 10.0886 4.34617 10.1466 4.27193 10.1904C4.19769 10.2342 4.11555 10.2629 4.0302 10.2749C3.94486 10.2869 3.85798 10.282 3.77453 10.2605C3.69108 10.239 3.61269 10.2012 3.54384 10.1493C3.47498 10.0975 3.41701 10.0326 3.37324 9.95837C3.32947 9.88413 3.30074 9.80199 3.28871 9.71664C3.27668 9.6313 3.28158 9.54442 3.30313 9.46097C3.63003 8.19261 4.3695 7.069 5.40511 6.26705C6.44071 5.4651 7.71363 5.03036 9.02344 5.03128H10.6641L9.1607 3.52628C9.03742 3.403 8.96816 3.23579 8.96816 3.06144C8.96816 2.88709 9.03742 2.71988 9.1607 2.5966C9.28399 2.47331 9.4512 2.40405 9.62555 2.40405C9.7999 2.40405 9.96711 2.47331 10.0904 2.5966L12.7154 5.2216C12.7766 5.28265 12.8251 5.35518 12.8582 5.43504C12.8913 5.5149 12.9082 5.60051 12.9081 5.68694C12.908 5.77338 12.8909 5.85894 12.8576 5.93872C12.8243 6.0185 12.7756 6.09093 12.7143 6.15183ZM10.5 11.1563H2.40625V4.81253C2.40625 4.63849 2.33711 4.47157 2.21404 4.3485C2.09097 4.22543 1.92405 4.15628 1.75 4.15628C1.57595 4.15628 1.40903 4.22543 1.28596 4.3485C1.16289 4.47157 1.09375 4.63849 1.09375 4.81253V11.375C1.09375 11.6651 1.20898 11.9433 1.4141 12.1484C1.61922 12.3536 1.89742 12.4688 2.1875 12.4688H10.5C10.674 12.4688 10.841 12.3996 10.964 12.2766C11.0871 12.1535 11.1563 11.9866 11.1563 11.8125C11.1563 11.6385 11.0871 11.4716 10.964 11.3485C10.841 11.2254 10.674 11.1563 10.5 11.1563Z"
        fill="#C9DDFF"
      />
    </svg>
  ),
  three_dots: (props: IconProps) => (
    <svg
      width="4"
      height="18"
      viewBox="0 0 4 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM2 14C0.9 14 0 14.9 0 16C0 17.1 0.9 18 2 18C3.1 18 4 17.1 4 16C4 14.9 3.1 14 2 14ZM2 7C0.9 7 0 7.9 0 9C0 10.1 0.9 11 2 11C3.1 11 4 10.1 4 9C4 7.9 3.1 7 2 7Z"
        fill="#C9DDFF"
      />
    </svg>
  ),
  up_coming: (props: IconProps) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5 0C5.55228 0 6 0.44772 6 1V2H14V1C14 0.44772 14.4477 0 15 0C15.5523 0 16 0.44772 16 1V2H17C18.6569 2 20 3.34315 20 5V12C20 12.5523 19.5523 13 19 13C18.4477 13 18 12.5523 18 12V8H2V17C2 17.5523 2.44772 18 3 18H8C8.5523 18 9 18.4477 9 19C9 19.5523 8.5523 20 8 20H3C1.34315 20 0 18.6569 0 17V5C0 3.34315 1.34315 2 3 2H4V1C4 0.44772 4.44772 0 5 0ZM3 4C2.44772 4 2 4.44772 2 5V6H18V5C18 4.44772 17.5523 4 17 4H3Z"
        fill="#C9DDFF"
      />
      <path
        d="M16.2929 15.7071C15.9024 15.3166 15.9024 14.6834 16.2929 14.2929C16.6834 13.9024 17.3166 13.9024 17.7071 14.2929L19.7071 16.2929C20.0976 16.6834 20.0976 17.3166 19.7071 17.7071L17.7071 19.7071C17.3166 20.0976 16.6834 20.0976 16.2929 19.7071C15.9024 19.3166 15.9024 18.6834 16.2929 18.2929L17.5858 17L16.2929 15.7071Z"
        fill="#C9DDFF"
      />
      <path
        d="M11.2929 14.2929C10.9024 14.6834 10.9024 15.3166 11.2929 15.7071L12.5858 17L11.2929 18.2929C10.9024 18.6834 10.9024 19.3166 11.2929 19.7071C11.6834 20.0976 12.3166 20.0976 12.7071 19.7071L14.7071 17.7071C15.0976 17.3166 15.0976 16.6834 14.7071 16.2929L12.7071 14.2929C12.3166 13.9024 11.6834 13.9024 11.2929 14.2929Z"
        fill="#C9DDFF"
      />
    </svg>
  ),
  video: (props: IconProps) => (
    <svg
      width="22"
      height="16"
      viewBox="0 0 22 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.2968 11.5383C15.3777 13.3704 13.8991 14.9196 11.9946 14.9975C11.8543 15.0034 5.01526 14.9896 5.01526 14.9896C3.11991 15.1335 1.4611 13.7715 1.3116 11.9463C1.30034 11.8103 1.30341 4.47219 1.30341 4.47219C1.21945 2.63815 2.69599 1.08499 4.60158 1.00418C4.74391 0.997278 11.5737 1.01009 11.5737 1.01009C13.4783 0.868176 15.1422 2.24001 15.2897 4.07405C15.2999 4.2061 15.2968 11.5383 15.2968 11.5383Z"
        stroke="#C9DDFF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.3 5.97984L18.593 3.28484C19.409 2.61684 20.633 3.19884 20.632 4.25184L20.62 11.6008C20.619 12.6538 19.394 13.2308 18.58 12.5628L15.3 9.86784"
        stroke="#C9DDFF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),

  avatar: AvatarIcon,
  placeholder: ImageIcon,
};
