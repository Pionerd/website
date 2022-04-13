import Image from '../Image'

export default function Hero({ heading, description = '', image = '' }) {
  return (
    <div
      className="relative overflow-hidden"
      style={{ backgroundColor: '#E7EAFA' }}
    >
      <div className="relative z-100 container pt-10 pb-52 text-blue-1 lg:pt-20 lg:pb-320px">
        <div className="lg:flex lg:gap-16">
          <div className="lg:w-5/12">
            <h1 className="text-3xl mb-5 lg:mb-14 lg:text-6xl">{heading}</h1>
            {description && (
              <p className="font-semibold text-xl lg:text-3xl">{description}</p>
            )}
          </div>
          {image && (
            <div className="hidden lg:block lg:w-7/12">
              <Image
                src={image}
                alt={heading}
                width={862}
                height={421}
                layout="responsive"
              />
            </div>
          )}
        </div>
      </div>

      <div className="absolute -bottom-2 -right-803px z-50">
        <Waves />
      </div>
    </div>
  )
}

function Waves() {
  return (
    <svg
      width="5806"
      height="241"
      viewBox="0 0 5806 241"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 240.057V137.576L33.4199 135.798L33.4243 135.798C77.7881 133.402 166.757 128.599 257.202 92.1406C282.285 82.0302 307.53 69.4883 332.773 56.947L332.781 56.943L332.793 56.9359C398.774 24.154 464.737 -8.61832 527.721 2.05588C579.808 10.8617 629.988 49.1677 680.21 87.506C714.27 113.506 748.349 139.521 783.055 156.359C855.96 191.85 931.889 186.555 1007.72 181.267C1020.89 180.349 1034.04 179.431 1047.18 178.727C1079.51 176.995 1111.8 176.559 1144.11 176.124H1144.12C1200.6 175.363 1257.12 174.601 1313.9 166.907C1361.99 160.391 1410.45 148.915 1458.9 137.441C1500.4 127.615 1541.88 117.791 1583.13 111.084C1672.53 96.5442 1761.42 96.6908 1848.74 118.82C1872.56 124.858 1896.31 132.534 1920.06 140.21C1983.37 160.669 2046.66 181.123 2111.2 170.524C2165.93 161.579 2221.67 130.473 2277.47 99.3358L2277.49 99.3266C2312.5 79.7872 2347.54 60.2358 2382.37 46.1407C2472.37 9.56284 2561.26 9.70944 2649.27 19.6159C2737.29 29.5228 2825.07 49.2263 2868.63 59.0595C2900.54 66.2214 2932.55 73.5353 2964.09 82.1827C3029.14 100.016 3095.52 118.215 3160.2 92.1406C3185.29 82.0291 3210.54 69.4856 3235.78 56.943L3235.79 56.9359C3301.77 24.154 3367.74 -8.61832 3430.72 2.05588C3482.81 10.8617 3532.99 49.1677 3583.21 87.506C3617.27 113.506 3651.35 139.521 3686.05 156.359C3758.96 191.85 3834.89 186.555 3910.72 181.267C3923.89 180.349 3937.04 179.431 3950.18 178.727C3982.51 176.995 4014.8 176.559 4047.11 176.124H4047.12C4103.6 175.363 4160.12 174.601 4216.9 166.907C4264.99 160.391 4313.45 148.915 4361.9 137.441C4403.4 127.615 4444.88 117.791 4486.13 111.084C4575.53 96.5442 4664.42 96.6908 4751.74 118.82C4775.55 124.857 4799.3 132.532 4823.05 140.206L4823.06 140.21C4886.37 160.669 4949.66 181.123 5014.2 170.524C5068.93 161.579 5124.67 130.473 5180.47 99.3358L5180.49 99.3266C5215.5 79.7872 5250.54 60.2358 5285.37 46.1407C5375.37 9.56284 5464.26 9.70944 5552.27 19.6159C5640.29 29.5228 5728.07 49.2263 5771.63 59.0595L5806 66.7738V240.057H0Z"
        fill="#F4F8FB"
      />
    </svg>
  )
}
