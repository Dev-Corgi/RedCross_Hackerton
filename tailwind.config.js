
module.exports = {
  theme: {
    fontFamily: {
      boutiqueMyeongjoBold: ['boutiqueMyeongjo-bold'],
      intelOneMonoRegular: ['intelone-mono-font-family-regular'],
      pretendardBold: ['Pretendard-Bold'],
      pretendardSemiBold: ['Pretendard-SemiBold'],
      pretendardMedium: ['Pretendard-Medium'],
      pretendardRegular: ['Pretendard-Regular'],
    },
		// 중간 생략
	},
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    "extend": {
      "colors": {
        "white": "#fff",
        "gray": {
          "100": "#80868b",
          "200": "rgba(0, 0, 0, 0.3)",
          "300": "rgba(0, 0, 0, 0.15)",
          "400": "rgba(255, 255, 255, 0.6)",
          "500": "rgba(0, 0, 0, 0.6)",
          "600": "rgba(255, 255, 255, 0.8)",
          "700": "rgba(255, 255, 255, 0.3)"
        },
        "black": "#000",
        "khaki": "#f4d35e"
      },
      "borderRadius": {
        "xl": "20px",
        "8xs": "5px",
        "mini": "15px"
      }
    },
    "fontSize": {
      "mini": "15px",
      "56xl": "75px",
      "mid": "17px",
      "51xl": "70px",
      "lgi": "19px",
      "xl": "20px",
      "23xl": "42px",
      "5xl": "24px",
      "8xl": "27px",
      "lg": "18px",
      "inherit": "inherit"
    }
  },
  plugins: [],
}

