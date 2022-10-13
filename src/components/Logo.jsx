import React, { Fragment } from "react";
import { motion } from "framer-motion";


const pathVariants = {
    hidden: {
        opacity: 0,
        pathLength: 0,
        fillOpacity: 0
    },
    visible: {
        opacity: [0, 1, 1],
        pathLength: [0, 1, 1],
        fillOpacity: [0, 0, 1],
        transition: {
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.8, 1]
        }
    }
}

const Logo = () => {
    return (
        <Fragment>
            <motion.svg
                width="155"
                height="37"
                viewBox="0 0 155 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                initial="hidden"
                animate="visible"
            >
                <g clip-path="url(#clip0_2_3)">
                    <motion.path 
                        d="M25.7891 18.4602L25.7892 18.4607C26.811 21.4823 27.7912 24.4411 28.7191 27.2949C29.6114 30.0591 30.4166 32.57 31.1257 34.8284C30.8879 35.0581 30.571 35.2604 30.1664 35.4232C29.6591 35.6274 29.087 35.7335 28.4436 35.7335C27.4508 35.7335 26.8431 35.5372 26.5226 35.2514C26.1527 34.9215 25.804 34.3608 25.5057 33.5126L23.3271 26.7051L23.2159 26.3575H22.8509H8.55604H8.19037L8.07956 26.706C8.05204 26.7925 8.02508 26.8784 7.99808 26.9644C7.9409 27.1465 7.88355 27.3291 7.82055 27.5193L7.82053 27.5193L7.81905 27.5239C7.73591 27.7832 7.65192 28.0444 7.5673 28.3075C7.33425 29.0323 7.09649 29.7716 6.85895 30.5272C6.85872 30.5279 6.85849 30.5287 6.85825 30.5294L6.84311 30.576C6.515 31.5871 6.20903 32.53 5.90348 33.4012C5.62931 34.1829 5.41687 34.8654 5.26028 35.4482C5.0035 35.5322 4.74383 35.6067 4.47623 35.676C4.162 35.7573 3.75719 35.807 3.24504 35.807C2.39197 35.807 1.72714 35.6148 1.21517 35.2568C0.750684 34.932 0.5 34.4548 0.5 33.7452C0.5 33.412 0.553428 33.0667 0.672318 32.7072C0.809903 32.3024 0.957243 31.8363 1.11349 31.3332C1.52924 30.0259 2.07034 28.4029 2.72687 26.4839C3.38337 24.565 4.11279 22.4784 4.92554 20.2241C5.73916 17.9779 6.57368 15.6896 7.41873 13.3801L7.41898 13.3794C8.10815 11.4873 8.78337 9.66529 9.43957 7.89455C9.58755 7.49525 9.73456 7.09855 9.88054 6.70425C10.6425 4.64609 11.3163 2.84419 11.9213 1.30471C12.2683 1.15456 12.7726 0.984245 13.4494 0.809627L13.4494 0.809662L13.4552 0.808086C14.2265 0.59914 14.9859 0.5 15.7556 0.5C16.7821 0.5 17.7268 0.650467 18.5638 0.944257L18.5655 0.944846C19.3666 1.22281 19.7932 1.65169 19.9633 2.19645L19.9696 2.21668L19.9777 2.2363C20.8607 4.40017 21.7967 6.89074 22.7752 9.69806L22.7758 9.69962C23.7661 12.5109 24.7671 15.4275 25.7891 18.4602ZM26.2629 18.3005C25.2403 15.2662 24.2386 12.3473 23.2474 9.53348C22.2666 6.71964 21.3275 4.22077 20.4406 2.04739C20.211 1.31243 19.6372 0.787457 18.7294 0.472474L26.2629 18.3005ZM15.693 4.74972H15.3319L15.2184 5.09249C14.7194 6.59898 14.1053 8.34792 13.3957 10.3537C12.6861 12.3593 11.9549 14.4404 11.2235 16.5956C10.9753 17.3199 10.7341 18.0281 10.4977 18.7222C10.1366 19.7823 9.78666 20.8097 9.43996 21.8118L9.21045 22.4753H9.91249H21.5049H22.1905L21.981 21.8225C21.3341 19.8067 20.6866 17.7995 20.018 15.7916C19.4367 14.0196 18.8833 12.3601 18.3641 10.803C18.2492 10.4587 18.1361 10.1193 18.0247 9.78493C17.409 7.93696 16.8873 6.37242 16.4594 5.09133L16.3454 4.74972H15.9852H15.693Z"
                        fill="black"
                        stroke="black"
                        variants={pathVariants}
                    />
                    <motion.path 
                        d="M38.247 0.659983C38.7395 0.570773 39.2627 0.520996 39.8169 0.520996C40.899 0.520996 41.5742 0.725808 41.9544 1.02911C42.2813 1.29772 42.5202 1.84352 42.5202 2.83484V13.5443V19.8649V35.4626C42.3268 35.5141 42.0806 35.5727 41.7748 35.6404C41.2887 35.748 40.772 35.807 40.2239 35.807C39.1434 35.807 38.4655 35.5922 38.0781 35.257C37.709 34.9376 37.4684 34.3824 37.4684 33.4407V19.8649V13.5443V0.820292C37.6828 0.77011 37.9424 0.715159 38.247 0.659983Z"
                        fill="black" 
                        stroke="black"
                        variants={pathVariants}
                    />
                    <motion.path 
                        d="M146.097 10.391L146.098 10.3926C147.088 13.2038 148.089 16.1205 149.111 19.1531C150.133 22.1853 151.102 25.1337 152.031 27.9986C152.923 30.7627 153.728 33.2735 154.437 35.5319C154.199 35.7615 153.882 35.9638 153.478 36.1267C152.97 36.3309 152.398 36.437 151.755 36.437C150.762 36.437 150.154 36.2407 149.834 35.9549C149.464 35.6249 149.115 35.0643 148.817 34.2161L146.638 27.4086L146.527 27.061H146.162H131.867H131.502L131.391 27.4095C131.363 27.496 131.336 27.5818 131.309 27.6678C131.252 27.8499 131.195 28.0325 131.132 28.2227L131.132 28.2227L131.13 28.2273C131.047 28.4869 130.963 28.7484 130.878 29.0118C130.645 29.7362 130.408 30.4753 130.17 31.2307C130.17 31.2314 130.17 31.2321 130.17 31.2329L130.154 31.2801C129.826 32.291 129.52 33.2337 129.215 34.1047C128.941 34.8863 128.728 35.5689 128.572 36.1516C128.315 36.2357 128.055 36.3102 127.788 36.3794C127.473 36.4608 127.069 36.5105 126.556 36.5105C125.703 36.5105 125.038 36.3183 124.527 35.9603C124.062 35.6355 123.811 35.1582 123.811 34.4486C123.811 34.1155 123.865 33.7702 123.984 33.4108C124.121 33.006 124.269 32.5398 124.425 32.0366C124.841 30.7294 125.382 29.1064 126.038 27.1874C126.695 25.2685 127.424 23.1819 128.237 20.9276C129.05 18.6814 129.885 16.3931 130.73 14.0836L130.73 14.0829C131.42 12.1906 132.095 10.3684 132.751 8.59751C132.899 8.19838 133.046 7.80185 133.192 7.40771C133.953 5.35281 134.637 3.559 135.235 2.00735C135.581 1.8574 136.085 1.68739 136.761 1.51309L136.761 1.51312L136.767 1.51155C137.538 1.3026 138.297 1.20346 139.067 1.20346C140.107 1.20346 141.041 1.34429 141.887 1.63781C142.688 1.91577 143.115 2.34465 143.285 2.88942L143.291 2.90964L143.299 2.92926C144.182 5.09313 145.118 7.5837 146.097 10.391ZM139.015 5.44268H138.654L135.019 17.4501L134.546 17.288C134.545 17.2882 134.545 17.2885 134.545 17.2887C134.091 18.6153 133.653 19.8976 133.231 21.1314C133.072 21.5968 132.915 22.0552 132.761 22.5066L132.535 23.1683H133.234H144.827H145.512L145.303 22.5155C144.656 20.4997 144.008 18.4924 143.34 16.4846C142.758 14.7123 142.205 13.0526 141.686 11.4953C141.571 11.1512 141.458 10.8121 141.346 10.4779C140.731 8.62992 140.209 7.06538 139.781 5.78429L139.667 5.44268H139.307H139.015Z"
                        fill="black" 
                        stroke="black"
                        variants={pathVariants}
                    />
                    <motion.path 
                        d="M113.258 0.649485C113.751 0.560274 114.274 0.510498 114.828 0.510498C115.91 0.510498 116.586 0.715315 116.966 1.01863C117.293 1.28724 117.532 1.83303 117.532 2.82435V13.5338V19.8544V35.4521C117.338 35.5037 117.092 35.5622 116.786 35.6299C116.3 35.7375 115.783 35.7965 115.235 35.7965C114.155 35.7965 113.477 35.5817 113.09 35.2465C112.72 34.9271 112.48 34.3719 112.48 33.4302V19.8544V13.5338V0.809794C112.694 0.759612 112.954 0.704661 113.258 0.649485Z"
                        fill="black" 
                        stroke="black"
                        variants={pathVariants}
                    />
                    <motion.path 
                        d="M102.777 3.9107L102.778 3.91142C105.047 5.93531 106.19 8.64858 106.221 12.1185C106.221 14.4769 105.696 16.505 104.675 18.2105C103.646 19.9131 102.14 21.2452 100.103 22.194C98.07 23.1414 95.5178 23.6277 92.4157 23.6277H87.1673H86.6673V24.1277V35.7936C86.4624 35.8472 86.2098 35.9075 85.9072 35.9773C85.4445 36.084 84.9397 36.143 84.4023 36.143C83.2987 36.143 82.6085 35.9274 82.2208 35.5997C81.8566 35.2918 81.6155 34.7405 81.6155 33.8082V24.1487V24.1172V23.6172H81.1155H73.9159H73.4159V24.1172V24.1487V33.8292C73.4159 34.7615 73.1748 35.3128 72.8106 35.6207L72.8105 35.6206L72.8024 35.6277C72.4292 35.9572 71.7367 36.1745 70.6291 36.1745C70.0819 36.1745 69.5877 36.1156 69.1249 36.009C68.8332 35.9403 68.5792 35.8754 68.3641 35.8186V24.1382V23.6382H67.8641H62.6156C59.5135 23.6382 56.9614 23.1519 54.9281 22.2045C52.8902 21.255 51.3745 19.9225 50.3567 18.2222C49.3353 16.5159 48.8104 14.4867 48.8104 12.1268C48.8104 8.64844 49.9528 5.93664 52.2414 3.91285L52.2414 3.91286L52.243 3.91142C54.5012 1.89705 58.0395 0.846466 62.9808 0.846466C64.4225 0.846466 65.9592 0.929365 67.5911 1.10605C69.2144 1.28179 70.5865 1.53843 71.6934 1.87145C72.2901 2.08584 72.7305 2.34726 73.0292 2.63059C73.2593 2.84891 73.4159 3.21821 73.4159 3.83228V19.2139V19.7139H73.9159H81.1155H81.6155V19.2139V3.83228C81.6155 3.21821 81.7721 2.84891 82.0022 2.63059C82.3027 2.34545 82.7345 2.08447 83.3387 1.87113C84.4418 1.52898 85.8121 1.28232 87.4403 1.10605C89.0722 0.929365 90.6089 0.846466 92.0505 0.846466C96.9923 0.846466 100.53 1.89722 102.777 3.9107ZM68.4058 5.75367V5.32652L67.9839 5.25981C67.2444 5.14287 66.4392 5.03621 65.5586 4.96148C64.6797 4.88689 63.7682 4.8442 62.8348 4.8442C60.0553 4.8442 57.8427 5.39975 56.2807 6.5956C54.6821 7.81959 53.9248 9.71174 53.9248 12.1793C53.9248 14.6184 54.7321 16.5332 56.3926 17.8238C58.0223 19.0905 60.2518 19.6924 62.9978 19.7139L62.9978 19.7139H63.0017H67.9058H68.4058V19.2139V5.75367ZM86.5943 19.1929V19.6929H87.0943H91.9879C94.7478 19.6929 96.9666 19.0904 98.6061 17.8248C100.28 16.5329 101.075 14.6161 101.075 12.1688C101.075 9.71219 100.318 7.8093 98.7193 6.5851L98.7175 6.58371C97.1574 5.40062 94.9469 4.8337 92.1653 4.8337C91.2319 4.8337 90.3204 4.87639 89.4414 4.95098L89.4414 4.95095L89.4354 4.95153C88.5632 5.03612 87.7597 5.13175 87.0162 5.24931L86.5943 5.31602V5.74317V19.1929Z"
                        fill="#407732" 
                        stroke="#407732"
                        variants={pathVariants}
                    />
                </g>
                <defs>
                    <clipPath id="clip0_2_3">
                        <rect width="155" height="37" fill="white" />
                    </clipPath>
                </defs>
            </motion.svg>

        </Fragment>
    )
}

export { Logo }