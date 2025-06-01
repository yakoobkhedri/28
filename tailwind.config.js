/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary':'#00F201',
        'secondary': '#03B088'
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      fontFamily: {
        paydaRegular: "Payda-Regular",
        paydaMedium: "Payda-Medium",
        paydaSemiBold: "Payda-SemiBold",
        paydaBold: "Payda-Bold",
        paydaExtraBold: "Payda-ExtraBold",
        paydaBlack: "Payda-Black",
      },
      maxWidth:{
        'content':'1336px',
      },
    }
},
}

