/*
Copyright (c) 2016 Daybrush
name: scenejs
license: MIT
author: Daybrush
repository: https://github.com/daybrush/scenejs.git
version: 1.1.0
*/
!function(){"use strict";function e(e){for(var t=e.left,n=void 0===t?0:t,a=e.top,i=void 0===a?0:a,s=e.side,r=void 0===s?3:s,l=e.rotate,c=void 0===l?0:l,o=e.innerRadius,d=void 0===o?100:o,p=e.height,u=void 0===p?0:p,v=e.split,f=void 0===v?1:v,m=e.width,h=void 0===m?u?0:100:m,y=e.strokeLinejoin,g=void 0===y?"round":y,k=e.strokeWidth,b=void 0===k?0:k,S=[],x=[],w=Math.cos(Math.PI/r),j=Math.PI/180*c+Math.PI*((r%2?0:1/r)-.5),M=0;M<r;++M){var C=Math.PI*(1/r*2*M)+j,I=Math.cos(C),q=Math.sin(C);if(S.push(I),x.push(q),100!==d){if(w<=d/100)continue;S.push(d/100*Math.cos(C+Math.PI/r)),x.push(d/100*Math.sin(C+Math.PI/r))}}var _=Math.min.apply(Math,S),z=Math.min.apply(Math,x),L=Math.max.apply(Math,S),T=Math.max.apply(Math,x),E=!!h?h/(L-_):u/(T-z),Y="miter"===g||"arcs"===g||"miter-clip"===g,O=Math.sin(Math.PI/r),P=Math.min(w,d/100),D=E*P,X=b/2/(w===P?1:Math.sin(Math.atan(O/(w-P)))),A=Y?(D+X)/D:1,B=Y?0:b/2;S=S.map(function(e){return(e-_*A)*E+B}),x=x.map(function(e){return(e-z*A)*E+B});var R=(L-_)*A*E+2*B,$=(T-z)*A*E+2*B,H=S.length,N=[];N.push([n+S[0],i+x[0]]);for(M=1;M<=H;++M)for(var K=S[M-1],V=x[M-1],W=S[M===H?0:M],Z=x[M===H?0:M],J=1;J<=f;++J){var F=(K*(f-J)+W*J)/f,G=(V*(f-J)+Z*J)/f;N.push([n+F,i+G])}return{points:N,width:R,height:$}}function t(e){return e.map(function(e,t){return(0===t?"M":"L")+" "+e.join(" ")}).join(" ")+" Z"}function o(e){return'.exportCSS({\n    selector: (item, selectors) =>   {\n      return `${utils.splitComma(selectors).map((selector) =>  {\n        return "'+e+':hover " + selector.replace("'+e+'", ""); }).join(", ")}`;\n    },\n  }).setTime(0);\n  '}var n=t(e({left:10,side:3,split:20,strokeWidth:5}).points),a=t(e({left:10,side:3,split:10,innerRadius:30,strokeWidth:5}).points),i=t(e({left:10,side:5,split:12,strokeWidth:5}).points),s=t(e({left:10,side:5,split:6,innerRadius:30,strokeWidth:5}).points),r=[{title:"Options",features:[{id:"direction",title:"direction",description:"The direction property defines whether an animation should be played forwards, backwards or in alternate cycles.",code:function(e){return"\n  new Scene({\n    \"[data-direction='"+e+'\'] .rect": i => ({\n      "transform": {\n        scale: [0, 1],\n      },\n      "border-width": [`${30 + i * 5}px`, "0px"],\n      options: {\n        duration: 1,\n        delay: i * 0.1,\n      }\n    }),\n  }, {\n    easing: "ease-in-out",\n    selector: true,\n    direction: "'+e+'",\n    iterationCount: 2,\n  });/*play*/'},html:'<div class="rects"><div class="rect rect1"></div><div class="rect rect2"></div><div class="rect rect3"></div><div class="rect rect4"></div></div>',examples:[{value:"normal",title:"direction: normal (default)"},{value:"reverse",title:"direction: reverse"},{value:"alternate",title:"direction: alternate"},{value:"alternate-reverse",title:"direction: alternate-reverse"}]},{id:"delay",title:"delay",description:"The delay property specifies a delay for the start of an animation.",code:function(){return'\n  new Scene({\n    "[data-delay] .circle1": {\n      0: {\n        transform: "translate(-50%, -50%) scale(0)",\n        "border-width": "100px",\n      },\n      1: {\n        transform: "scale(1)",\n        "border-width": "0px",\n      },\n    },\n    "[data-delay] .circle2": {\n      0: {\n        transform: "translate(-50%, -50%) scale(0)",\n        "border-width": "100px",\n      },\n      1: {\n        transform: "scale(1)",\n        "border-width": "0px",\n      },\n      options: {\n        delay: 0.5,\n      }\n    },\n  }, {\n    iterationCount: "infinite",\n    selector: true,\n  });/*play*/\n  '},html:'\n          <div class="circles">\n            <div class="circle circle1"></div>\n            <div class="circle circle2"></div>\n          </div>\n          ',examples:[{title:"",value:""}]},{id:"iterationcount",title:"iterationCount",description:"The iterationCount property specifies the number of times an animation should be played.",code:function(e,t){return"\n  new Scene({\n    \"[data-iterationcount='"+e+'\'] .circle": i => ({\n      0: {\n        transform: "translate(-50%, -50%) scale(0)",\n        "border-width": "100px",\n        opacity: 1,\n      },\n      1: {\n        transform: "scale(1)",\n        "border-width": "0px",\n        opacity: 0.3,\n      },\n      options: {\n        delay: i * 0.3,\n      }\n    }),\n  }, {\n    selector: true,\n    iterationCount: '+("infinite"===e?'"infinite"':e)+",\n  });/*play*/\n  "},html:'\n          <div class="circles">\n            <div class="circle circle1"></div>\n            <div class="circle circle2"></div>\n            <div class="circle circle3"></div>\n          </div>',examples:[{title:"iterationCount: 1 (default)",value:1},{title:"iterationCount: 2",value:2},{title:"iterationCount: infinite",value:"infinite"}]},{id:"fillmode",title:"fillMode",description:"The fillMode property specifies a style for the element when the animation is not playing (before it starts, after it ends, or both).",code:function(e){return"\n  new Scene({\n    \"[data-fillmode='"+e+"'] .pie, [data-fillmode='"+e+'\'] .half.left .semicircle": {\n      transform: {\n        rotate: ["0deg", "180deg"],\n      }\n    },\n    "[data-fillmode=\''+e+'\'] .half.right .semicircle": {\n      transform: {\n        rotate: ["0deg", "-180deg"],\n      }\n    }\n  }, {\n    delay: 0.5,\n    duration: 1,\n    easing: "ease-in-out",\n    selector: true,\n    fillMode: "'+e+'",\n  });/*play*/\n  '},html:'\n          <div class="pie fill">\n    <div class="half left">\n      <div class="semicircle"></div>\n    </div>\n    <div class="half right">\n      <div class="semicircle"></div>\n    </div>\n  </div>\n          ',examples:[{title:"fillMode: forwards (default)",value:"forwards"},{title:"fillMode: backwards",value:"backwards"},{title:"fillMode: both",value:"both"}]},{id:"easing",title:"easing",description:"The easing(timing-function) specifies the speed curve of an animation.",code:function(e){return"\n  new Scene({\n    \"[data-easing='"+e+'\'] .rect": i => ({\n      "transform": {\n        scale: [0, 1],\n      },\n      "border-width": [`${30 + i * 5}px`, "0px"],\n      "options": {\n        duration: 1,\n        delay: i * 0.1,\n      }\n    }),\n  }, {\n    easing: "'+e+'",\n    selector: true,\n  });/*play*/\n  '},html:'<div class="rects"><div class="rect rect1"></div><div class="rect rect2"></div><div class="rect rect3"></div><div class="rect rect4"></div></div>',examples:[{title:"easing: linear (default)",value:"linear"},{title:"easing: ease",value:"ease"},{title:"easing: ease-in",value:"ease-in"},{title:"easing: ease-out",value:"ease-out"},{title:"easing: ease-in-out",value:"ease-in-out"},{title:"easing: steps(6, end)",value:"steps(6, end)"},{title:"easing: cubic-bezier(0.74, 0, 0.42, 1.47)",value:"cubic-bezier(0.74, 0, 0.42, 1.47)"}]},{id:"playspeed",title:"playSpeed",description:"The playspeed define the speed at which the play is performed.",html:'\n          <div class="chase">\n          <svg viewBox="0 0 100 100">\n            <ellipse fill="transparent" cx="50" cy="50" rx="49.5" ry="49.5" stroke-linejoin="round" stroke-width="1" stroke-linecap="round" stroke="#999"></ellipse></svg>\n          <div class="dot"></div>\n        </div>\n          ',code:function(e){return"\n  new Scene({\n    \"[data-playspeed='"+e+'\'] .chase .dot": {\n      0: {\n        transform: "rotate(0deg) translate(0px, -99px) scale(1)",\n      },\n      2: {\n        transform: "rotate(360deg) scale(0.1)",\n      },\n    },\n    "[data-playspeed=\''+e+'\'] .chase ellipse": {\n      0: {\n       "stroke-dasharray": "0 1000",\n      },\n      2: {\n        "stroke-dasharray": "311 1000",\n      },\n    },\n  }, {\n    selector: true,\n    playSpeed: '+e+',\n    easing: "ease",\n  });/*play*/\n  '},examples:[{title:"playSpeed: 1 (default)",value:1},{title:"playSpeed: 2",value:2}]}]},{title:"Values",features:[{id:"number",title:"Number",description:"In order to interpolate, it must be a number by default.",html:'\n          <div class="squares">\n          <div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div>\n          <div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div>\n          <div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div>\n          </div>',code:function(){return"\n  new Scene({\n    \"[data-number='0,1'] .square\": i => ({\n      opacity: [0, 1],\n      options: {\n        duration: 1,\n        delay: (i % 7) * 0.1 + Math.floor(i / 7) * 0.2,\n      }\n    }),\n  }, {\n    selector: true,\n  });/*play*/\n  "},examples:[{title:"opacity: 0 to 1",value:[0,1]}]},{id:"unit",title:"Unit",description:"10px, 10%, 10em, etc. is a string that represents a number but has a unit. In this case, number and unit are divided and only numbers are interpolated.",html:'\n          <div class="overflow">\n            <div class="text"><span>Scene.js</span></div>\n          </div>\n          <div class="overflow">\n            <div class="text"><span>CSS</span></div>\n          </div>\n          <div class="overflow">\n            <div class="text"><span>Animation</span></div>\n          </div>\n\n          ',code:function(){return'\n  new Scene({\n    ".overflow .text span": i => ({\n      0: {\n        transform: {\n          translateY: "100%",\n        }\n      },\n      1: {\n        transform: {\n          translateY: "0%",\n        }\n      },\n      options: {\n        delay: i * 0.2,\n      }\n    }),\n  }, {\n    easing: "ease-in-out",\n    selector: true,\n  });/*play*/\n  '},examples:[{title:"100% to 0%",value:"unit"}]},{id:"string",title:"String",description:"string indicates the first value before the time of 1, and then the second value when it is 1 because it determines that it cannot be interpolated.",html:'<div class="text center"></div>',code:function(){return'\n  /*mouse*/new Scene.SceneItem({\n    attribute: {\n      "data-text": [\n        "",\n        "S",\n        "Sc",\n        "Sce",\n        "Scen",\n        "Scene",\n        "Scene.",\n        "Scene.j",\n        "Scene.js",\n      ],\n    }\n  }, {\n    duration: 1,\n    selector: "#string .text",\n  });/*play*/\n  '},examples:[{title:"Typing",value:"string"}]},{id:"colors",title:"Colors",description:"It supports color models such as hex, rgb(a), and hsl(a).",html:'<div class="target center"></div>',code:function(e){return'\n  new Scene.SceneItem({\n    0: {\n      "background-color": "'+e[0]+'",\n    },\n    1: {\n      "background-color": "'+e[1]+'",\n    },\n  }, {\n    selector: "[data-colors=\''+e+"'] .target\",\n  });/*play*/\n  "},examples:[{title:"#000 to #ff5555",value:["#000","#ff5555"]},{title:"#000 to rgba(255, 100, 100, 1)",value:["#000","rgba(255, 100, 100, 1)"]},{title:"#000 to hsla(0, 100%, 67%, 1)",value:["#000","hsla(0, 100%, 67%, 1)"]}]},{id:"array",title:"Array",description:"Interpolates the value of the array.",html:'<div class="text center"></div>',code:function(){return'\n  var arrayTextElement = document.querySelector("#array .text");\n  /*mouse*/new Scene.SceneItem({\n    0: {\n      arr: [0, 0, 0],\n    },\n    1: {\n      arr: [200, 100, 50],\n    },\n  }).on("animate", e => {\n    arrayTextElement.innerHTML =\n      e.frame.get("arr").map(num => num.toFixed(0))\n  });/*play*/\n  '},examples:[{title:"[0, 0, 0] to [200, 100, 50]",value:[0,0,0]}]},{id:"object",title:"Object",description:"Interpolates the value of the object.",html:'<div class="loading">\n          <div class="circle left top"></div>\n          <div class="circle left bottom"></div>\n          <div class="circle right bottom"></div>\n          <div class="circle right top"></div>\n        </div>',code:function(){return'\n  new Scene({\n    "[data-object] .circle": i => ({\n      0: {\n        transform: {\n          rotate: `${-90 * i}deg`,\n          translate: "0%, 0%",\n        },\n      },\n      1: {\n        transform: {\n          translate: "180%, 0%",\n        },\n      },\n    }),\n  }, {\n    selector: true,\n    iterationCount: "infinite",\n    easing: "ease-in-out",\n  });/*play*/\n  '},examples:[{title:"transform",value:"transform"}]}]},{title:"Timeline",description:"",features:[{id:"timeline",title:"Timeline",description:'<a href="https://github.com/daybrush/scenejs-timeline" target="_blank">@scenejs/timeline</a> is a library that represents the timeline of Scene.js. You can control time, properties, and items.',html:'\n  <div class="clapper">\n    <div class="clapper-container">\n      <div class="clapper-body">\n        <div class="top">\n          <div class="stick stick1">\n            <div class="rect"></div>\n            <div class="rect"></div>\n            <div class="rect"></div>\n            <div class="rect"></div>\n            <div class="rect"></div>\n            <div class="rect"></div>\n          </div>\n          <div class="stick stick2">\n            <div class="rect"></div>\n            <div class="rect"></div>\n            <div class="rect"></div>\n            <div class="rect"></div>\n            <div class="rect"></div>\n            <div class="rect"></div>\n          </div>\n        </div>\n        <div class="bottom"></div>\n      </div>\n      <div class="circle"></div>\n      <div class="play">\n      <svg class="__shape-svg" viewBox="0 0 70 77.73502691896255">\n        <path d="M 60 38.86751345948127 L 10.000000000000021 67.73502691896255 L 10 10 L 60 38.86751345948127 Z" fill="#333" stroke-linejoin="round" stroke-width="10" stroke="#333"></path></svg>\n      </div>\n    </div>\n  </div>\n          ',code:function(){return'\n  var clapperScene = new Scene({\n    ".clapper": {\n      2: "transform: translate(-50%, -50%) rotate(0deg)",\n      2.5: "transform: rotate(-15deg)",\n      3: "transform: rotate(0deg)",\n      3.5: "transform: rotate(-10deg)",\n    },\n    ".clapper-container" : {\n      0: Scene.zoomIn({ duration: 1 }),\n    },\n    ".clapper .circle": {\n      0.3: Scene.zoomIn({ duration: 1 }),\n    },\n    ".clapper .play": {\n      0: "transform: translate(-50%, -50%)",\n      0.6: Scene.zoomIn({ duration: 1 }),\n    },\n    ".top .stick1": {\n      2: "transform: rotate(0deg)",\n      2.5: "transform: rotate(-20deg)",\n      3: "transform: rotate(0deg)",\n      3.5: "transform: rotate(-10deg)",\n    },\n    ".stick1 .rect": i => ({\n      0: "transform: scale(0) skew(15deg)",\n      0.7: "transform: scale(1)",\n      options: { delay: 0.6 + i * 0.1 },\n    }),\n    ".stick2 .rect": i => ({\n      0: "transform: scale(0) skew(-15deg)",\n      0.7: "transform: scale(1)",\n      options: { delay: 0.8 + i * 0.1 },\n    }),\n  }, {\n    easing: "ease-in-out",\n    selector: (selector) => "[data-timeline] " + selector,\n  });\n  new Timeline(\n    clapperScene,\n    document.querySelector("#timeline .example_result"),\n    { keyboard: false },\n  );\n  '},examples:[{title:"",value:""}]},{id:"keyframer",title:"Keyframer",description:'<a href="https://github.com/daybrush/keyframer" target="_blank">keyframer</a> is a library that ake the CSS Keyframes the keyframes object. play CSS keyframes.',html:'\n          <style>\n          @keyframes keyframer_keyframes {\n            7.69% {\n              border-width:35px;\n              transform: translate(-50%, -50%) scale(0);\n            }\n            84.61% {\n              border-width: 0px;\n              transform: translate(-50%, -50%) scale(1);\n            }\n            100% {\n              border-width: 0px;\n              transform: translate(-50%, -50%) scale(1);\n            }\n          }\n          </style>\n          <div class="rects"><div class="rect"></div></div>\n          ',code:function(){return'\n  /*\n  <style>\n  @keyframes keyframer_keyframes {\n    7.69% {\n      border-width:35px;\n      transform: translate(-50%, -50%) scale(0);\n    }\n    84.61% {\n      border-width: 0px;\n      transform: translate(-50%, -50%) scale(1);\n    }\n    100% {\n      border-width: 0px;\n      transform: translate(-50%, -50%) scale(1);\n    }\n  }\n  </style>\n  */\n  var keyframesObject = Keyframer.getKeyframes("keyframer_keyframes");\n\n  new Scene.SceneItem(keyframesObject)\n    .setIterationCount("infinite")\n    .setDuration(1)\n    .setSelector("[data-keyframer] .rect")\n    ;/*play*/\n  '},examples:[{value:""}]},{id:"progress",title:"Progress",description:"You can create a player that can tell progress from 0% to 100% over time and control the scene.",html:'\n          <div class="circles">\n            <div class="circle circle1"></div>\n            <div class="circle circle2"></div>\n            <div class="circle circle3"></div>\n          </div>\n          <div class="player">\n            <div class="play"></div>\n            <input class="progress" type="range" value="0" min="0" max="100"/>\n          </div>',code:function(){return'\n  var scene = new Scene({\n    "[data-progress] .circle": i => ({\n      0: {"border-width": "150px", opacity: 1, transform: "translate(-50%, -50%) scale(0)"},\n      1.5: {"border-width": "0px", opacity: 0.3, transform: "scale(0.7)"},\n      options: {\n        delay: i * 0.4,\n      },\n    }),\n  }, {\n    easing: "ease-in-out",\n    fillMode: "forwards",\n    selector: true,\n  }).setTime(0);\n  var playEl = document.querySelector("[data-progress] .play");\n  var progressEl = document.querySelector("[data-progress] .progress");\n  var duration = scene.getDuration();\n\n  scene.on("play", e => {\n    playEl.className = "pause";\n  });\n  scene.on("paused", e => {\n    playEl.className = "play";\n  })\n  scene.on("animate", e => {\n    progressEl.value = 100 * e.time / duration;\n  });\n  playEl.addEventListener("click", e => {\n    scene.isPaused() ? scene.play() : scene.pause();\n  });\n  progressEl.addEventListener("input", e => {\n    scene.pause();\n    scene.setTime(progressEl.value + "%");\n  });\n  '},examples:[{title:"",value:""}]}]},{title:"SVG Animation",features:[{id:"linedrawing",title:"Line Drawing",description:"You can create handwriting-like effects with the css property called <strong>stroke-dasharray</strong>.",code:function(){return'\n  new Scene({\n    "[data-linedrawing] svg path": {\n        "0": "stroke-dasharray: 4450 4450",\n        "0>": "stroke-dasharray: 0 4450",\n        "0.3": "stroke-dasharray: 360 4450",\n        "1.2": "stroke-dasharray: 1450 4450",\n        "2": "stroke-dasharray: 2400 4450",\n        "2.6": "stroke-dasharray: 3000 4450",\n        "3.1": "stroke-dasharray: 4450 4450",\n    },\n  }, {\n    iterationCount: "infinite",\n    easing: "ease-in",\n    selector: true,\n  });/*play*/\n  '},html:'\n  <svg class="svg" width="100%" height="100%" viewBox="0 0 500 200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/">\n      <g transform="matrix(0.5,0,0,0.5,0,0)">\n          <g id="Artboard1" transform="matrix(0.966957,0,0,0.675155,-748.037,-365.425)">\n              <rect x="773.599" y="541.246" width="1034.17" height="592.456" style="fill:none;"/>\n              <g id="Layer1" transform="matrix(1.03417,0,0,1.48114,773.599,520.51)">\n                  <path stroke="#333" stroke-width="20" stroke-linecap="round" fill="transparent" d="M14.072,282.172C62.055,287.178 211.405,258.288 232.093,106.803C245.183,10.95 175.634,38.769 175.274,121.466C174.696,254.303 345.708,276.667 261.505,364.848C223.868,404.264 162.843,365.295 135.844,332.678C44.912,222.821 174.741,290.734 226.944,314.06C305.751,349.274 394.038,317.424 421.116,157.12C440.884,40.084 426.007,37.332 405.238,178.8C374.39,388.93 525.241,428.727 604.056,135.659C631.833,32.372 590.153,120.492 700.477,128.771C765.675,133.664 906.434,99.5 899.092,83.529C888.047,59.504 651.522,134.399 689.798,210.4C715.743,261.917 824.613,253.598 880.128,185.618C925.485,130.077 888.739,57.951 897.887,113.597C922.461,263.076 786.919,398.343 713.414,373.936C695.57,368.011 688.743,349.213 700.318,334.202C754.291,264.208 948.931,261.515 988.492,282.759" style="fill:none;"/>\n              </g>\n          </g>\n      </g>\n  </svg>',examples:[{title:"",value:""}]},{id:"morph",title:"Morph Shape",description:"In <strong>path</strong> SVGElement, you can transform the shape through the attribute <strong>d</strong>.",code:function(){return'\n  /*mouse*/new Scene({\n    "[data-morph] svg": {\n      transform: {\n        rotate: ["0deg", "180deg", "180deg", "0deg"],\n      },\n    },\n    "[data-morph] path": {\n      attribute: {\n        "d": [\n          "'+n+'",\n          "'+a+'",\n          "'+i+'",\n          "'+s+'",\n        ],\n      },\n    },\n  }, {\n    easing: "ease-in-out",\n    duration: 3,\n    selector: true,\n  });/*play*/\n  '},html:'\n  <svg class="svg" viewBox="0 0 120 120">\n    <path stroke="#333" stroke-width="5" stroke-linejoin="round" stroke-linecap="round" fill="transparent"/>\n  </svg>',examples:[{title:"",value:""}]}]},{title:"Controls",features:[{id:"jscss",title:"Play JavaScript & Play CSS",description:"Scene.js supports both JavaScript and CSS play methods.",html:'\n          <div class="play-method play-method-js">\n            <h5>Play JavaScript</h5>\n            <div class="clapper">\n              <div class="clapper-container">\n                <div class="clapper-body">\n                  <div class="top">\n                    <div class="stick stick1">\n                      <div class="rect"></div>\n                      <div class="rect"></div>\n                      <div class="rect"></div>\n                      <div class="rect"></div>\n                      <div class="rect"></div>\n                      <div class="rect"></div>\n                    </div>\n                    <div class="stick stick2">\n                      <div class="rect"></div>\n                      <div class="rect"></div>\n                      <div class="rect"></div>\n                      <div class="rect"></div>\n                      <div class="rect"></div>\n                      <div class="rect"></div>\n                    </div>\n                  </div>\n                  <div class="bottom"></div>\n                </div>\n                <div class="circle"></div>\n                <div class="play">\n                  <svg class="__shape-svg" viewBox="0 0 70 77.73502691896255">\n                    <path d="M 60 38.86751345948127 L 10.000000000000021 67.73502691896255 L 10 10 L 60 38.86751345948127 Z" fill="#333" stroke-linejoin="round" stroke-width="10" stroke="#333"></path>\n                  </svg>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class="play-method play-method-css">\n          <h5>Play CSS</h5>\n            <div class="clapper">\n              <div class="clapper-container">\n                <div class="clapper-body">\n                  <div class="top">\n                    <div class="stick stick1">\n                      <div class="rect"></div>\n                      <div class="rect"></div>\n                      <div class="rect"></div>\n                      <div class="rect"></div>\n                      <div class="rect"></div>\n                      <div class="rect"></div>\n                    </div>\n                    <div class="stick stick2">\n                      <div class="rect"></div>\n                      <div class="rect"></div>\n                      <div class="rect"></div>\n                      <div class="rect"></div>\n                      <div class="rect"></div>\n                      <div class="rect"></div>\n                    </div>\n                  </div>\n                  <div class="bottom"></div>\n                </div>\n                <div class="circle"></div>\n                <div class="play">\n                  <svg class="__shape-svg" viewBox="0 0 70 77.73502691896255">\n                    <path d="M 60 38.86751345948127 L 10.000000000000021 67.73502691896255 L 10 10 L 60 38.86751345948127 Z" fill="#333" stroke-linejoin="round" stroke-width="10" stroke="#333"></path>\n                  </svg>\n                </div>\n              </div>\n            </div>\n          </div>',code:function(){return'\n  var keyframes = {\n    ".clapper": {\n      2: "transform: translate(-50%, -50%) rotate(0deg)",\n      2.5: "transform: rotate(-15deg)",\n      3: "transform: rotate(0deg)",\n      3.5: "transform: rotate(-10deg)",\n    },\n    ".clapper-container" : {\n      0: Scene.zoomIn({ duration: 1 }),\n    },\n    ".clapper .circle": {\n      0.3: Scene.zoomIn({ duration: 1 }),\n    },\n    ".clapper .play": {\n      0: "transform: translate(-50%, -50%)",\n      0.6: Scene.zoomIn({ duration: 1 }),\n    },\n    ".top .stick1": {\n      2: "transform: rotate(0deg)",\n      2.5: "transform: rotate(-20deg)",\n      3: "transform: rotate(0deg)",\n      3.5: "transform: rotate(-10deg)",\n    },\n    ".stick1 .rect": i => ({\n      0: "transform: scale(0) skew(15deg)",\n      0.7: "transform: scale(1)",\n      options: { delay: 0.6 + i * 0.1 },\n    }),\n    ".stick2 .rect": i => ({\n      0: "transform: scale(0) skew(-15deg)",\n      0.7: "transform: scale(1)",\n      options: { delay: 0.8 + i * 0.1 },\n    }),\n  };\n  /*mouse*/new Scene(keyframes, {\n    selector: selector => ".play-method-js " + selector,\n    easing: "ease-in-out",\n  });/*play*/\n\n  new Scene(keyframes, {\n    selector: selector => ".play-method-css " + selector,\n    easing: "ease-in-out",\n  });/*playcss*/\n  '},examples:[{title:"",value:""}]}]},{title:"Effects",description:'<a href="https://github.com/daybrush/scenejs-effects" target="_blank">@scenejs/effects</a> is a library that can create various animation effects in <a href="https://github.com/daybrush/scenejs" target="_blank">scenejs</a>.',features:[{id:"typing",title:"typing",description:'Make a typing effect that is typed one character at a time like a typewriter. (see: <a href="https://daybrush.com/scenejs-effects/release/latest/doc/effects.html#.typing" target="_blank">.typing</a>)',html:'<div class="text center"><span></span><div class="cursor"></div></div>',code:function(){return'\n  /*mouse*/new Scene({\n    "[data-typing] .text span":\n      Scene.typing({\n        text: "Make a typing effect with Scene.js.",\n        duration: 7,\n      }),\n    "[data-typing] .cursor": {\n      0: { opacity: 0 },\n      0.5: { opacity: 0 },\n      "0.5>": { opacity: 1 },\n      1: { opacity: 1 },\n      options: {\n        iterationCount: "infinite",\n      }\n    },\n  }, {\n    selector: true,\n  });/*play*/\n'},examples:[{value:""}]},{id:"fadein",title:"fadeIn",description:'Make a fade in effect. (see: <a href="https://daybrush.com/scenejs-effects/release/latest/doc/effects.html#.fadeIn" target="_blank">.fadeIn</a>)',html:'<div class="target center">1</div>',code:function(){return'\n  Scene\n    .fadeIn({ duration: 1 })\n    .setSelector("[data-fadein] .target")\n    ;/*play*/\n  '},examples:[{value:""}]},{id:"fadeout",title:"fadeOut",description:'Make a fade out effect. (see: <a href="https://daybrush.com/scenejs-effects/release/latest/doc/effects.html#.fadeIn" target="_blank">.fadeIn</a>)',html:'<div class="target center">1</div>',code:function(){return'\n  Scene\n    .fadeOut()\n    .setDuration(1)\n    .setSelector("[data-fadeout] .target")\n    ;/*play*/\n  '},examples:[{value:""}]},{id:"blink",title:"blink",description:'Make a blinking effect. (see: <a href="https://daybrush.com/scenejs-effects/release/latest/doc/effects.html#.blink" target="_blank">.blink</a>)',html:'<div class="target center">1</div>',code:function(){return'\n  Scene\n    .blink({ duration: 1 })\n    .setSelector("[data-blink] .target")\n    ;/*play*/\n  '},examples:[{value:""}]},{id:"wipein",title:"wipeIn",description:'Make a wipe in effect. (see: <a href="https://daybrush.com/scenejs-effects/release/latest/doc/effects.html#.wipeIn" target="_blank">.wipeIn</a>)',html:'<div class="target center">1</div>',code:function(){return'\n  Scene\n    .wipeIn({ duration: 1 })\n    .setSelector("[data-wipein] .target")\n    ;/*play*/\n  '},examples:[{value:""}]},{id:"wipeout",title:"wipeOut",description:'Make a wipe out effect. (see: <a href="https://daybrush.com/scenejs-effects/release/latest/doc/effects.html#.wipeOut" target="_blank">.wipeOut</a>)',html:'<div class="target center">1</div>',code:function(){return'\n  Scene\n    .wipeOut({ duration: 1 })\n    .setSelector("[data-wipeout] .target")\n    ;/*play*/\n  '},examples:[{value:""}]},{id:"zoomin",title:"zoomIn",description:'Make a zoom in effect. (see: <a href="https://daybrush.com/scenejs-effects/release/latest/doc/effects.html#.zoomIn" target="_blank">.zoomIn</a>)',html:'<div class="target center">1</div>',code:function(){return'\n  Scene\n    .zoomIn({ duration: 1 })\n    .setSelector("[data-zoomin] .target")\n    ;/*play*/\n  '},examples:[{value:""}]},{id:"zoomout",title:"zoomOut",description:'Make a zoom out effect. (see: <a href="https://daybrush.com/scenejs-effects/release/latest/doc/effects.html#.zoomOut" target="_blank">.zoomOut</a>)',html:'<div class="target center">1</div>',code:function(){return'\n  Scene\n    .zoomOut({ duration: 1 })\n    .setSelector("[data-zoomout] .target")\n    ;/*play*/\n  '},examples:[{value:""}]},{id:"shake",title:"shake",description:'Make a shake effect. (see: <a href="https://daybrush.com/scenejs-effects/release/latest/doc/effects.html#.shake" target="_blank">.shake</a>)',html:'<div class="target center">1</div><div class="target2 center">2</div>',code:function(){return'\n  Scene\n    .shake()\n    .setDuration(0.2)\n    .setIterationCount("infinite")\n    .setSelector("[data-shake] .target")\n    ;/*play*/\n\n  Scene\n    .shake({\n      properties: {\n        transform: {\n          /* shakeX */\n          translateX: "5px",\n          /* shakeY */\n          translateY: "5px",\n          rotate: "5deg",\n          scale: [0.8, 1],\n        },\n      },\n      frequency: 10,\n    })\n    .setDuration(0.2)\n    .setIterationCount("infinite")\n    .setSelector("[data-shake] .target2")\n    ;/*play*/\n  '},examples:[{value:""}]},{id:"shakex",title:"shakeX",description:'Make a horizontal shake effect. (see: <a href="https://daybrush.com/scenejs-effects/release/latest/doc/effects.html#.shakeX" target="_blank">.shakeX</a>)',html:'<div class="target center">1</div>',code:function(){return'\n  Scene\n    /* shakeX({ x: "5px", frequency: 10 }) */\n    .shakeX()\n    .setDuration(0.2)\n    .setIterationCount("infinite")\n    .setSelector("[data-shakex] .target")\n    ;/*play*/\n  '},examples:[{value:""}]},{id:"shakey",title:"shakeY",description:'Make a vertical shake effect. (see: <a href="https://daybrush.com/scenejs-effects/release/latest/doc/effects.html#.shakeY" target="_blank">.shakeY</a>)',html:'<div class="target center">1</div>',code:function(){return'\n  Scene\n    /* shakeY({ y: "5px", frequency: 10 }) */\n    .shakeY()\n    .setDuration(0.2)\n    .setIterationCount("infinite")\n    .setSelector("[data-shakey] .target")\n    ;/*play*/\n  '},examples:[{value:""}]},{id:"flip",title:"flip",description:'You can create a flip effect horizontally, vertically, or diagonally. (see: <a href="https://daybrush.com/scenejs-effects/release/latest/doc/effects.html#.flip" target="_blank">.flip</a>)',html:'<div class="flip target center">1</div><div class="flip target2 center">2</div>',code:function(){return'\n  Scene\n    /* flip({ x: 1, y: 1, backside: false }) */\n    .flip()\n    .setDuration(1)\n    .setSelector("[data-flip] .target")\n    ;/*play*/\n  Scene\n    .flip({ backside: true })\n    .setDuration(1)\n    .setSelector("[data-flip] .target2")\n    ;/*play*/\n  '},examples:[{value:""}]},{id:"flipx",title:"flipX",description:'You can create an effect that flips vertically around the x-axis. (see: <a href="https://daybrush.com/scenejs-effects/release/latest/doc/effects.html#.flipX" target="_blank">.flipX</a>)',html:'<div class="flip target center">1</div><div class="flip target2 center">2</div>',code:function(){return'\n  Scene\n    /* flipX({ x: 1, backside: false }) */\n    .flipX()\n    .setDuration(1)\n    .setSelector("[data-flipx] .target")\n    ;/*play*/\n  Scene\n    .flipX({ backside: true })\n    .setDuration(1)\n    .setSelector("[data-flipx] .target2")\n    ;/*play*/\n  '},examples:[{value:""}]},{id:"flipy",title:"flipY",description:'You can create an effect that flips horizontally around the y-axis. (see: <a href="https://daybrush.com/scenejs-effects/release/latest/doc/effects.html#.flipY" target="_blank">.flipY</a>)',html:'<div class="flip target center">1</div><div class="flip target2 center">2</div>',code:function(){return'\n  Scene\n    /* flipY({ y: 1, backside: false }) */\n    .flipY()\n    .setDuration(1)\n    .setSelector("[data-flipy] .target")\n    ;/*play*/\n  Scene\n    .flipY({ backside: true })\n    .setDuration(1)\n    .setSelector("[data-flipy] .target2")\n    ;/*play*/\n  '},examples:[{value:""}]},{id:"transition",title:"transition",description:'Switch the scene from `item1` to `item2`. (see: <a href="https://daybrush.com/scenejs-effects/release/latest/doc/effects.html#.transition" target="_blank">.transition</a>)',html:'<div class="flip target center">1</div><div class="flip target2 center">2</div>',code:function(){return'\n  var transitionScene = new Scene({\n    "[data-transition] .target": {},\n    "[data-transition] .target2": {},\n  }, {\n    delay: 0.1,\n    easing: "ease-in-out",\n    selector: true,\n  });\n  Scene.transition(\n    transitionScene.getItem("[data-transition] .target"),\n    transitionScene.getItem("[data-transition] .target2"),\n    {\n      0:  [\n        Scene.fadeOut({ duration: 1 }),\n        Scene.zoomIn({ from: 1, to: 2, duration: 1 }),\n        "opacity: 1; transform: rotate(0deg)",\n      ],\n      1: "opacity: 0; transform: rotate(40deg)",\n    }\n  );\n  transitionScene;/*play*/\n  '},examples:[{value:""}]}]},{title:"Rendering",features:[{id:"mp4",title:"Export MP4",description:'You can export CSS Animation to a video file with simple commands using <a href="https://ffmpeg.org/" target="_blank">ffmpeg</a> and <a href="https://github.com/daybrush/scenejs-render" target="_blank">@scenejs/render</a>. <br/><br/> <a href="https://daybrush.com/scenejs/release/latest/examples/clapper.html" target="_blank">Original Source</a>',html:'<iframe width="560" height="315" src="https://www.youtube.com/embed/rb-5xBKyCeE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',code:function(){return'\n  /*\n  # export mp4\n  $ render -i index.html --name scene\n  # export only mp3\n  $ render -i index.html --name scene -o output.mp3\n  # export mp3 file and mp4 file\n  $ render -i index.html --name scene -o output.mp3,output.mp4\n\n\n  -b, --bitrate [value]  Bitrate of video (the higher the bit rate, the clearer the video quality) (defaults to "4096k")\n  -c, --cache <n>        you can pass Capture. (0: false, 1: true) (defaults to 0)\n  -C, --codec            Codec to encode video If you don\'t set it up, it\'s the default(mp4: libx264, webm:libvpx-vp9) (defaults to "")\n  -d, --duration <n>     how many seconds to play (defaults to 0)\n  -f, --fps <n>          fps (defaults to 60)\n  -h, --height <n>       Video height to render (defaults to 1080)\n  -H, --help             Output usage information\n  -i, --input [value]    File URL to Rendering (defaults to "index.html")\n  -I, --iteration <n>    iterationCount of the Scene set by the user himself. (defaults to 0)\n  -m, --media [value]    Name of mediaScene to render (defaults to "mediaScene")\n  -M, --multi <n>        Number of processes to create. (defaults to 1)\n  -n, --name [value]     Name of scene to render (defaults to "scene")\n  -o, --output [value]   Output file name (defaults to "output.mp4")\n  -p, --port <n>         Port to Rendering (defaults to 3033)\n  -s, --scale <n>        Scale of screen size (defaults to 1)\n  -S, --startTime <n>    Time to start (defaults to 0)\n  -v, --version          Output the version number\n  -w, --width <n>        Video width to render (defaults to 1920)\n  */\n  '},examples:[{value:""}]}]}];document.querySelector(".container_overview").insertAdjacentHTML("beforeend",r.map(function(e){return function(e){return'\n  <h2 id="'+e.title.replace(/\s/g,"-").toLowerCase()+'">'+e.title+'</h2>\n  <p class="description">'+(e.description||"")+"</p>\n  "+e.features.map(function(e){return function(n){return'\n  <div class="feature" id="'+n.id+'">\n      <h4 class="name">'+n.title+'</h4>\n      <p class="description">'+(n.description||"")+'</p>\n      <div class="examples">\n          '+n.examples.map(function(e,t){return function(e,t,n,a,i){return'\n  <div class="example" data-'+n+'="'+e.value+'">\n    <div class="example_wrapper left">\n        <h5>'+(e.title||"")+'</h5>\n        <div class="example_result">\n            <div class="container">\n                '+(e.html||("function"==typeof a?a(e.title):a))+'\n            </div>\n        </div>\n      </div>\n      <div class="example_wrapper right">\n        <pre><code class="code javascript"></code></pre>\n        <script type="text/example" data-id="'+n+'" data-value="'+e.value+'">'+(e.code||i||function(e,t){})(e.value,t)+" <\/script>\n    </div>\n    </div>"}(e,t,n.id,n.html,n.code)}).join("")+"\n      </div>\n  </div>"}(e)}).join("")+"\n  "}(e)}).join("")),document.querySelector(".classes").innerHTML=r.map(function(e){return function(e){return'\n  <li class="parent">\n      <a href="#'+e.title.replace(/\s/g,"-").toLowerCase()+'">'+e.title+"</a>\n      <ul>\n          "+e.features.map(function(e){return function(e){return'\n  <li>\n      <a href="#'+e.id+'">'+e.title+"</a>\n  </li>\n  "}(e)}).join("")+"\n      </ul>\n  </li>\n  "}(e)}).join("");var d=0;utils.toArray(document.querySelectorAll(".feature")).forEach(function(e){utils.toArray(e.querySelectorAll(".example")).forEach(function(e){var t=e.querySelector("script"),n=t.innerText.trim(),a=n.replace("/*mouse*/","").replace(/;\/\*play\*\//g,".play();").replace(";/*playcss*/",".playCSS();");e.querySelector(".code").innerText=a;var i=document.createElement("script"),s=t.getAttribute("data-id"),r=t.getAttribute("data-value"),l="[data-"+s+(r?"='"+r+"'":"")+"]",c=n;c=-1<n.indexOf("/*mouse*/")?c.replace("/*mouse*/","var scene"+ ++d+" = ").replace(/;\/\*play\*\//g,function(e,t){return".setTime(0);\n  var element"+t+' = document.querySelector("'+e+'");\n  element'+t+'.addEventListener("mouseenter", () =>  {\n    scene'+t+'.getPlayState() !== "running" && scene'+t+".play();\n  });\n  element"+t+'.addEventListener("mouseleave", () =>  {\n    scene'+t+".finish();\n  });\n  "}(l,d)).replace(";/*playcss*/",o(l)):c.replace(/;\/\*play\*\//g,o(l)),utils.addEvent(e,"click",function(e){}),i.innerHTML=c,e.appendChild(i)})}),hljs.initHighlightingOnLoad()}();
//# sourceMappingURL=features.js.map
