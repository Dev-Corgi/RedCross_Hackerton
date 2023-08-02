/** @type {import('next').NextConfig} */

module.exports = {
    // ...
    // 다른 구성 옵션들이 있을 수 있습니다.
    // ...
  
    // CSS 모듈 사용 비활성화
    cssModules: false,
  
    // Tailwind CSS를 전역으로 사용하기 위한 옵션 추가
    // Next.js에서는 모든 페이지에서 글로벌 CSS를 사용하기 위해서는 이 설정이 필요합니다.
    // 만약 다른 페이지에서 CSS 모듈을 사용하려면 해당 페이지에서 CSS 파일을 따로 추가해야 합니다.
    // 이 설정은 Next.js 10.2.0 이상에서 사용 가능합니다.
    // 만약 이전 버전을 사용한다면 다른 방식으로 글로벌 CSS를 추가해야 합니다.
    // (예: ./pages/_app.js에서 import 'styles/globals.css' 등으로 추가)
    // 이 설정이 이미 존재한다면 해당 부분만 추가하면 됩니다.
    // 참고: https://nextjs.org/docs/basic-features/built-in-css-support#adding-a-global-stylesheet
    // 참고: https://nextjs.org/docs/advanced-features/customizing-postcss-config#exposing-all-environment-variables
    env: {
      tailwindcss: true,
    },
  };
