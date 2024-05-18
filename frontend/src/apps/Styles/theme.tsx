import { Theme } from "./types";

export const theme: Theme = {
  // Media Queries
  breakpoints: ["640px", "768px", "1024px", "1280px"],

  // Layout (height, width, maxHeight, minHeight, minWidth, maxWidth, size, display, verticalAlign, overflow, overflowX, overflowY )
  sizes: [
    "5px", //0
    "10px", //1
    "15px", //2
    "20px", //3
    "25px", //4
    "30px", //5
    "35px", //6
    "40px", //7
    "45px", //8
    "50px", //9
    "55px", //10
    "60px", //11
    "65px", //12
    "70px", //13
    "75px", //14
    "80px", //15
    "85px", //16
    "90px", //17
    "95px", //18
    "100px", //19
    "105px", //20
    "110px", //21
    "115px", //22
    "120px", //23
    "125px", //24
    "130px", //25
    "135px", //26
    "140px", //27
    "145px", //28
    "150px", //29
    "155px", //30
    "160px", //31
    "165px", //32
    "170px", //33
    "175px", //34
    "180px", //35
    "185px", //36
    "190px", //37
    "195px", //38
    "200px", //39
    "205px", //40
    "210px", //41
    "215px", //42
    "220px", //43
    "225px", //44
    "230px", //45
    "235px", //46
    "240px", //47
  ],

  // Space (top, right, bottom, left, margin, padding, mt, mr, mb, ml, mx, my, pt, pr, pb, pl, px, py)
  space: [
    "5px", //0
    "10px", //1
    "15px", //2
    "20px", //3
    "25px", //4
    "30px", //5
    "35px", //6
    "40px", //7
    "45px", //8
    "50px", //9
    "55px", //10
    "60px", //11
    "65px", //12
    "70px", //13
    "75px", //14
    "80px", //15
    "85px", //16
    "90px", //17
    "95px", //18
    "100px", //19
    "105px", //20
    "110px", //21
    "115px", //22
    "120px", //23
    "125px", //24
    "130px", //25
    "135px", //26
    "140px", //27
    "145px", //28
    "150px", //29
    "155px", //30
    "160px", //31
    "165px", //32
    "170px", //33
    "175px", //34
    "180px", //35
    "185px", //36
    "190px", //37
    "195px", //38
    "200px", //39
    "205px", //40
    "210px", //41
    "215px", //42
    "220px", //43
    "225px", //44
    "230px", //45
    "235px", //46
    "240px", //47
  ],

  // Colors (Order from dark to light)
  colors: {
    white: [
      "rgba(255,255,255,0.1)",
      "rgba(255,255,255,0.2)",
      "rgba(255,255,255,0.3)",
      "rgba(255,255,255,0.4)",
      "rgba(255,255,255,0.5)",
      "rgba(255,255,255,0.6)",
      "rgba(255,255,255,0.7)",
      "rgba(255,255,255,0.8)",
      "rgba(255,255,255,0.9)",
      "rgba(255,255,255,1)",
    ],
    secondary: [
      "#1F1F1F",
      "#6940C9",
      "#065AD8",
      "#2B67C4",
      "#A1B1D0",
      "#0958D8",
    ],
    teritary: [
      "#fefce8",
      "#fef9c3",
      "##fef08a",
      "##fde047",
      "##facc15",
      "##eab308",
      "##ca8a04",
      "##a16207",
      "#854d0e",
      "##713f12",
    ],
    warning: ["#F5A732"],
    gradient: [
      "linear-gradient(180deg, #03101E 0%, #1C2631 100%), linear-gradient(0deg, rgba(200, 200, 200, 0.46), rgba(200, 200, 200, 0.46))",
    ],
    black: [
      "rgba(15, 18, 18, 0.1)",
      "rgba(15, 18, 18, 0.2)",
      "rgba(15, 18, 18, 0.3)",
      "rgba(15, 18, 18, 0.4)",
      "rgba(15, 18, 18, 0.5)",
      "rgba(15, 18, 18, 0.6)",
      "rgba(15, 18, 18, 0.7)",
      "rgba(15, 18, 18, 0.8)",
      "rgba(15, 18, 18, 0.9)",
      "rgba(15, 18, 18, 1)",
    ],
    sidebar: [
      "rgba(38, 34, 102, 0.1)",
      "rgba(38, 34, 102, 0.2)",
      "rgba(38, 34, 102, 0.3)",
      "rgba(38, 34, 102, 0.4)",
      "rgba(38, 34, 102, 0.5)",
      "rgba(38, 34, 102, 0.6)",
      "rgba(38, 34, 102, 0.7)",
      "rgba(38, 34, 102, 0.8)",
      "rgba(38, 34, 102, 0.9)",
      "rgba(38, 34, 102, 1)",
    ],
    primary: [
      "rgba(11, 128, 129, 0.1)",
      "rgba(11, 128, 129, 0.2)",
      "rgba(11, 128, 129, 0.3)",
      "rgba(11, 128, 129, 0.4)",
      "rgba(11, 128, 129, 0.5)",
      "rgba(11, 128, 129, 0.6)",
      "rgba(11, 128, 129, 0.7)",
      "rgba(11, 128, 129, 0.8)",
      "rgba(11, 128, 129, 0.9)",
      "rgba(11, 128, 129, 1)",
    ],
    success: [
      "rgba(34, 186, 98, 0.1)",
      "rgba(34, 186, 98, 0.2)",
      "rgba(34, 186, 98, 0.3)",
      "rgba(34, 186, 98, 0.4)",
      "rgba(34, 186, 98, 0.5)",
      "rgba(34, 186, 98, 0.6)",
      "rgba(34, 186, 98, 0.7)",
      "rgba(34, 186, 98, 0.8)",
      "rgba(34, 186, 98, 0.9)",
      "rgba(34, 186, 98, 1)",
    ],
    highlight: [
      "rgba(13, 184, 207, 0.1)",
      "rgba(13, 184, 207, 0.2)",
      "rgba(13, 184, 207, 0.3)",
      "rgba(13, 184, 207, 0.4)",
      "rgba(13, 184, 207, 0.5)",
      "rgba(13, 184, 207, 0.6)",
      "rgba(13, 184, 207, 0.7)",
      "rgba(13, 184, 207, 0.8)",
      "rgba(13, 184, 207, 0.9)",
      "rgba(13, 184, 207, 1)",
    ],
    background: [
      "rgba(243, 243, 243, 0.1)",
      "rgba(243, 243, 243, 0.2)",
      "rgba(243, 243, 243, 0.3)",
      "rgba(243, 243, 243, 0.4)",
      "rgba(243, 243, 243, 0.5)",
      "rgba(243, 243, 243, 0.6)",
      "rgba(243, 243, 243, 0.7)",
      "rgba(243, 243, 243, 0.8)",
      "rgba(243, 243, 243, 0.9)",
      "rgba(243, 243, 243, 1)",
    ],
    alert: [
      "rgba(229, 62, 72, 0.1)",
      "rgba(229, 62, 72, 0.2)",
      "rgba(229, 62, 72, 0.3)",
      "rgba(229, 62, 72, 0.4)",
      "rgba(229, 62, 72, 0.5)",
      "rgba(229, 62, 72, 0.6)",
      "rgba(229, 62, 72, 0.7)",
      "rgba(229, 62, 72, 0.8)",
      "rgba(229, 62, 72, 0.9)",
      "rgba(229, 62, 72, 1)",
    ],
    border: {
      default: "rgba(213, 217, 231, 1)",
      focus: "rgba(11, 128, 129, 1)",
    },
    grey: ["rgba(242, 244, 247, 1)", "rgba(234, 236, 240, 1)"],
    gray: ["rgba(51, 51, 51, 1)"],
  },

  fontSizes: [
    "11px", //0
    "12px", //1
    "13px", //2
    "14px", //3
    "15px", //4
    "16px", //5
    "20px", //6
    "24px", //7
    "32px", //8
    "36px", //9
    "40px", //10
    "48px", //11
    "64px", //12
    "70px", //13
    "80px", //14
    "96px", //15
  ],

  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  lineHeights: [
    "11px", //0
    "12px", //1
    "13px", //2
    "14px", //3
    "15px", //4
    "16px", //5
    "20px", //6
    "24px", //7
    "32px", //8
    "36px", //9
    "40px", //10
    "48px", //11
    "64px", //12
    "70px", //13
    "80px", //14
    "96px", //15
  ],

  letterSpacings: {
    normal: "normal",
    tracked: "0.1em",
    tight: "-0.05em",
    mega: "0.25em",
  },

  // Borders
  borders: ["1px solid", "2px solid", "4px solid"],

  // Border Radius
  radii: [
    "5px", //0
    "10px", //1
    "15px", //2
    "20px", //3
    "25px", //4
    "30px", //5
    "40px", //6
    "50px", //7
    "60px", //8
    "70px", //9
    "75px", //10
  ],

  // z-index
  zIndices: [1, 2, 3, -1, 99, 150, 250],

  // Shadow
  shadows: [
    "0px 5px 20px rgba(0, 0, 0, 0.05)",
    "0px 4px 30px 0px rgba(13, 184, 207, 0.13)",
    "0px 0px 0px 4px rgba(217, 233, 233, 1)",
    "0px 0px 0px 4px rgba(11, 128, 129, 0.37)",
  ],
};
