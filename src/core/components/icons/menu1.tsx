import React from 'react';

interface Menu1IconProps {
    fill?: string;
}

export const Menu1Icon: React.FC<Menu1IconProps> = ({ fill }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32">
            <g clipPath="url(#clip0_2051_6553)" filter="url(#filter0_d_2051_6553)">
                <path
                    fill={fill}
                    fillRule="evenodd"
                    d="M16.052 6.392a1.172 1.172 0 00-.656 0c-.062.017-.17.062-.4.237-.242.183-.54.446-1.001.857l-6.143 5.46c-.753.67-.967.871-1.115 1.094-.143.215-.25.452-.315.701-.068.26-.077.553-.077 1.56v5.864c0 1.021 0 1.715.045 2.252.044.522.122.788.219.974.222.429.571.778 1 1 .186.097.452.175.974.219.537.044 1.23.045 2.252.045h.2v-3.517a4.69 4.69 0 119.378 0v3.517h.2c1.02 0 1.715 0 2.251-.045.523-.044.79-.122.975-.219a2.345 2.345 0 001-1c.097-.186.175-.452.219-.974.044-.537.045-1.23.045-2.252v-5.863c0-1.008-.01-1.301-.077-1.56a2.346 2.346 0 00-.315-.702c-.148-.223-.362-.425-1.115-1.094l-6.143-5.46c-.462-.411-.759-.674-1.001-.857-.23-.175-.339-.22-.4-.237zM14.74 4.14a3.517 3.517 0 011.966 0c.446.13.816.358 1.16.62.325.245.69.57 1.112.945l6.175 5.488.098.088c.612.543 1.074.953 1.412 1.461.285.43.498.904.63 1.402.154.59.154 1.208.154 2.026v6.044c0 .96 0 1.752-.054 2.397-.055.67-.175 1.285-.474 1.861a4.69 4.69 0 01-2 2c-.576.3-1.192.419-1.862.474-.644.054-1.436.054-2.396.054h-.505c-.142 0-.311 0-.46-.012a1.767 1.767 0 01-.68-.186 1.758 1.758 0 01-.75-.75 1.768 1.768 0 01-.186-.68 5.761 5.761 0 01-.012-.46v-3.774a2.345 2.345 0 10-4.69 0v3.773c0 .142 0 .312-.012.461a1.768 1.768 0 01-.186.68 1.76 1.76 0 01-.75.75 1.767 1.767 0 01-.68.186c-.149.012-.318.012-.46.012h-.505c-.96 0-1.752 0-2.397-.053-.67-.056-1.285-.176-1.861-.475a4.69 4.69 0 01-2-2c-.3-.576-.419-1.192-.474-1.861C4 23.966 4 23.174 4 22.214v-5.912-.132c0-.818 0-1.436.155-2.026.131-.498.344-.972.63-1.402.337-.508.8-.918 1.41-1.461l.1-.088 6.174-5.488c.421-.375.787-.7 1.112-.946.344-.26.714-.489 1.16-.619z"
                    clipRule="evenodd"
                ></path>
            </g>
            <defs>
                <filter
                    id="filter0_d_2051_6553"
                    width="73.448"
                    height="75"
                    x="-21"
                    y="-21"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                    <feOffset></feOffset>
                    <feGaussianBlur stdDeviation="12.5"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix values="0 0 0 0 0.92549 0 0 0 0 0.717647 0 0 0 0 0.701961 0 0 0 1 0"></feColorMatrix>
                    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2051_6553"></feBlend>
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_2051_6553" result="shape"></feBlend>
                </filter>
                <clipPath id="clip0_2051_6553">
                    <path fill="#fff" d="M0 0H32V32H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
};
